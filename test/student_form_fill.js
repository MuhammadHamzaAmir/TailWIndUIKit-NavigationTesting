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
  await page.waitForTimeout(4500); // delay for 4.5 seconds for website to load

  await student_form(page,name,email,"testing","tester","TEST Kingdom");
  await page.waitForTimeout(5000); // delay for 5 second for website to load

  await browser.close();
})();


//pricing page studnet button click
//and filling the form and
//then submitting the form.
async function student_form(
  page_entry,
  name_input,
  email_input,
  levelOFstudy_input,
  institute_input,
  country_input
) {
  var xpath_apply_b = "//*[@id='p5']"; //xpath of student apply button

  var xpath_name = "//*[@id='name']"; //xpath of name input field
  var xpath_email = "//*[@id='email']"; //xpath of email input field
  var xpath_LoS = "//*[@id='level']"; //xpath of level of study input field

  var xpath_inst = "//*[@id='institute']"; //xpath of institute input field

  var xpath_cont = "//*[@id='country']"; //xpath of country input field

  try {
    //start of  try

    let getA_b = await page_entry.waitForXPath(xpath_apply_b, {
      visible: true,
    }); //student apply is to be found here
    
    await getA_b.evaluate((c) =>
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    );   //scrolling till that component
    await page_entry.waitForTimeout(3001); // delay of 3 seconds
    await getA_b.evaluate((b) => b.click()); //tudent apply is clicked
    console.log("Student apply button is clicked");
  } catch (error) {
    //end of  try
    //start of  catch
    console.log("Student apply button is not clicked");
  } //end of  catch

  try {
    //start of TRY

    let name_input_field = await page_entry.waitForXPath(xpath_name, {
      visible: true,
    }); //name input field is to be found here
    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds
    await name_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await name_input_field.type(name_input); //input is entered in name input field
    console.log("Name Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let email_input_field = await page_entry.waitForXPath(xpath_email, {
      visible: true,
    }); //email input field is to be found here
    await email_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    //console.log(typeof email_input);
    await email_input_field.type(email_input); //input is entered in email input field
    console.log("Email Input is entered");

    await page_entry.waitForTimeout(1500); // delay of 1.5 seconds

    let los_input_field = await page_entry.waitForXPath(xpath_LoS, {
      visible: true,
    }); //Level of Study input field is to be found here
    await los_input_field.evaluate((c) =>
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    ); //scrolling till that component
    await page_entry.waitForTimeout(2001); // delay of 2 seconds

    await los_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await page_entry.waitForTimeout(1501); // delay of 1.5 seconds
    await los_input_field.type(levelOFstudy_input); //input is entered in Level of Study input field
    console.log("Level of Study Input is entered");

    let inst_input_field = await page_entry.waitForXPath(xpath_inst, {
      visible: true,
    }); //Institute input field is to be found here
    await inst_input_field.evaluate((c) =>
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    ); //scrolling till that component
    await page_entry.waitForTimeout(2101); // delay of 2.1 seconds

    await inst_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await page_entry.waitForTimeout(1501); // delay of 1.5 seconds
    await inst_input_field.type(institute_input); //input is entered in Institute input field
    console.log("Institution Input is entered");

    let cont_input_field = await page_entry.waitForXPath(xpath_cont, {
      visible: true,
    }); //Country/Region input field is to be found here
    await cont_input_field.evaluate((c) =>
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    ); //scrolling till that component
    await page_entry.waitForTimeout(2001); // delay of 2 seconds

    await cont_input_field.evaluate((b) => b.click({ clickCount: 3 })); //it selects the already written text and is overwritten in next line
    await page_entry.waitForTimeout(1501); // delay of 1.5 seconds
    await cont_input_field.type(country_input); //input is entered in Country/Region input field
    console.log("Country Input is entered");

    await page_entry.waitForTimeout(2000); // delay of 2 seconds
  } catch (error) {
    //end of try

    console.log("Form values are not entered");
    console.error(error);
  }

  var xpath_submit_b = "//*[@id='studentpopup']"; //xpath of submit button

  try {
    //start of  try

    let subA_b = await page_entry.waitForXPath(xpath_submit_b, {
      visible: true,
    }); //submit button is to be found here
    await subA_b.evaluate((c) =>
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      })
    ); //scrolling till that component
    await page_entry.waitForTimeout(2001); // delay of 2 seconds

    await subA_b.evaluate((b) => b.click()); //submit button is clicked
    console.log("Form is submitted");
    await page_entry.waitForTimeout(3001); // delay of 3 seconds
  } catch (eroor) {
    //end of  try
    //start of  catch
    console.log("Form is not submitted");
  } //end of  catch
}
