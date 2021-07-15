const puppeteer = require("puppeteer");

(async () => {
  //refers to tailwind layout change, when the screen size width is less than or equal to 1023 in width
  var small = 1023;

  //refers to tailwind layout change, when the screen size width is greater than or equal to 1024 in width
  var large = 1024;

  var width_desired = 800; //desired width for the webpage
  var height_desired = 600; //desired height for the webpage

  var email = "xixeto1835@godpeed.com"; //email used for signup and login
  var password = "176hgwqc"; // default password for all the accounts
  var name = "Ahmad Ali"; // default name for all the accounts

  const browser = await puppeteer.launch({ headless: false }); //browser is launched

  // Create a new incognito browser context.
  //const context = await browser.createIncognitoBrowserContext(); // for testing

  var page = await browser.newPage(); // a new page is created

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://tailwinduikit.com/"); //mentioned site is then reached

  await page.setViewport({
    width: width_desired,
    height: height_desired,
    deviceScaleFactor: 1,
  }); //setting broswer window size

  await page.waitForTimeout(5000); // delay for 5 second for website to load

  var xpath_of_menu = "//*[@id='i-menu']"; //xpath for menu icon on main page
  var xpath_of_sidemenu = "//*[@id='header']/div[2]/div/div/div/div[2]/div"; //xpath for side menu on main page

  //this block will execute when screen width size is smaller than or equal to 1023
  if (width_desired <= small) {
    //Menu click when the screen size is small

    try {
      //start of outer TRY

      await page.waitForTimeout(2000); // delay of 2 seconds

      var menu_item = await page.waitForXPath(xpath_of_menu, { visible: true }); //menu icon is to be found on the main page
      await menu_item.click(); //menu icon when found is clicked

      console.log("Menu is clicked");

      //To verify that side-menu has appeared
      try {
        //start of inner TRY

        await page.waitForTimeout(3000); // delay of 3 seconds

        console.log("Waiting for menu bar to appear");
        let menu_bar_x = await page.waitForXPath(xpath_of_sidemenu, {
          visible: true,
        }); //menu bar has appeared and found
        console.log("Menu Bar appeared");
      } catch (error) {
        //End of inner TRY
        //start of inner CATCH

        console.log("Menu bar did not appear");
      } //End of inner CATCH
    } catch (error) {
      //End of outer TRY

      //start of outer CATCH
      console.log("Menu is not clicked");
    } //end of outer CATCH

    await page.waitForTimeout(5000); // delay of 5 seconds
    var xpath_for_login =
      "//*[@id='header']/div[2]/div/div/div/div[2]/div/ul/a[8]"; //xpath for login button in menu bar

    try {
      //start of TRY

      var login_click = await page.waitForXPath(xpath_for_login, {
        visible: true,
      }); //login button is to be found here
      await login_click.click(); //login button is clicked

      console.log("Login is clicked");
    } catch (error) {
      //End of  TRY

      //start of CATCH
      console.log("Login is not clicked");
    } //end of  CATCH
  } //end of if block

  //this block will execute when screen width size is greator than or equal to 1024
  else if (width_desired >= large) {
    //start of else if block

    var xpath_for_login_large_page =
      "//*[@id='header']/div[1]/div/div/div[2]/a";

    await page.waitForTimeout(3000); // delay of 3 seconds
    try {
      //start of TRY

      let login_click_large_p = await page.waitForXPath(
        xpath_for_login_large_page,
        { visible: true }
      ); //login button is to be found here
      await login_click_large_p.click(); //login button is clicked
      console.log("Login is clicked");
    } catch (error) {
      //End of  TRY

      //start of CATCH
      console.log("Login is not clicked");
    } //end of CATCH
  } //end of else if block

  // a function is called where Join TUK button is clicked.

  await page.waitForTimeout(4000); // delay of 4 seconds
  await jointuk(page);

  await page.waitForTimeout(3000); // delay of 3 seconds

  // a function is called where name,password and email input-fields are entered
  // and sign up button is clicked.
  await signup(name, email, password, page, width_desired, small, large);
  //console.log(email);

  await page.waitForTimeout(4000); // delay of 38.5 seconds

  await console.log("after time signup");
  //navigate from login page to components page
  await comp_click_after_login(page, width_desired, small, large);

  await page.waitForTimeout(2000); // delay of 18 seconds

  //navigate from componentsboxed layout page to  page
  await comp_to_boxed_layout(page, width_desired, small, large);

  await page.waitForTimeout(2000); // delay of 12 seconds

  //clickng on get access button on boxed layout page
  await get_access_click(page);

  await page.waitForTimeout(5000); // delay of 15 seconds

  //submitting the student form
  await student_form(page, name, email, "Undergradute", "NUST", "Pak");

  await page.waitForTimeout(4500); // delay of 4.5 seconds

  //login click on pricing page
  await log_click_on_pp(page, width_desired, small, large);

  await page.waitForTimeout(3000); // delay of 3 seconds

  //navigate from login page to components page
  await comp_click_after_login(page, width_desired, small, large);

  await page.waitForTimeout(3500); // delay of 3.5 seconds

  await signout(page, width_desired, small, large);

  await page.waitForTimeout(30000); // delay of 3 seconds
  await browser.close(); //browser is closed
})();

