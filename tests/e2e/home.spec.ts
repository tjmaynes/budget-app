import { test, expect } from '@playwright/test'

test.describe('when a user lands on the home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('says a message', async ({ page }) => {
    await expect(page.getByText('hello world')).toBeVisible()
  })
})