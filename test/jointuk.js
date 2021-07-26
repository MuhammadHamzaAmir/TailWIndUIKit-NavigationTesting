const puppeteer = require("puppeteer");

(async () => {

  var email = "testoperation@test.com"; //email used for signup and login
  var password = "176hgwqctest"; // default password for all the accounts
  var name = "Test-Operation"; // default name for all the accounts

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  }); //browser is launched

  // Create a new incognito browser context.
  //const context = await browser.createIncognitoBrowserContext(); // for testing

  var page = await browser.newPage(); // a new page is created

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://app.tailwinduikit.com/login"); //mentioned site is then reached
  await page.waitForTimeout(5000); // delay for 5 second for website to load
  await jointuk(page);

  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();

//jointuk functionality
async function jointuk(page_entry) {
  // start of jointuk function
  var xpath_Of_jointuk_on_login = "//*[@id='loginForm']/div[5]/p[2]/a";

  await page_entry.waitForTimeout(3000); // delay of 3 seconds
    let joinin_click_on_login = await page_entry.waitForXPath(
      xpath_Of_jointuk_on_login,
      { visible: true }
    ); //jointuk button is to be found here
    await joinin_click_on_login.click(); //jointuk button is clicked

    console.log("Join TUK is clicked");
  

   await page_entry.waitForTimeout(3000); // delay of 3 seconds
      //verifyuing that it should reach the login page after signout
      if (page_entry.url() === "https://app.tailwinduikit.com/signup") {
        console.log("Test is successful");
      }
} // end of jointuk function