//jointuk functionality
async function jointuk(page_entry) {
  // start of jointuk function
  var xpath_Of_jointuk_on_login = "//*[@id='loginForm']/div[5]/p[2]/a";

  await page_entry.waitForTimeout(3000); // delay of 3 seconds
  try {
    //start of TRY

    let joinin_click_on_login = await page_entry.waitForXPath(
      xpath_Of_jointuk_on_login,
      { visible: true }
    ); //jointuk button is to be found here
    await joinin_click_on_login.click(); //jointuk button is clicked

    console.log("Join TUK is clicked");
  } catch (error) {
    //End of  TRY

    //start of CATCH
    console.log("Join TUK is not clicked");
  } //end of CATCH
} // end of jointuk function

//signup function
async function signup(
  name_input,
  email_input,
  password_input,
  page_entry,
  width_desired,
  low_width,
  high_width
) {
  var xpath_name_if = "//*[@id='name']"; //xpath of name input field on sign up page
  var xpath_email_if = "//*[@id='email']"; //xpath of email input field on sign up page
  var xpath_password_if = "//*[@id='password']"; //xpath of password input field on sign up page
  var xpath_signup_b = "//*[@id='signupbtn']"; //xpath of signup button on sign up page

  await page_entry.waitForTimeout(5000); // delay of 5 seconds

  try {
    //start of outer TRY

    let name_input_field = await page_entry.waitForXPath(xpath_name_if, {
      visible: true,
    }); //name input field is to be found here
    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds
    await name_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await name_input_field.type(name_input); //input is entered in name input field
    console.log("Name Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let email_input_field = await page_entry.waitForXPath(xpath_email_if, {
      visible: true,
    }); //email input field is to be found here
    await email_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    //console.log(typeof email_input);
    await email_input_field.type(email_input); //input is entered in email input field
    console.log("Email Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let password_input_field = await page_entry.waitForXPath(
      xpath_password_if,
      { visible: true }
    ); //password input field is to be found here
    await password_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await password_input_field.type(password_input); //input is entered in password input field
    console.log("Password Input is entered");

    await page_entry.waitForTimeout(1000); // delay of 1 seconds

    let signup_button_on_SU_page = await page_entry.waitForXPath(
      xpath_signup_b,
      { visible: true }
    ); //signup button is to be found here
    await signup_button_on_SU_page.evaluate((b) => b.click()); //sign up button is clicked
    console.log("Sign Up button is clicked");

    await page_entry.waitForTimeout(9001); // delay of 5 seconds

    //if email already exists or some error occurs
    /**
     * outputs we get if something goes wrong
     * 1.Something Went Wrong. Please Contact Support.
     * 2.Email Already Exists. Please Proceed To Login.
     */

    try {
      //start of inner TRY
      var xpath_output_error = "//*[@id='loginForm']/div/div[2]/p"; //xpath_of output_error

      //output_error is to be found here
      let output_error = await page_entry.waitForXPath(xpath_output_error, {
        visible: true,
      });

      /*
          //When the signup works correctly and error message dosen't appear
          if(output_error === null){
            throw "Everything's Fine";
          }*/

      var text_of_output_error = await output_error.evaluate(
        (tx) => tx.textContent
      ); //extracting text from the element

      //start of if block
      if (text_of_output_error.length > 0) {
        //checking for the error by checking its length
        throw text_of_output_error; //thowing error which is the output text
      } //end of if block
    } catch (error) {
      //end of inner try
      //start of inner CATCH
      var text_of_output_error_2 = error;

      //start of if block
      if (typeof text_of_output_error_2 === "object") {
        signout(page_entry, width_desired, low_width, high_width); //if signup is successful then signout occurs
        login(page_entry, email_input, password_input); //after signout login page appears and then login happens
      } //end of if block

      //start of else  if block
      else if (text_of_output_error_2.includes("Something")) {
        //checking if the issue is due to something else other than email duplicate
        signup(name_input, email_input, password_input, page_entry); //signup function is called again to resolve the issue
      } //end of else if block
      else if (text_of_output_error_2.includes("Email")) {
        //checking if the issue is due to email duplicate
        //let email_input_updated = email_handler(email_input); //getting new email from a function email_handler
        //email_input_updated= (await email_input_updated).toString();  //converting the object returned by function to string
        //signup(name_input,email_input_updated, password_input, page_entry); //calling the function signup with newer email

        login_on_signupbutton(page_entry); //it clickes on login button on signup page
        login(page_entry, email_input, password_input); //login functionality happpens here on login page
      } //end of else if block
    } //end of inner CATCH
  } catch (error) {
    //End of outer TRY

    //start of outer CATCH
    console.log("Error in siging up");
    //console.error(error);
  } //end of outer CATCH
} // end of signup function

