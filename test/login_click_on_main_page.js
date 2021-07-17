async function login_click_on_main_page(page,width_desired,small,large) {
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
}