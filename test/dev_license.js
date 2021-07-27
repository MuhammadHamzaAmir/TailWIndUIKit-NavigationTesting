const puppeteer = require("puppeteer");

(async () => {
  var email = "testoperation@test.com"; //email used for signup and login
  var password = "176hgwqctest"; // default password for all the accounts
  var name = "Test-Operation"; // default name for all the accounts

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  }); //browser is launched


  var page = await browser.newPage(); // a new page is created

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://tailwinduikit.com/pricing"); //mentioned site is then reached
  await page.waitForTimeout(2000); // delay for 5 second for website to load
  await dev_lisence(browser,page);
  await page.waitForTimeout(4000); // delay for 4 second for website to load

  await browser.close();
})();

//function for div license
async function dev_lisence(browser,page_entry){

    var xpath_div_lis_button = "//*[@id='p2']";  
    await page_entry.waitForTimeout(3000); // delay of 3 seconds
    let div_lis_clk = await page_entry.waitForXPath(
        xpath_div_lis_button,
        { visible: true }
    );
    await div_lis_clk.evaluate((c) =>
        c.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        })
    ); //scrolling till that component


  await page_entry.waitForTimeout(4001); // delay of 4 seconds
  await div_lis_clk.click({button:"middle"}); //dev-license button is clicked
  await page_entry.waitForTimeout(4001); // delay of 4 seconds
  
  let pages_l = await browser.pages();  //getting array of opened pages in the browser

  var page_2 = pages_l[(pages_l.length)-1];   //last page
  page_2.bringToFront();  //activating the tab
  
 
 await page_entry.waitForTimeout(5000); // delay of 5 seconds
 var xpath_of_buy_b = "//*[@id='product_page']/div[2]/div[2]/div[2]/div/div/div[1]/div[4]/div/div[2]/div[1]/form/button";
 let buy_b = await page_2.waitForXPath(
  xpath_of_buy_b,
  { visible: true }
);

await buy_b.click(); //buy this button is clicked
await page_2.waitForTimeout(3000); // delay for 3 second for website to load

}