//excessive function
// functioanlity for creating new emails in case of duplicate mails
async function email_handler(email_ip_field) {
  //console.log("in email handler");
  //console.log(email_ip_field);
  let new_email =
    "xixeto" +
    Math.floor(Math.random() * 100000 + 1).toString() +
    "@godpeed.com"; //new email is generated
  //console.log(new_email)
  return new_email; //new email is return
}

//func to del
//to remove present text in the input field
async function remove_present_text(page_entry, element) {
  let text = await element.evaluate((tx) => tx.textContent); //getting the text of input_field
  // const inputValue = await page.$eval("#inputID", (el) => el.value);

  //removing the text
  for (let i = 0; i < text.length; i++) {
    await page_entry.keyboard.press("Backspace");
  }
}

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

//Login function for entering credentials from login page
async function login(page_entry, email, password) {
  var xpath_email_if = "//*[@id='email2']"; //xpath of email input field on login page
  var xpath_password_if = "//*[@id='password']"; //xpath of password input field on login page
  var xpath_login_b = "//*[@id='btnlog']"; //xpath of login button on sign up page
  try {
    //start of TRY

    await page_entry.waitForTimeout(5000); // delay of 5 seconds

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
  } catch (error) {
    //end of TRY

    //start of catch
    console.log("Login Button  is not clicked");
  } //end of catch
}

//signout after signup
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

