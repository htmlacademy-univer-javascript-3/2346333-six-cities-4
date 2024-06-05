import { test, expect } from '@playwright/test';

test('Favorite (Authorized/Unauthorized)', async ({ page }) => {
  // Функция для проверки, является ли элемент избранным
  const isFavorite = async () => {
    const favBtnClassList = await page
      .locator('.bookmark-button')
      .first()
      .evaluate((el) => [...el.classList]);
    return favBtnClassList.includes('place-card__bookmark-button--active');
  };

  // Функция для получения количества избранных элементов
  const getFavoritesNumber = async () =>
    parseInt(
      (await page.locator('.header__favorite-count').textContent()) || '0'
    );

  // Переходим на главную страницу
  await page.goto('http://localhost:5173');
  await page.waitForSelector('.cities__card');

  // Кликаем на первую кнопку "Добавить в избранное"
  await page.locator('.bookmark-button').first().click();
  await page.waitForURL('http://localhost:5173/login');

  // Возвращаемся на главную страницу
  await page.goto('http://localhost:5173');
  await page.waitForSelector('.cities__card');

  // Кликаем на первую карточку места
  await page.locator('.place-card__name').first().click();
  await page.waitForSelector('.offer__inside-list');

  // Кликаем на кнопку "Добавить в избранное" на странице предложения
  await page.locator('.bookmark-button').first().click();
  await page.waitForURL('http://localhost:5173/login');

  // Переходим на страницу избранных
  await page.goto('http://localhost:5173/favorites');
  await page.waitForURL('http://localhost:5173/login');

  // Переходим на страницу авторизации
  await page.goto('http://localhost:5173/login');

  // Авторизуемся
  await page.fill('input[name="email"]', 'UserTest@mail.com');
  await page.fill('input[name="password"]', '88hit88');
  await Promise.all([
    page.waitForURL('http://localhost:5173'),
    page.click('button[type="submit"]'),
  ]);

  // Дожидаемся появления карточек мест на главной странице
  await page.waitForSelector('.cities__card');

  // Кликаем на кнопку "Добавить в избранное" с ожиданием ответа
  await Promise.all([
    page.waitForResponse(
      (resp) =>
        resp.url().includes('/favorite') &&
        resp.status() === 201,
        { timeout: 60000 } // Таймаут ожидания ответа
    ),
    page.locator('.bookmark-button').first().click(),
  ]);

  // Проверяем, что элемент добавлен в избранное
  const isFavoriteAfterAction = await isFavorite();
  expect(isFavoriteAfterAction).toBeTruthy();

  // Дожидаемся появления числа "1" на странице избранных
  await page.waitForSelector("text='1'");

  // Переходим на страницу избранных
  await Promise.all([
    page.waitForURL('http://localhost:5173/favorites'),
    page.getByRole('link', { name: 'UserTest@mail.com' }).click(),
  ]);

  // Дожидаемся появления списка избранных элементов
  await page.waitForSelector(`.favorites__list`);

  // Проверяем, что добавленный элемент находится в списке
  const favCardCity = await page.locator('.locations__item-link').first().textContent();
  expect(favCardCity).toBe('Paris');

  // Получаем текущее количество избранных элементов
  const favoritesCardsNumber = await page.locator('.locations__item-link').count();
  const lastFavCounter = await getFavoritesNumber();
  expect(favoritesCardsNumber).toBe(lastFavCounter);

  // Удаляем элемент из избранного
  await Promise.all([
    page.waitForResponse(
      (resp) =>
        resp.url().includes('/favorite') &&
        resp.status() === 200
    ),
    page.locator('.bookmark-button').first().click(),
  ]);

    // Дожидаемся появления сообщения об отсутствии сохраненных элементов
    await page.waitForSelector("text='Nothing yet saved.'");
});
