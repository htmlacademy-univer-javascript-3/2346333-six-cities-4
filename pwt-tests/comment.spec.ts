import { test, expect } from '@playwright/test';

test('Comment', async ({ page }) => {
  // Задаем текст комментария и рейтинг
  const REVIEW_TEXT =
    'Текст для формы комментария длиной больше пятидесяти символов чтобы он наверняка прошёл';
  const RATING = 'not bad';

  // Функция для проверки видимости формы комментария
  const isCommentFormVisible = async () => await page.isVisible('.reviews__form')

  // Переходим на главную страницу
  await page.goto('http://localhost:5173');

  // Ожидаем появления карточек городов
  await page.waitForSelector('.cities__card');

  // Кликаем на первую карточку, ожидаем загрузки страницы с предложениями
  await page.locator('.place-card__name').first().click();
  await page.waitForSelector('.offer__inside-list', { timeout: 60000 }); // Ожидаем появления списка предложений в течение 60 секунд

  // Проверяем, что форма комментария не видна
  const hasCommentForm = await isCommentFormVisible();
  expect(hasCommentForm).toBeFalsy();

  // Переходим на страницу входа
  await page.goto('http://localhost:5173/login');

  // Заполняем форму входа
  await page.fill('input[name="email"]', 'UserTest@mail.com');
  await page.fill('input[name="password"]', '88hit88');
  await page.click('button[type="submit"]');

  // Ожидаем загрузки главной страницы после входа
  await page.waitForSelector('.cities__card');

  // Кликаем на первую карточку предложения
  await page.locator('.place-card__name').first().click();

  // Ожидаем загрузки страницы предложения
  await page.waitForSelector('.offer__inside-list');

  // Проверяем видимость формы комментария после авторизации
  const hasCommentFormAfterAuth = await isCommentFormVisible();
  expect(hasCommentFormAfterAuth).toBeTruthy();

  // Получаем элементы формы комментария и заполняем ее
  const commentForm = await page.locator('.reviews__form');
  expect(commentForm).toBeTruthy();
  await page.fill('[name="review"]', REVIEW_TEXT);
  await page.getByTitle(RATING).click();

  // Отправляем комментарий
  await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes('/comments') && resp.status() === 201
    ),
    page.click('button[type="submit"]'),
  ]);

  // Проверяем, что комментарий отображается корректно
  const reviewText = await page
    .locator('.reviews__text')
    .first()
    .textContent();
  const reviewAuthor = (await page
    .locator('.reviews__user-name')
    .first()
    .textContent())
    ?.trim();
  const reviewRating = await page
    .locator('.reviews__stars>span')
    .first()
    .getAttribute('style');

  // Проверяем корректность текста, автора и рейтинга комментария
  expect(reviewText).toBe(REVIEW_TEXT);
  expect(reviewAuthor).toBe('UserTest');
  expect(reviewRating).toBe('width: 60%;');
});
