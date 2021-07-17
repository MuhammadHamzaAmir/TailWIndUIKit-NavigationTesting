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
