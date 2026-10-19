// Usage: node check.js /abs/path/page.html
// Renders at 1280 and 400 wide, reports console/page errors, horizontal overflow, and saves screenshots.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const file = process.argv[2];
  if (!file) { console.error('need html path'); process.exit(2); }
  const outDir = path.join(__dirname, 'shots');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  let failed = false;
  for (const width of [1280, 400]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
    page.on('pageerror', e => errors.push('pageerror: ' + e.message));
    await page.goto('file://' + file, { waitUntil: 'load' });
    await page.waitForTimeout(800);
    const overflow = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth, innerW: window.innerWidth,
      bodyBg: getComputedStyle(document.body).backgroundColor,
      title: document.title,
    }));
    const base = path.basename(file, '.html');
    await page.screenshot({ path: path.join(outDir, `${base}-${width}.png`), fullPage: true });
    const over = overflow.scrollW > overflow.innerW + 1;
    const fontErrs = errors.filter(e => /fonts\.g|ERR_/.test(e));
    const realErrs = errors.filter(e => !/fonts\.g|net::ERR_|Failed to load resource/.test(e));
    console.log(`[${width}px] title="${overflow.title}" overflow=${over ? 'YES scrollW=' + overflow.scrollW : 'no'} errors=${realErrs.length} (network/font notices ignored: ${errors.length - realErrs.length})`);
    realErrs.forEach(e => console.log('   ' + e));
    if (over || realErrs.length) failed = true;
    await ctx.close();
  }
  await browser.close();
  console.log(failed ? 'RESULT: FIX NEEDED' : 'RESULT: CLEAN');
  process.exit(failed ? 1 : 0);
})();
