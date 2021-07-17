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
