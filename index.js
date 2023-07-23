/* 
1. Use the inquirer npm package to get user input.
  Description: So that the user could type something into the terminal when you run this project.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
  Description: and we're gonna take whatever the user typed to generate a QR image and then save that image locally.
3. Create a txt file to save the user input using the native fs node module.
  Description: and then we're gonna create a txt file using the native node module
  so that we can save the user input . and once the project has been created , we can type the url in the console , and that URL will get generated into an image file which will be saved in the same folder.And 
  along with that image file there will be a txt file which contains whatever URL the user has typed in.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    {
       message: "Type in your URL: ",
      name: "URL",
     },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
 const url = answers.URL;
 var qr_svg = qr.image(url);
 qr_svg.pipe(fs.createWriteStream("qr_img.png"));
 fs.writeFile("URL.txt", url, (err)=>{
 if (err) throw err;
 console.log("The file has been saved!");
 });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });