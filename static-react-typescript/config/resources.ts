import { AWS } from "@serverless/typescript";
import {
  ApiGatewayRestApi,
  DistBucket,
  DistBucketAdminPolicy,
  DistBucketGetObjectPolicy,
} from "./resources/index"
import {
  ApiGatewayRestApi as ApiGatewayRestApiOutput,
  DistBucket as DistBucketOutput,
} from "./outputs/index"


export const resources: AWS["resources"] = {
  Resources: {
    ApiGatewayRestApi,
    DistBucket,
    DistBucketAdminPolicy,
    DistBucketGetObjectPolicy,
  },
  Outputs: {
    ApiGatewayRestApi: ApiGatewayRestApiOutput,
    DistBucket: DistBucketOutput,
  }
}
