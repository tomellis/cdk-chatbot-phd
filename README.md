# CDK AWS ChatBot

This is a basic CDK TypeScript project setting up:
 * SNS Topic
 * CloudWatch Event for all Personal Health Dashboard (PHD) events
 * SNS subscription from CWE to SNS
 * .... TBC: The actual AWS chatbot deployment!

AWS Chatbot does not yet provide CDK constructs but do offer a [raw CFN](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-chatbot-readme.html) mapping for the Slack integration. For now this project really just sets up the CWE + SNS topic + Sub, which you can deploy to each region via the `deploy.sh` script. AWS Chatbot still requires some manual steps in the console anyway but perhaps custom resource could be used for the missing Chime integration.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
