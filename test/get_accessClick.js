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
