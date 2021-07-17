

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
