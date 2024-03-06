import { AWS } from "@serverless/typescript";

export const custom: AWS["custom"] = {
  aws: {
    account: "YOUR_ACCOUNT",
    user: "YOUR_IAM_USER"
  },
  stages: [
    "develop",
    "production"
  ],
  distBucketName: "YOUR_BUCKET_PREFIX-${self:provider.stage}",
  distBucketUrl: {
    "us-east-1": {
      "Fn::Join": [
        "",
        [
          "https://s3.amazonaws.com/",
          {
            Ref: "DistBucket",
          }
        ]
      ]
    },
    default: {
      "Fn::Join": [
        "",
        [
          "https://s3-",
          {
            Ref: "AWS::Region",
          },
          ".amazonaws.com/",
          {
            Ref: "DistBucket",
          }
        ]
      ]
    },
  },
  scripts: {
    hooks: {
      "package:initialize": "pnpm run build:browser",
      "deploy:finalize": "npx sls s3deploy --stage ${self:provider.stage}",
    }
  },
  webpack: {
    webpackConfig: "webpack.server.config.js",
  },
  assets: {
    auto: false,
    targets: [
      {
        bucket: {
          Ref: "DistBucket",
        },
        acl: "public-read",
        files: [
          {
            source: "dist/",
            headers: {
              "CacheControl": "max-age=31104000", // 1 year
            },
            globs: [
              "**/*",
            ]
          }
        ]
      }
    ]
  },
  "serverless-offline": {
    useChildProcesses: true,
    noPrependStageInUrl: true,
    httpPort: 4000,
    lambdaPort: 3002,
  }
}