//this function will navgate from compomemt page to boxed layout page
async function comp_to_boxed_layout(
  page,
  width_desired,
  low_width,
  high_width
) {
  var xpath_sidemenu_comp =
    "//*[@id='__next']/div/div/div/div/div/div[1]/div[2]"; //xpath of side menu icon

  //console.log("in compto box ")
  //this block will execute when screen width size is smaller than or equal to 1023
  if (width_desired <= low_width) {
    //Menu click when the screen size is small
    try {
      //start of  try

      let side_menu_onComp = await page.waitForXPath(xpath_sidemenu_comp, {
        visible: true,
      }); //side mneu is to be found here
      await side_menu_onComp.click(); //side menu is clicked

      console.log("Side menu is clicked");
    } catch (error) {
      //end of  try
      //start of  catch
      console.log("Side menu is not clicked");
      //console.error(error);
    } //end of  catch

    await page.waitForTimeout(4000); // delay of 4 seconds

    var xpath_mas_lay_b_s =
      "//*[@id='__next']/div/div/div/div/div/div[1]/div[1]/div[2]/div[1]/div/div[1]/button"; //xpath of arrow button
    try {
      //start of  try
      let mas_lay_b_s = await page.waitForXPath(xpath_mas_lay_b_s, {
        visible: true,
      }); //arrow button is to be found here
      await mas_lay_b_s.click(); //arrow button is clicked
      console.log("Button is clicked");
    } catch (error) {
      //end of  try
      //start of  catch
      console.log("Button is not clicked");
    } //end of  catch

    await page.waitForTimeout(4000); // delay of 4 seconds

    //xpath of boxed layout
    var xpath_boxed_lay_s =
      "//*[@id='__next']/div/div/div/div/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/a";

    try {
      //start of  try
      let xbox_lay_s = await page.waitForXPath(xpath_boxed_lay_s, {
        visible: true,
      }); //boxed layout is to be found here
      await xbox_lay_s.click(); //boxed layout is clicked
      console.log("Boxed Layout is clicked");
    } catch (error) {
      //end of  try

      //start of inner catch
      console.log("Boxed Layout is not clicked");
    } //end of  catch
  } //end of if block

  //this block will execute when screen width size is greator than or equal to 1024
  else if (width_desired >= high_width) {
    //start of else if block

    await page.waitForTimeout(4000); // delay of 5 seconds

    //xpath of arrow button
    var xpath_mas_lay_b_l =
      "//*[@id='__next']/div/div/div/div/div/div[1]/div[3]/div[2]/div[1]/div[1]/div/div[1]/button";

    try {
      //start of  try

      let mas_lay_b_l = await page.waitForXPath(xpath_mas_lay_b_l, {
        visible: true,
      }); //arrow button is to be found here
      await mas_lay_b_l.click(); //arrow button is clicked
      console.log("Button is clicked");
    } catch (error) {
      //end of  try
      //start of  catch
      console.log("Button is not clicked");
    } //end of  catch

    await page.waitForTimeout(4000); // delay of 5 seconds

    //xpath of boxed layout
    var xpath_boxed_lay_l =
      "//*[@id='__next']/div/div/div/div/div/div[1]/div[3]/div[2]/div[1]/div[1]/div/div[2]/div/a";

    try {
      //start of  try
      let xbox_lay_l = await page.waitForXPath(xpath_boxed_lay_l, {
        visible: true,
      }); //boxed layout is to be found here
      await xbox_lay_l.click(); //boxed layout is clicked
      console.log("Boxed Layout is clicked");
    } catch (error) {
      //end of  try

      //start of  catch
      console.log("Boxed Layout is not clicked");
    } //end of  catch
  } //end of else if block
}

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

