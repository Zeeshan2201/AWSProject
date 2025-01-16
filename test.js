const lambda = require('./addNumbers');

const event = {
    num1: 10,
    num2: 20
};

lambda.handler(event).then((response) => {
    console.log('Response:', response);
}).catch((err) => {
    console.error('Error:', err);
});
