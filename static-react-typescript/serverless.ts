import type { AWS } from "@serverless/typescript";
import { provider } from "./config/provider";
import { custom } from "./config/custom";
import { resources } from "./config/resources";
import { plugins } from "./config/plugins";

const serverlessConfiguration: AWS = {
  service: "<SERVICE_NAME>",
  frameworkVersion: "3",
  useDotenv: true,
  variablesResolutionMode: "20210326",
  disabledDeprecations: [
    'CLI_OPTIONS_SCHEMA',
  ],
  package: {
    individually: true,
  },
  provider,
  plugins,
  functions: {
    serve: {
      handler: "handler.serve",
      events: [
        {
          http: {
            path: "/",
            method: "ANY",
            cors: true,
          },
        },
        {
          http: {
            path: "/{any+}",
            method: "ANY",
            cors: true,
          }
        }
      ]
    }
  },
  custom,
  resources
}

module.exports = serverlessConfiguration;
