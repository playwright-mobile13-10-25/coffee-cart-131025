import {test as baseTest, expect as baseExpect, TestInfo} from '@playwright/test';
import {BASE_URL} from '../config/env';


const test = baseTest.extend({
  // Add custom fixtures or overrides here
  page: async ({ page }, use) => {
    // Navigate to the base URL before each test
    // await page.goto(process.env.BASE_URL || 'https://example.com/');

    // beforeeach hook to navigate to BASE_URL
    await use(page);
    // after each test cleanup can go here

  },

  baseURL: async ({}, use) => {
    await use(BASE_URL);
  }
});

// Hook to capture screenshot on test failure
test.afterEach(async ({page}, testInfo:TestInfo) => {
    if (testInfo.status !== "passed") {
        // Handle test failure
        try {
            const screenshot = await page.screenshot({ fullPage: true });
            await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
        } catch (error) {
            console.warn('Error capturing screenshot on failure:', error);
        }
    }
});
const expect = baseExpect;

export { test, expect };