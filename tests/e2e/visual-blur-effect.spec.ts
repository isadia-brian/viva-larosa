import { test, expect } from '@playwright/test'

test.describe('Visual Blur Effect Test', () => {
  test('should visually confirm blur-to-sharp transition', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/')
    
    // Wait for the About section
    await page.waitForSelector('text=Discover Our Journey')
    
    // Scroll to the image to ensure it's in viewport
    const imageElement = page.locator('img[alt="master-bedroom"]').first()
    await imageElement.scrollIntoViewIfNeeded()
    
    // Take screenshot before image loads (blur state)
    await page.screenshot({ 
      path: 'test-results/blur-before.png',
      fullPage: false 
    })
    
    // Wait for image to be visible
    await expect(imageElement).toBeVisible({ timeout: 5000 })
    
    // Wait for image to fully load
    await imageElement.evaluate((img: HTMLImageElement) => {
      if (img.complete && img.naturalHeight !== 0) return
      return new Promise((resolve) => {
        img.addEventListener('load', resolve)
        img.addEventListener('error', resolve)
      })
    })
    
    // Small delay to ensure transition completed
    await page.waitForTimeout(500)
    
    // Take screenshot after image loads (sharp state)
    await page.screenshot({ 
      path: 'test-results/blur-after.png',
      fullPage: false 
    })
    
    // Verify image loaded successfully
    const imageLoaded = await imageElement.evaluate(
      (img: HTMLImageElement) => img.complete && img.naturalHeight > 0
    )
    
    expect(imageLoaded).toBe(true)
    
    console.log('\n✅ Visual test completed!')
    console.log('📸 Screenshots saved:')
    console.log('   - test-results/blur-before.png')
    console.log('   - test-results/blur-after.png')
  })
})
