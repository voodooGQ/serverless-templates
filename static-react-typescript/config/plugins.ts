import { AWS } from "@serverless/typescript";

export const plugins: AWS["plugins"] = [
  "serverless-webpack",
  "serverless-plugin-scripts",
  "serverless-offline",
  "serverless-s3-deploy",
  "serverless-stage-manager",
]