//pricing page studnet button click
//and filling the form and
//then submitting the form.
async function student_form(
  page_entry,
  name_input,
  email_input,
  levelOFstudy_input,
  institute_input,
  country_input
) {
  var xpath_apply_b = "//*[@id='p5']"; //xpath of student apply button

  var xpath_name = "//*[@id='name']"; //xpath of name input field
  var xpath_email = "//*[@id='email']"; //xpath of email input field
  var xpath_LoS = "//*[@id='level']"; //xpath of level of study input field

  var xpath_inst = "//*[@id='institute']"; //xpath of institute input field

  var xpath_cont = "//*[@id='country']"; //xpath of country input field

  try {
    //start of  try

    let getA_b = await page_entry.waitForXPath(xpath_apply_b, {
      visible: true,
    }); //student apply is to be found here
    await getA_b.evaluate((b) => b.click()); //tudent apply is clicked
    console.log("Student apply button is clicked");
  } catch (eroor) {
    //end of  try
    //start of  catch
    console.log("Student apply button is not clicked");
  } //end of  catch

  try {
    //start of TRY

    let name_input_field = await page_entry.waitForXPath(xpath_name, {
      visible: true,
    }); //name input field is to be found here
    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds
    await name_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await name_input_field.type(name_input); //input is entered in name input field
    console.log("Name Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let email_input_field = await page_entry.waitForXPath(xpath_email, {
      visible: true,
    }); //email input field is to be found here
    await email_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    //console.log(typeof email_input);
    await email_input_field.type(email_input); //input is entered in email input field
    console.log("Email Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let los_input_field = await page_entry.waitForXPath(xpath_LoS, {
      visible: true,
    }); //Level of Study input field is to be found here
    await los_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await los_input_field.type(levelOFstudy_input); //input is entered in Level of Study input field
    console.log("Level of Study Input is entered");

    let inst_input_field = await page_entry.waitForXPath(xpath_inst, {
      visible: true,
    }); //Institute input field is to be found here
    await inst_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await inst_input_field.type(institute_input); //input is entered in Institute input field
    console.log("Institution Input is entered");

    let cont_input_field = await page_entry.waitForXPath(xpath_cont, {
      visible: true,
    }); //Country/Region input field is to be found here
    await cont_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await cont_input_field.type(country_input); //input is entered in Country/Region input field
    console.log("Country Input is entered");

    await page_entry.waitForTimeout(2000); // delay of 2 seconds
  } catch (error) {
    //end of try

    console.log("Form values are not entered");
    console.error(error);
  }

  var xpath_submit_b = "//*[@id='studentpopup']"; //xpath of submit button

  try {
    //start of  try

    let subA_b = await page_entry.waitForXPath(xpath_submit_b, {
      visible: true,
    }); //submit button is to be found here
    await subA_b.evaluate((b) => b.click()); //submit button is clicked
    console.log("Form is submitted");
  } catch (eroor) {
    //end of  try
    //start of  catch
    console.log("Form is not submitted");
  } //end of  catch
}

//login button click on pricing page
async function log_click_on_pp(
  page_entry,
  width_desired,
  low_width,
  high_width
) {
  var xpath_login_pp_l_ss = "//*[@id='header']/div[1]/div/div/div[2]/a"; //xpath login button on large screen size
  //var xpath_side_menu = "//*[@id='i-menu']";   //xpath login button on large screen size

  var xpath_of_menu = "//*[@id='i-menu']"; //xpath for menu icon on pricing page

  var xpath_of_sidemenu = "//*[@id='header']/div[2]/div/div/div/div[2]/div"; //xpath for side menu on pricing page

  var xpath_login_pp_s_s =
    "//*[@id='header']/div[2]/div/div/div/div[2]/div/ul/a[8]"; //xpath login button on small screen size

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
        let login_click = await page_entry.waitForXPath(xpath_login_pp_s_s, {
          visible: true,
        }); //login button is to be found here
        await login_click.click(); //login button is clicked

        console.log("login button is clicked");
      } catch (error) {
        //End of  TRY

        //start of CATCH
        console.log("login button is not clicked");
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
      var login_item_ft = await page_entry.waitForXPath(xpath_login_pp_l_ss, {
        visible: true,
      }); //login is to be found on the main page
      await login_item_ft.click(); //login when found is clicked
      console.log("Login is clicked");
    } catch (e) {
      //end of try
      //start of catch
      console.log("Login is not clicked");
    } //end of try
  } //end of else if
}
