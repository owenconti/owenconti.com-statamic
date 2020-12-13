const puppeteer = require('puppeteer');
const { readdirSync } = require('fs');
const http = require('http');

const host = 'http://localhost:5000';

async function sleep(milliseconds) {
  return new Promise(res => {
    setTimeout(res, milliseconds);
  });
}

async function run() {
  await sleep(10000);

  const browser = await puppeteer.launch();
  
  async function generateImage(path) {
    const page = await browser.newPage();
    await page.setViewport({
      width: 1200,
      height: 632,
      deviceScaleFactor: 2,
    });
    
    await page.goto(`${host}/posts/${path}`);

    const title = await page.$eval("head > meta[property='og:title']", element => element.content);

    const imageUrl = `${host}/og-image-generator?title=${Buffer.from(title).toString('base64')}`;
    await page.goto(imageUrl);

    await page.screenshot({
      path: `storage/app/static/images/${path}.png`
    });

    console.log(`Saved ${path} image`);
  }

  const posts = readdirSync('storage/app/static/posts');
  for (const post of posts) {
    if (post === '.' || post === '..') {
      continue;
    }

    await generateImage(post);
  }
  
  await browser.close();
}

Promise.all([
  run()
]).then(() => {
  console.log('Exiting');
  process.exit(0);
});