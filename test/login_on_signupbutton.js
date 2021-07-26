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

  await page.goto("https://app.tailwinduikit.com/signup"); //mentioned site is then reached
  await page.waitForTimeout(3010); // delay for 3.01 second for website to load

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

    await login_on_sup.evaluate((c) =>
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    );   //scrolling till that component
    await page_entry.waitForTimeout(3001); // delay of 3 seconds

    await login_on_sup.evaluate((b) => b.click()); //login button button is clicked
    console.log("Login Button on the signup page is clicked");
  } catch (error) {
    //end of TRY

    //start of catch
    console.log("Login Button on the signup page is not clicked");
  } //end of catch

  await page_entry.waitForTimeout(3000); // delay of 3 seconds
      //verifyuing that it should reach the login page after signout
      if (page_entry.url() === "https://app.tailwinduikit.com/login"){
        console.log("Test is successful");
        
      }

  
}