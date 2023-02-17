# Professional ReadMe Creator using the Command Line
 
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
   * [References](#references)
   * [Collaboration](#collaboration)
   * [License](#license)
   
   ## Description

   This is a application that creates a professional readme file using input by a user prompted through a set of questions. The ReadME.MD File it can generate will be suitable for use with any professional project.

   ## Technologies 

   ES6, Node JS

   ## Links

   ### Link for [Video Demonstrating Use of the Application](https://drive.google.com/file/d/1cMYT_G-fz5oYWfpn78-EGZPbTqDTqUYE/view)
   
   ### Link for [Repository For Deployed Application](https://github.com/IanMilli/Professional-ReadMe-Creator)
   
   ## Installation

   Download the code located in the applications repository by cloning it to a local computer. Use a program like vscode to run an integrated terminal by right clicking on the index.mjs file and selecting "Open in integrated Terminal". Then type in "node index.mjs" and follow the prompts that will appear in the command line.

   ## UserStory
   AS A developer, I WANT a README generator, SO THAT I can quickly create a professional README for a new project

   Acceptance Criteria:
   
   * Create a command-line application that accepts user input.
   * When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:
   * The title of my project

   Sections Including:
   * Description
   * Table of Contents
   * Installation
   * Usage
   * License
   * Contributing
   * Tests
   * Questions

   When a user enters the project title, it's displayed as the title of the README.
   When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions, this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.
   When a user chooses a license for their application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.
   When a user enters their GitHub username, it's added to the section of the README entitled Questions, with a link to their GitHub profile.
   When a user enters their email address, it's added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.
   When a user clicks on the links in the Table of Contents, they are taken to the corresponding section of the README.

   ## Development
    
    I initiated a repository on GitHub and then cloned it to my local machine where i created the basic file structure for the application. I then opened an integrated terminal and used init npm-y to initiate my json package and also initiated the node download separately. Once this was done i wrote the code for the function to generate the readme file before adding in an array of questions for a user to consider to design the parameters of their readme file. Finally i ran several tests that helped me debug any syntax errors.


   ## Usage
  
  This application can be used to generate a professional readme file that can be edited for styling and have screenshots added to it once it is uploaded to git hub for any project by following the instructions in [Installation](#installation). Once all the prompts have been followed a "GeneratedREADME.md" file will be created that can then be uploaded to the users projects Git Hub repository where it can be formated and any screenshots added to it.
 

   ## Screenshots

   Gif Demonstrating use of the application:
[gif 1](https://github.com/IanMilli/Professional-ReadMe-Creator/blob/main/images%20and%20gif/Untitled_%20Feb%2017%2C%202023%208_09%20PM.gif)
   Screenshots demonstrating use of the application
![screenshot 1](https://user-images.githubusercontent.com/120601739/219795590-613566e9-4499-441a-a3fe-a721a3f6b521.png)
![screenshot 2](https://user-images.githubusercontent.com/120601739/219795612-908eb942-bb79-45d3-8d89-3d910a507dfb.png)
![screenshot 3](https://user-images.githubusercontent.com/120601739/219795635-502573ea-886c-492b-86ed-dc756212c2d7.png)

   For a video demonstrating use of the application please refer to [Links](#links)

   ## Tests

   To test the application follow the instructions shown in [Installation](#installation)
   

   ## Evolution

   This project could be developed by linking it to a front end html site allowing a user to create the readme file via a web application. 
   
   Facility could be added to allow greater editing of text spacing via the command line rather than editing after.
   
   Facility could be added to allow images to be linked directly to the readme via the command line questions rather than edited in after via github.

   ## Credits

   *Author:                      Ian Millichamp
   *Email:                       ianmillichamp.2@gmail.com
   *Github User Name:            IanMilli

   ## Collaborators
   *n/A

   ## References

   Tutorial video released by Instructor Dane Edwards
   Week 11 Classes - Working with ES6 and Node Js

   ## Collaboration

   n/A

   ## Questions

   If you have further questions, you can reach me at ianmillichamp.2@gmail.com. For more of my work, see [my GitHub](https://github.com/https://github.com/IanMilli).
  
   ## License

   ![License badge](https://img.shields.io/badge/license-MIT-brightgreen).
 
