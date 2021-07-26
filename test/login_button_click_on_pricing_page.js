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

  await page.goto("https://tailwinduikit.com/pricing"); //mentioned site is then reached
  await page.waitForTimeout(2000); // delay for 2 second for website to load

  await log_click_on_pp(page);
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();




//login button click on pricing page
async function log_click_on_pp(
  page_entry,
) {
  var xpath_login_pp_l_ss = "//*[@id='header']/div[1]/div/div/div[2]/a"; //xpath login button on large screen size
  //var xpath_side_menu = "//*[@id='i-menu']";   //xpath login button on large screen size

  var xpath_of_menu = "//*[@id='i-menu']"; //xpath for menu icon on pricing page

  var xpath_of_sidemenu = "//*[@id='header']/div[2]/div/div/div/div[2]/div"; //xpath for side menu on pricing page

  var xpath_login_pp_s_s =
    "//*[@id='header']/div[2]/div/div/div/div[2]/div/ul/a[8]"; //xpath login button on small screen size

    await page_entry.waitForTimeout(3500); // delay of 3.5 seconds
      //start of try
      var login_item_ft = await page_entry.waitForXPath(xpath_login_pp_l_ss, {
        visible: true,
      }); //login is to be found on the main page
      await login_item_ft.click(); //login when found is clicked
      console.log("Login is clicked");

       await page_entry.waitForTimeout(3000); // delay of 3 seconds
      //verifyuing that it should reach the login page after signout
      if (page_entry.url() === "https://app.tailwinduikit.com/login"){
        console.log("Test is successful");
        
      }
   
}
