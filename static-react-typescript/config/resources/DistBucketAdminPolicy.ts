export const DistBucketAdminPolicy = {
  Type: "AWS::S3::BucketPolicy",
  Properties: {
    Bucket: {
      Ref: "DistBucket"
    },
    PolicyDocument: {
      Version: "2012-10-17",
      Statement: [{
        Sid: "AdminPolicy",
        Effect: "Allow",
        Principal: {
          AWS: "arn:aws:iam::${self:custom.aws.account}:user/${self:custom.aws.user}"
        },
        Action: ["s3:*"],
        Resource: [
          "arn:aws:s3:::${self:custom.distBucketName}",
          "arn:aws:s3:::${self:custom.distBucketName}/*"
        ]
      }]
    }
  }
}
