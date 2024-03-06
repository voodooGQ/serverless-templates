import { AWS } from "@serverless/typescript";
import { environment } from "./environment";

export const provider : AWS["provider"] = {
  name: "aws",
  runtime: "nodejs20.x",
  region: "us-east-1",
  stage: "${opt:stage, 'develop'}",
  memorySize: 512,
  timeout: 6,
  logRetentionInDays: 7,
  lambdaHashingVersion: "20201221",
  logs: {
    restApi: {
      accessLogging: true,
      format: `{
        "stage" : "$context.stage",
        "requestId" : "$context.requestId",
        "apiId" : "$context.apiId",
        "resource_path" : "$context.resourcePath",
        "resourceId" : "$context.resourceId",
        "http_method" : "$context.httpMethod",
        "sourceIp" : "$context.identity.sourceIp",
        "userAgent" : "$context.identity.userAgent",
        "caller" : "$context.identity.caller",
        "user" : "$context.identity.user",
        "requestTime": "$context.requestTime",
        "status": "$context.status"
      }`.replace(/(\r\n|\n)/gm, ""),
      executionLogging: true,
      level: "ERROR",
      fullExecutionData: false,
    },
    frameworkLambda: true,
  },
  environment
}
