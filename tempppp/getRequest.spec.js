const { test, expect } = require('@playwright/test');

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tempppp',
  testMatch: '**/*.spec.js'
});

test('make an HTTP GET request', async ({ request }) => {
  const response = await request.get('https://google.com');

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  console.log(responseBody);
});