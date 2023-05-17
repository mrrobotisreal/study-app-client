import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import 'dotenv';
import { v4 as uuidv4 } from 'uuid';

// const bucketE = import.meta.env.VITE_AWS_BUCKET;
// console.log(bucketE);
/**
 * Bucket name should be the name of the app plus the region,
 * such as "study-app-pdx" or "study-app-lhr".
 * Inside this bucket is a "users" folder,
 * each user will have their own folder designated by there username,
 * followed by 3 folders inside there (for now, maybe more later). Those 3 folders are
 * auth/, meta/ and collections/. Inside collections/, there will be a reserved filename
 * titled "DICTIONARY.json" which will contain all words stored from reaching texts and
 * selecting words.
 */
const bucket = 'study-app-pdx';
const client = new S3Client({});

export const putUserCollection = async (key, collection) => {
  let wasSuccessful;
  const user = localStorage.getItem('lh:username:5173');
  if (!user) return 'There was a problem retrieving your username';
  collection = JSON.stringify(collection);
  const putCommand = new PutObjectCommand({
    Bucket: 'study-app-pdx',
    Key: `users/${user}/collections/${key}.json`,
    Body: collection
  })
  try {
    await client.send(putCommand);
    wasSuccessful = true;
  } catch (err) {
    console.error(err, err.stack);
    wasSuccessful = false;
  } finally {
    console.log(wasSuccessful ? 'Successfully uploaded collection!' : 'There was a problem uploading your collection.');
  }
}
// putUserCollection();

export const getUserCollection = async (key) => {
  let wasSuccessful;
  let result;
  const user = localStorage.getItem('lh:username:5173');
  if (!user) return 'There was a problem retrieving your username';
  const getCommand = new GetObjectCommand({
    Bucket: 'study-app-pdx',
    Key: `/users/${user}/collections/${key}`,
  })
  return new Promise(async (resolve, reject) => {
    try {
      result = await client.send(getCommand);
      let dataChunks = [];
      result.Body.once('error', err => reject(err));
      result.Body.on('data', chunk => dataChunks.push(chunk));
      result.Body.once('end', () => resolve(dataChunks.join('')));
      console.log('Retrieving data from ' + bucket + '/' + user + '/collections/' + key);
      wasSuccessful = true;
    } catch (err) {
      console.error(err, err.stack);
      wasSuccessful = false;
    } finally {
      console.log(wasSuccessful ? 'successfully retrieved!' : 'There was a problem retrieving the object');
    }
  });
}
export const getAllUserCollections = async () => {
  // const user = localStorage.getItem('lh:username:5173');
  // if (!user) return 'There was a problem retrieving your username';
  let user = 'test-user';
  const listCommand = new ListObjectsV2Command({
    Bucket: 'study-app-pdx',
    MaxKeys: 1000,
    Prefix: `users/${user}/collections`,
  });
  const res = await client.send(listCommand);
  console.log('Contents length: ', res.Contents.length);
  console.log(res.Contents)
};
getAllUserCollections();
