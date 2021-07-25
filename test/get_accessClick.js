const puppeteer = require("puppeteer");
const cookies_load_ftn = require("./cookies/cookies_load"); 

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

  await cookies_load_ftn.cookies_load(page);   //cookies restored from the previous session
  
  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://app.tailwinduikit.com/listing/webapp/master_layout/boxed_layout"); //mentioned site is then reached
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await get_access_click(page);
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();


//clicking on getaccess button in boxed layout page to go to pricing page
async function get_access_click(page) {
  var xpath_get_access_b =
    "//*[@id='__next']/div/div/div[1]/div[2]/div[1]/div[2]/a/div/div/button"; //xpath of get access button

  try {
    //start of  try

    let getA_b = await page.waitForXPath(xpath_get_access_b, { visible: true }); //boxed layout is to be found here
    await getA_b.click(); //boxed layout is clicked
    console.log("Get Access button is clicked");
  } catch (eroor) {
    //end of  try
    //start of  catch
    console.log("Get Access button is not clicked");
  } //end of  catch
}
