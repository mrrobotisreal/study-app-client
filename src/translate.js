// import AWS from 'aws-sdk';
// const REGION = 'us-west-2';
// AWS.config.update({region: REGION});
// const translate = new AWS.Translate();

// export const translateIt = () => {
//   translate.translateText({
//     SourceLanguageCode: 'en',
//     TargetLanguageCode: 'vi',
//     Text: 'Hello, world.',
//   }, (err, data) => {
//     if (err) console.log(err, err.stack);
//     else console.log(data);
//   })
// };

// translateIt();