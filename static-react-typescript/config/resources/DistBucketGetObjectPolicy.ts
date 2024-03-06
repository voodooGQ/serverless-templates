export const DistBucketGetObjectPolicy = {
  Type: "AWS::S3::BucketPolicy",
  Properties: {
    Bucket: {
      Ref: "DistBucket"
    },
    PolicyDocument: {
      Version: "2012-10-17",
      Statement: [{
        Sid: "PublicReadGetObject",
        Effect: "Allow",
        Principal: "*",
        Action: ["s3:GetObject"],
        Resource: "arn:aws:s3:::${self:custom.distBucketName}/*"
      }]
    }
  }
}
