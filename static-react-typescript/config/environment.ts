import { AWS } from "@serverless/typescript";

export const environment: AWS["provider"]["environment"] = {
  AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
  SERVERLESS_PROJECT: "${self:service}",
  SERVERLESS_REGION: "${self:provider.region}",
  SERVERLESS_STAGE: "${self:provider.stage}",
  APP_DIST_URL: "${self:custom.distBucketUrl.${self:provider.region}, self:custom.distBucketUrl.default}",
  APP_PUBLIC_URL: "${self:custom.distBucketUrl.${self:provider.region}, self:custom.distBucketUrl.default}",
  APIGATEWAY_URL: {
    "Fn::Join": [
      "",
      [
        "https://",
        {
          Ref: "ApiGatewayRestApi",
        },
        ".execute-api.",
        {
          Ref: "AWS::Region",
        },
        ".amazonaws.com/${self:provider.stage}",
      ]
    ]
  }
}
