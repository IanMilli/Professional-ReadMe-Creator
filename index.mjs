/**variables provided in the starter code to allow for the creation of the readme file */
import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";


/**sections required to be created for a Professional ReadMe File 
Title = name of application
Contents = content list to allow user to quickly navigate readme file
Description = description of application
Technologies = technologies used to create application
Links = links to repository for application
Installation = how to install the application
WireFraming = section to include any wireframing carried out for application
Development = how the application was developed
Usage = how to use the application
Screenshots = screenshots of the application
Tests = evidence of tests carried out to ensure the functuality of the application
Evolution = how the application may be evolved further
Credits =  authors of the application and contact details
References = list of reference materials used in the creation of the application
Collaboration = if required the collaboration agreement
License = license used for the application
*/

/**create an array of questions for the user to respond to */
const questions = [
    {
      type: "input",
      message: "What is your project's title?",
      name: "title"
    },{
      type: "input",
      message: "What is your project's description?",
      name: "description"
    },{
      type: "input",
      message: "What are the technologies used to create your project?",
      name: "technologies",
    },{
      type: "input",
      message: "What are the links for your projects repository and deployed application?",
      name: "links"
    },{
      type: "input",
      message: "What are your project's installation instructions?",
      name: "installation",
      default: "npm i"
    },{
      type: "input",
      message: "What are the img links for any wire framing you carried out for this project",
      name: "wireFraming",
    },{
      type: "input",
      message: "What is the user story for this project and how was it developed?",
      name: "development"
    },{
      type: "input",
      message: "How does the user use this project?",
      name: "usage"
    },{
      type: "input",
      message: "Do you have any screenshots to add to the readme file?",
      name: "screenshots"
    },{
        type: "input",
        message: "What commands should be run to run tests?",
        name: "tests",
        default: "npm run test"
      },{
        type: "input",
        message: "How could this project be evolved next?",
        name: "evolution"
      },{
        type: "input",
        message: "Names of project Authors ?",
        name: "credits"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
      },{
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
      },{
        type: "input",
        message: "What reference materials were used in the creation of this project?",
        name: "references"
    },{
        type: "input",
        message: "if this was a collaborated project with multiple authors, what was the collaboration agreement used",
        name: "collaboration"  
    },{
      type: "list",
      message: "How is this project licensed?",
      name: "license",
      choices: ["Apache", "Boost Software", "Creative Commons", "GNU", "ISC", "MIT", "Mozilla Public", "The Unlicense", "Other"]
    }
  ]

  // function to generate markdown for README

  /**sections required to be created for a Professional ReadMe File - copied from index.js to ensure my readme file connects to the question array in the correct order
 Title = name of application
 Contents = content list to allow user to quickly navigate readme file
 Description = description of application
 Technologies = technologies used to create application
 Links = links to repository for application
 Installation = how to install the application
 WireFraming = section to include any wireframing carried out for application
 Development = how the application was developed
 Usage = how to use the application
 Screenshots = screenshots of the application
 Tests = evidence of tests carried out to ensure the functuality of the application
 Evolution = how the application may be evolved further
 Credits =  authors of the application and contact details
 References = list of reference materials used in the creation of the application
 Collaboration = if required the collaboration agreement
 License = license used for the application
 */
 
 function generateMarkdown(data) {
   return `# ${data.title}
 
   ## Table of Contents
   * [Description](#description)
   * [Technologies](#technologies)
   * [Links](#links)
   * [Installation](#installation)
   * [WireFraming](#wireframing)
   * [Development](#development)
   * [Usage](#usage)
   * [Screenshots](#screenshots)
   * [Tests](#tests)
   * [Evolution](#evolution)
   * [Credits](#credits)
   * [References](references)
   * [Collaboration](#collaboration)
   * [License](#license)
   * 
   ## Description
   ${data.description}
   ## Technologies Used
   ${data.technologies}
   ## Links
   ${data.links}
   ## Installation Instructions
   ${data.installation}
   ## WireFraming
   ${data.wireFraming}
   ## Development
   ${data.development}
   ## Usage
   ${data.usage}
   ## Screenshots
   ${data.screenshots}
   ## Tests
   ${data.tests}
   ## Evolution
   ${data.evolution}
   ## Credits
   ${data.credits}
   ##References
   ${data.refernces}
   ## Collaboration
   ${data.collaboration}
   ## Questions
   If you have further questions, you can reach me at ${data.email}. For more of my work, see [my GitHub](https://github.com/${data.github}).
   ## License
   ![License badge](https://img.shields.io/badge/license-${data.license}-brightgreen).
 `;
 }
 

/* function to write README file*/
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        writeToFile("sampleREADME.md", generateMarkdown(response))
});
}

// function call to initialize program
init();

