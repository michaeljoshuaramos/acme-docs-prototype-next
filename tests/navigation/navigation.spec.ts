import { test, expect } from "@playwright/test";

test("should navigate to api reference page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");

  // Find an element with the text 'API Reference' and click on it
  await page.click("text=API Reference");

  // The new URL should be "/api-reference" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/api-reference");

  // The new page should contain an h1 with "API Reference"
  await expect(page.locator("h1")).toHaveText("API Reference");
});
