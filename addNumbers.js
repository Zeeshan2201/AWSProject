exports.handler = async (event) => {
    const { num1, num2 } = event;
    if (num1 === undefined || num2 === undefined) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Please provide num1 and num2 in the request." })
        };
    }

    const sum = num1 + num2;

    return {
        statusCode: 200,
        body: JSON.stringify({ result: sum })
    };
};
