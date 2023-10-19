const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: (input) => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter your desired text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter your desired shape color:',
        },
    ])
    .then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;
        let shapeInstance;

        switch(shape) {
            case 'circle':
                shapeInstance = new Circle(shapeColor);
                break;
            case 'triangle':
                shapeInstance = new Triangle(shapeColor);
                break;
            case 'square':
                shapeInstance = new Square(shapeColor);
                break;
            default:
                throw new Error('Invalid shape');
    }
    
    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="100" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('examples/logo.svg', svgContent);
  console.log('Generated logo.svg');

})
.catch((err) => {
    console.log('An error occurred:', err);
});