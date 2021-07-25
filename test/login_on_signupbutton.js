const puppeteer = require("puppeteer");

(async () => {
  //refers to tailwind layout change, when the screen size width is less than or equal to 1023 in width
  var small = 1023;

  //refers to tailwind layout change, when the screen size width is greater than or equal to 1024 in width
  var large = 1024;

  var width_desired = 1300; //desired width for the webpage
  var height_desired = 600; //desired height for the webpage

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

  await page.goto("https://app.tailwinduikit.com/signup"); //mentioned site is then reached
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await login_on_signupbutton(page);

  await page.waitForTimeout(5000); // delay for 5 second for website to load


  await browser.close();
})();


//it just navigates from sign up page to login page
async function login_on_signupbutton(page_entry) {
  try {
    //start of TRY
    var xpath_login_on_sup = "//*[@id='loginForm']/div/div[2]/div[4]/a"; //xpath_of login button
    let login_on_sup = await page_entry.waitForXPath(xpath_login_on_sup, {
      visible: true,
    }); //login button is to be found here
    await login_on_sup.evaluate((b) => b.click()); //login button button is clicked
    console.log("Login Button on the signup page is clicked");
  } catch (error) {
    //end of TRY

    //start of catch
    console.log("Login Button on the signup page is not clicked");
  } //end of catch
}