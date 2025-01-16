// Load the AWS SDK
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const BUCKET_NAME = 'your-s3-bucket-name';  // Replace with your bucket name

exports.handler = async (event) => {
    const fileName = event.fileName;  // Expected file name in the event
    const fileContent = Buffer.from(event.fileContent, 'base64');  // Base64-encoded content

    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent,
        ContentType: 'application/pdf'  // Assuming the uploaded file is a PDF
    };

    try {
        const uploadResult = await s3.upload(params).promise();
        console.log('File uploaded successfully:', uploadResult);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'File uploaded successfully', location: uploadResult.Location })
        };
    } catch (error) {
        console.error('Error uploading file:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error uploading file', error: error.message })
        };
    }
};
