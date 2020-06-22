'use strict';

const AWS = require('aws-sdk')
const host = process.env.LOCALSTACK_HOST || 'localhost'
const s3port = process.env.S3_PORT || '4572'

const s3config = {
  s3ForcePathStyle: true,
  endpoint: new AWS.Endpoint(`http://${host}:${s3port}`)
}

const s3 = new AWS.S3(s3config)

module.exports.hello = async event => {
  const allBuckets = await s3.listBuckets().promise()
  console.log("allBuckets", allBuckets)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        allBuckets
      }
    ),
  };
};
