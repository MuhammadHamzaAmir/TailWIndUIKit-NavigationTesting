const puppeteer = require("puppeteer");
const login_ftn = require("./login.js");
 

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

  await page.goto("https://app.tailwinduikit.com"); //mentioned site is then reached
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  if ((await page.url()) === "https://app.tailwinduikit.com/login"){
      await login_ftn.login(page,email,password);
  }

  await page.waitForTimeout(5000); // delay for 5 second for website to load
  await comp_click_after_login(page, width_desired, small, large);
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();

//navigate to components page after login
async function comp_click_after_login(
  page_entry,
  width_desired,
  low_width,
  high_width
) {
  var comp_in_menu_s = "//*[@id='__next']/div/nav/div[1]/div/ul/li[1]/a"; //componets in menu
  var comp_out_menu_l = "//*[@id='componentsMenu']"; //components outside menu in header

  var xpath_of_menu = "//*[@id='i-menu']"; //xpath for menu icon on main page

  var xpath_of_sidemenu = "//*[@id='__next']/div/nav/div[1]/div"; //xpath for side menu on main page

  //this block will execute when screen width size is smaller than or equal to 1023
  if (width_desired <= low_width) {
    //Menu click when the screen size is small

    try {
      //start of outer TRY

      await page_entry.waitForTimeout(3000); // delay of 3 seconds

      var menu_item = await page_entry.waitForXPath(xpath_of_menu, {
        visible: true,
      }); //menu icon is to be found on the main page
      await menu_item.click(); //menu icon when found is clicked

      console.log("Menu is clicked");

      //To verify that side-menu has appeared
      try {
        //start of inner TRY

        await page_entry.waitForTimeout(3000); // delay of 3 seconds

        console.log("Waiting for menu bar to appear");
        let menu_bar_x = await page_entry.waitForXPath(xpath_of_sidemenu, {
          visible: true,
        }); //menu bar has appeared and found
        console.log("Menu Bar appeared");
      } catch (error) {
        //End of inner TRY
        //start of inner CATCH

        console.log("Menu bar did not appear");
      } //End of inner CATCH

      try {
        //start of TRY
        await page_entry.waitForTimeout(3000); // delay of 3 seconds
        let comp_click = await page_entry.waitForXPath(comp_in_menu_s, {
          visible: true,
        }); //component button is to be found here
        await comp_click.click(); //component button is clicked

        console.log("Component is clicked");
      } catch (error) {
        //End of  TRY
        //start of CATCH
        console.log("Component is not clicked");
      } //end of  CATCH
    } catch (error) {
      //End of outer TRY

      //start of outer CATCH
      console.error(error);

      console.log("Menu is not clicked");
    } //end of outer CATCH
  } //end of if block

  //this block will execute when screen width size is greator than or equal to 1024
  else if (width_desired >= high_width) {
    await page_entry.waitForTimeout(3000); // delay of 3 seconds

    try {
      //start of try

      var comp_item_ft = await page_entry.waitForXPath(comp_out_menu_l, {
        visible: true,
      }); //component is to be found on the main page
      await comp_item_ft.click(); //component when found is clicked
      console.log("Component is clicked");
    } catch (e) {
      //end of try

      //start of catch
      console.log("Component is not clicked");
    } //end of catch
  } //end of else if block
}
