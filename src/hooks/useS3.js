import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

// const bucket = import.meta.env.VITE_AWS_BUCKET_NAME;
const bucket = 'study-app-pdx';
const keyName = 'test.json';
const client = new S3Client({});

// const createCommand = new CreateBucketCommand({
//   Bucket: testBucketName,
// });

const putCommand = new PutObjectCommand({
  Bucket: bucket,
  Key: keyName,
  Body: JSON.stringify({
    "key1": "value1",
    "key2": 2,
    "key3": true
  }),
});

const useS3 = async () => {
  let wasSuccessful;
  try {
    // await client.send(createCommand);
    await client.send(putCommand);
    console.log('Uploading data to ' + bucket + '/' + keyName);
    wasSuccessful = true;
  } catch (err) {
    console.error(err, err.stack);
    wasSuccessful = false;
  } finally {
    console.log(wasSuccessful ? 'Successfully uploaded!' : 'Upload has failed');
  }
}
// useS3();

const getCommand = new GetObjectCommand({
  Bucket: bucket,
  Key: 'test.json',
});

export const getObject = async () => {
  let wasSuccessful;
  let result;
  try {
    result = await client.send(getCommand);
    console.log('Retrieving data from ' + bucket + '/' + 'test.json');
    wasSuccessful = true;
  } catch (err) {
    console.error(err, err.stack);
    wasSuccessful = false;
  } finally {
    console.log(wasSuccessful ? 'successfully retrieved!\n' + result.Body : 'There was a problem retrieving the object');
  }
}
getObject();