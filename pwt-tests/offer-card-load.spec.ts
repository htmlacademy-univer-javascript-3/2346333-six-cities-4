import { test, expect } from '@playwright/test';

test('Uploading of offer cards', async ({ page }) => {
  // Ждем ответа от сервера, содержащего информацию о предложениях, и страницы загрузки
  await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes('/offers') && resp.status() === 200
    ),
    page.goto('http://localhost:5173')
  ]);

  // Ждем появления элемента навигационной ссылки
  await page.waitForSelector('.header__nav-link');

  // Получаем заголовки всех карточек предложений
  const cardTitles = await page.locator('.place-card__name').allInnerTexts();
  // Получаем число отрисованных карточек
  const drawnNumberOfCards = parseInt((await page.locator('.places__found').textContent())?.split(' ')[0] ?? '0');

  // Проверяем, что было отрисовано 20 карточек
  expect(20).toEqual(drawnNumberOfCards);
  // Проверяем, что все заголовки имеют длину более 10 символов
  cardTitles.forEach((title) => title.length > 10);
});
