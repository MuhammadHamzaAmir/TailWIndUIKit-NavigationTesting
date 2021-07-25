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

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await cookies_load_ftn.cookies_load(page);   //cookies restored from the previous session

  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await page.goto("https://app.tailwinduikit.com/components"); //mentioned site is then reached
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  

  await signout(page,width_desired,small,large);
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();



async function signout(page_entry, width_desired, low_width, high_width) {
  /*
  //removing banner
  var xpath_banner = "//*[@id='__next']/div/div/div/div[1]/div/div/svg";  //xpath of banner remove icon
  try{
    //*[@id="__next"]/div/div/div/div[1]/div/div/svg

    let banner_item = await page_entry.waitForXPath(xpath_banner, { visible: true }); //banner remove icon icon is to be found on the main page
    await banner_item.evaluate((ab) => ab.click()); //banner remove icon icon when found is clicked
    console.log("Banner is removed");
  }
  catch(error){
    console.log("Banner is not removed");
    console.error(error);

  }
*/
  //arrow s if taht does not work
  //*[@id="header"]/div[2]/div/div/div/div[1]/div[2]/div[3]/div/div/div[2]/div

  var xpath_singout_arrow_s =
    "//*[@id='header']/div[2]/div/div/div/div[1]/div[2]/div[3]/div/div/div"; //after signup small size screen arrow dropdown
  var xpath_singout_arrow_l =
    "//*[@id='header']/div[1]/div/div[2]/div[3]/div/div/div"; //after signup  large size screen arrow arrow dropdown

  var xpath_singout_button_s =
    "//*[@id='header']/div[2]/div/div/div/div[1]/div[2]/div[3]/div/div/div[2]/div/p[2]"; //signout small on small screen
  var xpath_singout_button_l =
    "//*[@id='header']/div[1]/div/div[2]/div[3]/div/div/div[2]/div/p[2]"; //large screen size signout button

  //this block will execute when screen width size is smaller than or equal to 1023
  if (width_desired <= low_width) {
    //arrow click when the screen size is small

    try {
      //start of try
      let arrow_item = await page_entry.waitForXPath(xpath_singout_arrow_s, {
        visible: true,
      }); //arrow icon is to be found on the main page
      await arrow_item.evaluate((ab) => ab.click()); //arrow icon when found is clicked
      console.log("Arrow drop down is clicked");

      await page_entry.waitForTimeout(4000); // delay of 4 seconds

      let signout_item = await page_entry.waitForXPath(xpath_singout_button_s, {
        visible: true,
      }); //signout is to be found on the main page
      await signout_item.evaluate((ab) => ab.click()); //signout when found is clicked
      console.log("Signout did happen");
    } catch (error) {
      //end of try

      //start of catch
      console.log("Signout did not happen");
      console.error(error);
    } //end of catach
  } //end of if block

  //this block will execute when screen width size is greater than or equal to 1024
  else if (width_desired >= high_width) {
    //arrow click when the screen size is large

    try {
      //start of try
      let arrow_item = await page_entry.waitForXPath(xpath_singout_arrow_l, {
        visible: true,
      }); //arrow icon is to be found on the main page
      await arrow_item.evaluate((ab) => ab.click()); //arrow icon when found is clicked
      console.log("Arrow drop down is clicked");

      await page_entry.waitForTimeout(4000); // delay of 4 seconds

      let signout_item = await page_entry.waitForXPath(xpath_singout_button_l, {
        visible: true,
      }); //signout is to be found on the main page
      await signout_item.evaluate((ab) => ab.click()); //signout when found is clicked
      console.log("Signout happen");
    } catch (error) {
      //end of try

      //start of catch
      console.log("Signout did not happen");
    } //end of catach
  } //end of else if block
}
