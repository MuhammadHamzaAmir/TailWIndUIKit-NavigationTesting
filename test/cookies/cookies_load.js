

async function cookies_load(page){
    const fs = require("fs");
    const cookiesFilePath = "cookies.json";

const previousSession = fs.existsSync(cookiesFilePath);
if (previousSession) {
  // If file exist load the cookies
  const cookiesString = fs.readFileSync(cookiesFilePath);
  const parsedCookies = JSON.parse(cookiesString);

  if (parsedCookies.length !== 0) {
    for (let cookie of parsedCookies) {
      await page.setCookie(cookie);
      console.log('Session has been loaded in the browser iiiii');
    }
    console.log('Session has been loaded in the browser');
  }
    }
};

module.exports = {cookies_load};