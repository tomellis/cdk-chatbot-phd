import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns';
import * as event from '@aws-cdk/aws-events';
import {SnsTopic} from '@aws-cdk/aws-events-targets';
import * as chatbot from '@aws-cdk/aws-chatbot';

export class CdkChatbotPhdStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  // Create an SNS topic for AWS Chatbot, need this in each region
  const chatbot_topic = new sns.Topic(this, 'CdkChatbotPHDTopic', {
      displayName: 'PHD Chatbot Topic'
  });

  // Create an CWE for us to pull events from PHD, need this in each region
  const chatbot_phd_rule = new event.Rule(this, 'CdkChatbotPHDCWEEvent', {
      description: 'Capture PHD events and send to SNS',
      eventPattern: {"source": ["aws.health"]},
      //targets: chatbot_topic.arn,
  });

  // Add SNS as target to CWE
  chatbot_phd_rule.addTarget(new SnsTopic(chatbot_topic));

  // AWS Chatbot doesn't have CFN for Chime :-( slack only right now...
  // Slack integration is raw CFN, no constructs in CDK and stil requires you to use the AWS console to setup the initial chatbot, cfn only for configuration:
  // https://docs.aws.amazon.com/cdk/api/latest/docs/aws-chatbot-readme.html
  
  }
}
