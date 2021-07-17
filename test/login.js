
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
    console.log("Login Button is not clicked");
  } //end of catch
}
