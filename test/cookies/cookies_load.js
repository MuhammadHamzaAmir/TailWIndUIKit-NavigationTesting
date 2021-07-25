

async function cookies_load(page){
    const fs = require("fs");
    const cookiesFilePath = "cookies.json";

const previousSession = fs.existsSync(cookiesFilePath);
if (previousSession) {
  // If file exist load the cookies
  const cookiesString = fs.readFileSync(cookiesFilePath,'utf-8');
  const parsedCookies = JSON.parse(cookiesString);
  await page.setCookie(parsedCookies);
  console.log("Session has been loaded in the browser");
  /*
  if (parsedCookies.length !== 0) {
    for (let cookie of parsedCookies) {
      await page.setCookie.apply(page,cookie);
      console.log('Session has been loaded in the browser iiiii');
    }
    console.log('Session has been loaded in the browser');
  }*/
    }
};

module.exports = {cookies_load};