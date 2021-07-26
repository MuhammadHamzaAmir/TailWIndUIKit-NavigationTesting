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
 
  var page = await browser.newPage(); // a new page is created
  
  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);
    
  await page.goto("https://app.tailwinduikit.com/login"); //mentioned site is then reached
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await get_access_click(page,email,password);
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();


//clicking on getaccess button in boxed layout page to go to pricing page
async function get_access_click(page,email,password) {
  var xpath_get_access_b =
    "//*[@id='__next']/div/div/div[1]/div[2]/div[1]/div[2]/a/div/div/button"; //xpath of get access button

    var xpath_sidemenu_comp =
    "//*[@id='__next']/div/div/div/div/div/div[1]/div[2]"; //xpath of side menu icon

    var comp_out_menu_l = "//*[@id='componentsMenu']"; //components outside menu in header

  //login happens
  var xpath_email_if = "//*[@id='email2']"; //xpath of email input field on login page
  var xpath_password_if = "//*[@id='password']"; //xpath of password input field on login page
  var xpath_login_b = "//*[@id='btnlog']"; //xpath of login button on sign up page

  await page.waitForTimeout(2500); // delay of 2.5 seconds

  let email_input_field = await page.waitForXPath(xpath_email_if, {
    visible: true,
  }); //email input field is to be found here
  await email_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
  //console.log(typeof email_input);
  await email_input_field.type(email); //input is entered in email input field
  console.log("Email Input is entered");

  await page.waitForTimeout(1500); // delay of 1.5 seconds

  let password_input_field = await page.waitForXPath(xpath_password_if, {
    visible: true,
  }); //password input field is to be found here
  await password_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
  await password_input_field.type(password); //input is entered in password input field
  console.log("Password Input is entered");

  await page.waitForTimeout(1000); // delay of 1 seconds

  let login_button_on_login_page = await page.waitForXPath(
    xpath_login_b,
    { visible: true }
  ); //login is to be found here
  await login_button_on_login_page.evaluate((b) => b.click()); //login button is clicked
  console.log("Login Button is clicked");

    await page.waitForTimeout(7000); // delay of 3 seconds  
      var comp_item_ft = await page.waitForXPath(comp_out_menu_l, {
        visible: true,
      }); //component is to be found on the main page
      await comp_item_ft.click(); //component when found is clicked
      console.log("Component is clicked");


    await page.waitForTimeout(4000); // delay of 4 seconds

    //xpath of arrow button
    var xpath_mas_lay_b_l =
      "//*[@id='__next']/div/div/div/div/div/div[1]/div[3]/div[2]/div[1]/div[1]/div/div[1]/button";



      let mas_lay_b_l = await page.waitForXPath(xpath_mas_lay_b_l, {
        visible: true,
      }); //arrow button is to be found here
      await mas_lay_b_l.click(); //arrow button is clicked
      console.log("Button is clicked");
    
    await page.waitForTimeout(4000); // delay of 5 seconds

    //xpath of boxed layout
    var xpath_boxed_lay_l =
      "//*[@id='__next']/div/div/div/div/div/div[1]/div[3]/div[2]/div[1]/div[1]/div/div[2]/div/a";


      let xbox_lay_l = await page.waitForXPath(xpath_boxed_lay_l, {
        visible: true,
      }); //boxed layout is to be found here
      await xbox_lay_l.click(); //boxed layout is clicked
      console.log("Boxed Layout is clicked");

    await page.waitForTimeout(4500); // delay of 4.5 seconds
    let getA_b = await page.waitForXPath(xpath_get_access_b, { visible: true }); //boxed layout is to be found here
    await getA_b.click(); //boxed layout is clicked
    console.log("Get Access button is clicked");

    await page.waitForTimeout(5000); // delay of 5 seconds
    //verifyuing that it should reach the login page after signout
      if (page.url() === "https://tailwinduikit.com/pricing") {
        console.log("Test is successful");
      }
}
