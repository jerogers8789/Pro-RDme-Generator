// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =['What is the title of your project?', 'Please enter a description of your project.', 'Please enter the installation instructions.', 'Enter any usage information for the application.', 'Please designate the contribution guidelines.', 'Enter testing instructions.' ];

function askQuestion () {

return inquirer.prompt([{
 name: 'ProjectTitle',
 type: 'input',
 message: questions[0],
},{
 name: 'Description',
 type: 'input',
 message: questions[1]
},{
 name: 'InstallIns',
 type: 'input',
 message: questions[2]
},{
 name: 'Usage',
 type: 'input',
 message: questions[3]
},{
 name: 'Contributions',
 type: 'input',
 message: questions[4]
},{
 name: 'Testing',
 type: 'input',
 message: questions[5]
},{
 name: 'Licenses',
 type: 'list',
 message: 'Choose the license for this project',
 choices: ['Academic Free License v3.0	afl-3.0',
    'Apache license 2.0	apache-2.0',
    'Artistic license 2.0	artistic-2.0',
    'Boost Software License 1.0	bsl-1.0',
    'BSD 2-clause "Simplified" license	bsd-2-clause',
    'BSD 3-clause "New" or "Revised" license	bsd-3-clause',
    'BSD 3-clause Clear license	bsd-3-clause-clear',
    'Creative Commons license family	cc',
    'Creative Commons Zero v1.0 Universal	cc0-1.0',
    'Creative Commons Attribution 4.0	cc-by-4.0',
    'Creative Commons Attribution Share Alike 4.0	cc-by-sa-4.0',
    'Do What The F*ck You Want To Public License	wtfpl',
    'Educational Community License v2.0	ecl-2.0',
    'Eclipse Public License 1.0	epl-1.0',
    'Eclipse Public License 2.0	epl-2.0',
    'European Union Public License 1.1	eupl-1.1',
    'GNU Affero General Public License v3.0	agpl-3.0',
    'GNU General Public License family	gpl',
    'GNU General Public License v2.0	gpl-2.0',
    'GNU General Public License v3.0	gpl-3.0',
    'GNU Lesser General Public License family	lgpl',
    'GNU Lesser General Public License v2.1	lgpl-2.1',
    'GNU Lesser General Public License v3.0	lgpl-3.0',
    'ISC	isc',
    'LaTeX Project Public License v1.3c	lppl-1.3c',
    'Microsoft Public License	ms-pl',
    'MIT	mit',
    'Mozilla Public License 2.0	mpl-2.0',
    'Open Software License 3.0	osl-3.0',
    'PostgreSQL License	postgresql',
    'SIL Open Font License 1.1	ofl-1.1',
    'University of Illinois/NCSA Open Source License	ncsa',
    'The Unlicense	unlicense',
    'zLib License',
]
},{
 name: 'email',
 type: 'input',
 message:'Enter your e-mail address'
},{
 name:'Github',
 type:'input',
 message:'Enter your Github username.'
}
])
};

// TODO: Create a function to write README file




// 
// TODO: Create a function to initialize app
async function init() {
    try {
        const responses = await askQuestion();
        const markdown = generateMarkdown(responses);
        await writeFileAsync('./Generated Content/NewREADME.md', markdown);
        console.log('File created');
        
    } catch (error) {
        console.log(error);
    }
}

// // Function call to initialize app
init();
