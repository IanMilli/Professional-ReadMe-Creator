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

module.exports = generateMarkdown;