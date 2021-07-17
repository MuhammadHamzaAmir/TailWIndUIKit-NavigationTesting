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
