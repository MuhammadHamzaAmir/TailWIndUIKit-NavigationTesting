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

  //await cookies_load_ftn.cookies_load(page);   //cookies restored from the previous session


  await page.goto("https://app.tailwinduikit.com/login"); //mentioned site is then reached
  await page.waitForTimeout(3000); // delay for 3 second for website to load

  

  await signout(page,email,password);
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();



async function signout(page_entry,email,password) {
  
  //login happens here
  var xpath_email_if = "//*[@id='email2']"; //xpath of email input field on login page
  var xpath_password_if = "//*[@id='password']"; //xpath of password input field on login page
  var xpath_login_b = "//*[@id='btnlog']"; //xpath of login button on sign up page

    await page_entry.waitForTimeout(1750); // delay of 1.75 seconds

    let email_input_field = await page_entry.waitForXPath(xpath_email_if, {
      visible: true,
    }); //email input field is to be found here
    await email_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    //console.log(typeof email_input);
    await email_input_field.type(email); //input is entered in email input field
    console.log("Email Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let password_input_field = await page_entry.waitForXPath(
      xpath_password_if,
      { visible: true }
    ); //password input field is to be found here
    await password_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await password_input_field.type(password); //input is entered in password input field
    console.log("Password Input is entered");

    await page_entry.waitForTimeout(1000); // delay of 1 seconds

    let login_button_on_login_page = await page_entry.waitForXPath(
      xpath_login_b,
      { visible: true }
    ); //login is to be found here
    await login_button_on_login_page.evaluate((b) => b.click()); //login button is clicked
    console.log("Login Button is clicked");
      
    await page_entry.waitForTimeout(3000); // delay of 3 seconds

    //click on components in header
    var comp_out_menu_l = "//*[@id='componentsMenu']"; //components outside menu in header
    //start of try

      var comp_item_ft = await page_entry.waitForXPath(comp_out_menu_l, {
        visible: true,
      }); //component is to be found on the main page
      await comp_item_ft.click(); //component when found is clicked

      await page_entry.waitForTimeout(3000); // delay of 3 seconds

  var xpath_singout_arrow_s =
    "//*[@id='header']/div[2]/div/div/div/div[1]/div[2]/div[3]/div/div/div"; //after signup small size screen arrow dropdown
  var xpath_singout_arrow_l =
    "//*[@id='header']/div[1]/div/div[2]/div[3]/div/div/div"; //after signup  large size screen arrow arrow dropdown

  var xpath_singout_button_s =
    "//*[@id='header']/div[2]/div/div/div/div[1]/div[2]/div[3]/div/div/div[2]/div/p[2]"; //signout small on small screen
  var xpath_singout_button_l =
    "//*[@id='header']/div[1]/div/div[2]/div[3]/div/div/div[2]/div/p[2]"; //large screen size signout button

    
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

      await page_entry.waitForTimeout(3000); // delay of 3 seconds
      //verifyuing that it should reach the login page after signout
      if (page_entry.url() === "https://app.tailwinduikit.com/login"){
        console.log("Test is successful");
        
      }
}
