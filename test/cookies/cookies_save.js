

async function cookies_save(page){
    const fs = require("fs");
    const cookiesFilePath = "cookies.json";
    // Save Session Cookies
    const cookiesObject = await page.cookies();
    // Write cookies to temp file to be used in other profile pages
    fs.writeFile(cookiesFilePath, JSON.stringify(cookiesObject,null,2), function (err) {
      if (err) {
        console.log("The file could not be written.", err);
      }
        console.log("Session has been successfully saved");
    });
};

module.exports = { cookies_save };