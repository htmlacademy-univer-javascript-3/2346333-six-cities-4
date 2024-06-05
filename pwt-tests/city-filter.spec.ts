import { test, Locator } from '@playwright/test';

test.describe('City filter', () => {
  // Проверка фильтрации карточек городов
  test('Checking card filtering', async ({ page }) => {
    // Переходим на главную страницу
    await page.goto('http://localhost:5173/');
    // Ожидаем появления ссылок на города
    await page.waitForSelector('.locations__item-link');

    // Инициализируем список предложений
    const offersList: Locator[] = [];

    // Получаем все кнопки для выбора города
    const citiesButtons = await page.locator('.locations__item-link').all();
    // Проходим по каждой кнопке города
    for (const cityButton of citiesButtons) {
      // Кликаем на кнопку выбора города
      await cityButton.click();

      // Получаем все карточки предложений для текущего города
      const cityCards = await page.locator('.cities__card').all();
      // Проверяем каждую карточку
      cityCards.forEach((card => {
        // Если карточка уже присутствует в списке, выбрасываем ошибку
        if (offersList.includes(card)) {
          throw new Error("Duplicate card found");
        } else {
          // Иначе добавляем карточку в список
          offersList.push(card);
        }
      }))
    }
  });
});
