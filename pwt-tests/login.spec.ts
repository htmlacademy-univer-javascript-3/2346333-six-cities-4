import { test, expect } from '@playwright/test';

test('Valid/Invalid Authentication', async ({ page }) => {
  // Переходим на страницу входа
  await page.goto('http://localhost:5173/login');

  // Вводим неверные учетные данные
  await page.fill('input[name="email"]', 'UserTest@mail.com');
  await page.fill('input[name="password"]', 'invalid');

  // Нажимаем кнопку входа
  await page.click('button[type="submit"]');

  // Проверяем, что появилось сообщение об ошибке валидации
  await page.isVisible("text='Validation error: '/six-cities/login''");

  // Проверяем, что URL остается тем же
  expect(page.url()).toBe('http://localhost:5173/login');

  // Возвращаемся на страницу входа
  await page.goto('http://localhost:5173/login');

  // Вводим правильные учетные данные
  await page.fill('input[name="email"]', 'UserTest@mail.com');
  await page.fill('input[name="password"]', '88hit88');

  // Нажимаем кнопку входа с ожиданием перехода на главную страницу
  await Promise.all([
    page.waitForURL('http://localhost:5173'),
    page.click('button[type="submit"]'),
  ]);
});
