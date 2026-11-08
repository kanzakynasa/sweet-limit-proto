# capture_new_previews.py
import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={'width': 440, 'height': 920},
            device_scale_factor=2
        )
        page = await context.new_page()

        file_url = 'file:///' + os.path.abspath('index.html').replace('\\', '/')
        print(f"Loading {file_url}...")
        await page.goto(file_url, wait_until='networkidle')

        os.makedirs('audit_previews', exist_ok=True)

        screens = [
            'screen-home',
            'screen-limit-settings',
            'screen-product-analysis',
            'screen-calculator',
            'screen-trends',
            'screen-onboarding',
            'screen-history',
            'screen-notifications',
            'screen-profile'
        ]

        # Device frame locator
        frame = page.locator('.device-container')

        for s in screens:
            await page.evaluate(f"window.navigateTo('{s}')")
            await asyncio.sleep(0.3)
            out_path = f"audit_previews/{s}.png"
            await frame.screenshot(path=out_path)
            print(f"Captured {out_path}")

        await browser.close()
        print("Done capturing screenshots!")

if __name__ == '__main__':
    asyncio.run(run())
