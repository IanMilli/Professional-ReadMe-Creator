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
      name: "title",
      default: "Title of Project"
    },{
      type: "input",
      message: "What is your project's description?",
      name: "description",
      default: "Description of Project"
    },{
      type: "input",
      message: "What are the technologies used to create your project?",
      name: "technologies",
      default: "Technologies used such as HTML, CSS, JavaScript, Node etc ....."
    },{
      type: "input",
      message: "What are the links for deployed project?",
      name: "linkDeployedApp",
      default: "Links for Deployed App"
    },{
      type: "input",
      message: "What are the links for your projects repository?",
      name: "linkAppRepository",
      default: "Links for the Project Repository"
    },{
      type: "input",
      message: "What are your project's installation instructions?",
      name: "installation",
      default: "node index.mjs"
    },{
      type: "input",
      message: "What is the description for any wire framing you carried out for this project",
      name: "wireFramingDescription",
      default: "wire framing description"
    },{
      type: "list",
      message: "Do you have any wire framing images to add to the readme file?",
      choices: ["yes this is a placeholder for a wire framing image ","No delete this section"],
      name: "wireFramingImg",
      default: "placeholder for wire framing images to be added via github repository"
    },{
      type: "input",
      message: "What is the user story for this project and how was it developed?",
      name: "userStory",
      default: "user story for project"
    },{
      type: "input",
      message: "How was the project developed?",
      name: "development",
      default: "how was the application developed"
    },{
      type: "input",
      message: "How should the user interact with this project?",
      name: "usage",
      default: "How do you use the application?"
    },{
      type: "list",
      message: "Do you have any screenshots to add to the readme file?",
      choices: ["yes, this is a placeholder for screenshots to be added","No, delete this section"],
      name: "screenshots",
      default: "placeholder for screenshots to be added via github repository"
    },{
        type: "input",
        message: "What commands should be run to run tests?",
        name: "tests",
        default: "node index.mjs"
      },{
        type: "input",
        message: "How could this project be evolved next?",
        name: "evolution",
        default: "description of how this project could be developed further"
      },{
        type: "input",
        message: "Names of project Authors ?",
        name: "credits",
        default: "name of the main project author"
    },{
        type: "input",
        message: "What is the email of the Main Author?",
        name: "email",
        default: "example = author1@email.com"
      },{
        type: "input",
        message: "What is the GitHub username of the Main Author?",
        name: "githubUserName",
        default: "example = GitHub user name"
      },{
        type: "input",
        message: "What is the GitHub repository link of the main Author?",
        name: "githubRepoMain",
        default: "Author/s Main GitHub Repository Link"
      },{
        type: "input",
        message: "What reference materials were used in the creation of this project?",
        name: "references",
        default: "research materials used"
    },{
      type: "input",
      message: "names of other collaborators",
      name: "collaboratorNames",
      default: "add names of other collaborators"
  },{
        type: "input",
        message: "if this was a collaborated project with multiple authors, what was the collaboration agreement used",
        name: "collaboration",
        default: "add text for collaboration agreement"
    },{
      type: "list",
      message: "How is this project licensed?",
      name: "license",
      choices: ["Apache", "Boost Software", "Creative Commons", "GNU", "ISC", "MIT", "Mozilla Public", "The Unlicense", "Other"],
      default: "project license"
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
   * [UserStory](#userstory)
   * [Development](#development)
   * [Usage](#usage)
   * [Screenshots](#screenshots)
   * [Tests](#tests)
   * [Evolution](#evolution)
   * [Credits](#credits)
   * [References](references)
   * [Collaboration](#collaboration)
   * [License](#license)
   
   
   ## Description

   ${data.description}

   ## Technologies

   ${data.technologies}

   ## Links

   ### Link for [Deployed Application](${data.linkDeployedApp})
   
   ### Link for [Repository For Deployed Application](${data.linkAppRepository})
   
   ## Installation 

   ${data.installation}

   ## WireFraming

   ${data.wireFramingDescription}

   *### Wire Framing Image
   ${data.wireFramingImg}

   ## User Story

   ${data.userStory}

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

   * Main Author:                   ${data.credits}
   * Main Author Email:             ${data.email}
   * Main Author GitHub User Name:  ${data.githubUserName}

   ## Collaborators
   ${data.collaboratorNames}

   ##References

   ${data.references}

   ## Collaboration

   ${data.collaboration}

   ## Questions

   If you have further questions, you can reach me at ${data.email}. For more of my work, see [my GitHub](https://github.com/${data.githubRepoMain}).
  
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
        writeToFile("GeneratedREADME.md", generateMarkdown(response))
});
}

// function call to initialize program
init();

