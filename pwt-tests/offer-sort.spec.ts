import { test, expect } from '@playwright/test';

test.describe('Offers sorting', () => {
  test('Checking sorting by price', async ({ page }) => {
    // Переходим на главную страницу
    await page.goto('http://localhost:5173/');
    
    // Ожидаем появления карточек предложений
    await page.waitForSelector('.cities__card');

    // Получаем все элементы с ценами карточек предложений
    const priceElements = await page.$$('.place-card__price-value');
    const prices: number[] = [];

    // Проходим по каждому элементу с ценой
    for (const element of priceElements) {
      // Проверяем, имеет ли элемент свойство innerText (для исключения SVG-элементов)
      if ('innerText' in element) {
        // Получаем текст цены
        const priceText = await element.innerText();
        // Преобразуем текст в число и добавляем в массив цен
        prices.push(parseInt(priceText));
      }
    }

    // Создаем ожидаемые массивы цен для сортировки от низкой к высокой и от высокой к низкой
    const expectedLowToHighPrices = prices.slice().sort((a, b) => a - b);
    const expectedHighToLowPrices = prices.slice().sort((a, b) => b - a);

    // Кликаем на сортировку от низкой к высокой цене
    await page.click('.places__sorting-type');
    await page.click('text="Price: low to high"');

    // Ожидаем загрузки карточек после сортировки
    await page.waitForSelector('.cities__card');

    // Получаем цены после сортировки от низкой к высокой
    const lowToHighPriceElements = await page.$$('.place-card__price-value');
    const lowToHighPrices: Number[] = [];

    // Проходим по каждому элементу с ценой после сортировки
    for (const element of lowToHighPriceElements) {
      if ('innerText' in element) {
        const priceText = await element.innerText();
        lowToHighPrices.push(parseInt(priceText));
      }
    }

    // Ожидаем загрузки карточек после сортировки
    await page.waitForSelector('.cities__card');

    // Получаем цены после сортировки от высокой к низкой
    const highToLowPriceElements = await page.$$('.place-card__price-value');
    const highToLowPrices: Number[] = [];

    // Проходим по каждому элементу с ценой после сортировки
    for (const element of highToLowPriceElements) {
      if ('innerText' in element) {
        const priceText = await element.innerText();
        highToLowPrices.push(parseInt(priceText));
      }
    }

    // Проверяем, что цены после сортировки соответствуют ожидаемым массивам цен
    expect(lowToHighPrices).toEqual(expectedLowToHighPrices);
    expect(highToLowPrices).toEqual(expectedHighToLowPrices);
  });
});
