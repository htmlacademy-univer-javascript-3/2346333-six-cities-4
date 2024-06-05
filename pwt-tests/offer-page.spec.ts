import { test, expect } from '@playwright/test';

test.describe('Offer page', () => {
  test('Checking the jump to the offer page', async ({ page }) => {
    // Переходим на главную страницу
    await page.goto('http://localhost:5173/');
    
    // Ожидаем появления карточек предложений
    await page.waitForSelector('.cities__card');

    // Находим первую карточку предложения
    const firstCard = await page.$('.cities__card');

    // Получаем информацию о цене, рейтинге, названии и типе предложения с главной страницы
    const price = await firstCard?.$eval('.place-card__price-value', el => el.textContent?.replace('€', '').trim());
    const rating = await firstCard?.$eval('.place-card__stars span', el => parseFloat(el.style.width) / 20);
    const title = await firstCard?.$eval('.place-card__name', el => el.textContent?.trim());
    const cardType = await firstCard?.$eval('.place-card__type', el => el.textContent?.trim());

    // Кликаем на первую карточку предложения
    await firstCard?.click();

    // Ожидаем появления элемента с названием предложения на странице предложения
    await page.waitForSelector('.offer__name');

    // Получаем информацию о цене, рейтинге, названии и типе предложения на странице предложения
    const newPrice = await page.$eval('.offer__price-value', el => el.textContent?.replace('€', '').trim());
    const newRatingText = await page.$eval('.offer__rating-value', el => el.textContent?.trim() || '');
    const newRating = parseFloat(newRatingText);
    const newTitle = await page.$eval('.offer__name', el => el.textContent?.trim());
    const newType = await page.$eval('.offer__feature--entire', el => el.textContent?.trim());

    // Проверяем, что информация на странице предложения соответствует информации на главной странице
    expect(newPrice).toBe(price);
    expect(newRating).toBe(rating);
    expect(newTitle).toBe(title);
    expect(newType).toBe(cardType);
  });
});
