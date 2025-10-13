import { test, expect } from '@playwright/test'

test.describe('About Section - BlurredImage Effect', () => {
  test('should display blurred placeholder and load image', async ({ page }) => {
    await page.goto('/')
    
    // Navigate to or scroll to the About section
    const aboutSection = page.locator('text=Discover Our Journey').first()
    await expect(aboutSection).toBeVisible()
    
    // Locate the image container
    const imageContainer = page.locator('img[alt="master-bedroom"]').first()
    
    // Wait for the image element to be present
    await expect(imageContainer).toBeVisible()
    
    // Check that the image has a src attribute
    const imgSrc = await imageContainer.getAttribute('src')
    expect(imgSrc).toContain('master-bedroom')
    
    // Wait for the image to be fully loaded
    await imageContainer.evaluate((img: HTMLImageElement) => {
      if (img.complete) return
      return new Promise((resolve) => {
        img.addEventListener('load', resolve)
      })
    })
    
    // Verify the image is loaded by checking naturalWidth
    const naturalWidth = await imageContainer.evaluate(
      (img: HTMLImageElement) => img.naturalWidth
    )
    expect(naturalWidth).toBeGreaterThan(0)
  })

  test('should have blur placeholder background', async ({ page }) => {
    await page.goto('/')
    
    // Wait for the About section to be visible
    await page.waitForSelector('text=Discover Our Journey')
    
    // The @unpic/react Image component renders a picture element with background
    const pictureElement = page.locator('picture').first()
    await expect(pictureElement).toBeVisible()
    
    // Check if the picture element or its container has a background style
    const hasBackground = await pictureElement.evaluate((el) => {
      const computed = window.getComputedStyle(el)
      const parent = el.parentElement
      const parentComputed = parent ? window.getComputedStyle(parent) : null
      
      return {
        elementBg: computed.backgroundImage !== 'none' || computed.backgroundColor !== 'rgba(0, 0, 0, 0)',
        parentBg: parentComputed ? (parentComputed.backgroundImage !== 'none' || parentComputed.backgroundColor !== 'rgba(0, 0, 0, 0)') : false,
      }
    })
    
    // Either the picture element or its parent should have a background
    expect(hasBackground.elementBg || hasBackground.parentBg).toBeTruthy()
  })

  test('should render About section content correctly', async ({ page }) => {
    await page.goto('/')
    
    // Check the "Who we are" badge
    const badge = page.locator('text=Who we are')
    await expect(badge).toBeVisible()
    
    // Check the main heading
    const heading = page.locator('text=Discover Our Journey')
    await expect(heading).toBeVisible()
    
    // Verify the heading has correct styling (text-5xl class)
    const headingClass = await heading.getAttribute('class')
    expect(headingClass).toContain('text-5xl')
  })

  test('should load image within reasonable time', async ({ page }) => {
    await page.goto('/')
    
    const imageElement = page.locator('img[alt="master-bedroom"]').first()
    
    // Wait for image to be visible with timeout
    await expect(imageElement).toBeVisible({ timeout: 5000 })
    
    // Verify image loaded successfully
    const isComplete = await imageElement.evaluate(
      (img: HTMLImageElement) => img.complete && img.naturalHeight !== 0
    )
    
    expect(isComplete).toBe(true)
  })
})
