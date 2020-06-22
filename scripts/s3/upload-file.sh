BUCKET_NAME=$1
FILE_PATH=$2

aws \
  --endpoint-url=http://localhost:4572 s3 cp $FILE_PATH s3://$BUCKET_NAME

aws \
  --endpoint-url=http://localhost:4572 s3 ls s3://$BUCKET_NAME