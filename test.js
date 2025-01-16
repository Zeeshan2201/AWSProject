const lambda = require('./index'); // Import the Lambda handler
const fs = require('fs');

// Read the file content and encode it to base64
const filePath = './sample.pdf'; // Ensure the file is in the same directory
const fileContent = fs.readFileSync(filePath).toString('base64'); // Read file and convert to base64

const event = {
    fileName: 'sample.pdf',
    fileContent: fileContent
};

// Call the Lambda handler
lambda.handler(event).then((response) => {
    console.log('Response:', response);
}).catch((error) => {
    console.error('Error:', error);
});

