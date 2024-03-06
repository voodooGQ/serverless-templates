export const DistBucket = {
  Type: "AWS::S3::Bucket",
  DeletionPolicy: "Delete",
  Properties: {
    BucketName: "${self:custom.distBucketName}",
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: false,
      BlockPublicPolicy: false,
      IgnorePublicAcls: false,
      RestrictPublicBuckets: false
    },
    OwnershipControls: {
      Rules: [{
        ObjectOwnership: "ObjectWriter"
      }]
    },
    CorsConfiguration: {
      CorsRules: [{
        AllowedHeaders: ["*"],
        AllowedMethods: ["GET"],
        AllowedOrigins: [{
          "Fn::Join": ["", ["https://", {
            Ref: "ApiGatewayRestApi"
          }, ".execute-api.", {
            Ref: "AWS::Region"
          }, ".amazonaws.com"]]
        }],
        MaxAge: 3000
      }]
    }
  }
}
