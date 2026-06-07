import { test, expect } from "@playwright/test";

test("Verify page title", async ({ page }) => {

  await page.goto("https://www.saucedemo.com", { waitUntil: "networkidle" });

  // ✅ page.title() — must be called as a function with ()
  console.log("title:", await page.title());

  await expect(page).toHaveTitle("Swag Labs", { timeout: 15000 });

});