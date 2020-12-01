const chromium = require('chrome-aws-lambda');

exports.handler = async function(event, context) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 632,
    deviceScaleFactor: 2,
  });

  const url = event.queryStringParameters.url;
  await page.goto(url);

  const image = await page.screenshot();

  await browser.close();

  return {
    statusCode: 200,
    body: image.toString('base64'),
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
    },
    isBase64Encoded: true
  };
}