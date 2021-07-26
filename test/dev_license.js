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

  // Create a new incognito browser context.
  //const context = await browser.createIncognitoBrowserContext(); // for testing

  var page = await browser.newPage(); // a new page is created

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://tailwinduikit.com/pricing"); //mentioned site is then reached
  await page.waitForTimeout(2000); // delay for 5 second for website to load
  await dev_lisence(page);

  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();

//function for div license
async function dev_lisence(page_entry){

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
  await div_lis_clk.click(); //jointuk button is clicked
    

}