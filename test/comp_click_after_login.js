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
