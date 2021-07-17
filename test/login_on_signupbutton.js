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