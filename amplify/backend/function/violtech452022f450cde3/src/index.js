const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.email.S
      const candidatePhone = streamedItem.dynamodb.NewImage.phone.S
      const candidateCompanyname = streamedItem.dynamodb.NewImage.companyname.S
      const candidateMessage = streamedItem.dynamodb.NewImage.message.S
      const candidateCompanywebsite = streamedItem.dynamodb.NewImage.companywebsite.S

      await ses
          .sendEmail({
            Destination: {
              ToAddresses: [process.env.SES_EMAIL],
            },
            Source: process.env.SES_EMAIL,
            Message: {
              Subject: { Data: 'Candidate Form Submission' },
              Body: {
                Text: { Data: `My name is ${candidateName}. 
                You can reach me at ${candidateEmail}.
                My contact number is ${candidatePhone}.
                Company name : ${candidateCompanyname}.
                Company website : ${candidateCompanywebsite}
                Message: ${candidateMessage}` },
              },
            },
          })
          .promise()
    }
  }
  return { status: 'done' }
}
