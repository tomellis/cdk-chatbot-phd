#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkChatbotPhdStack } from '../lib/cdk-chatbot-phd-stack';

const app = new cdk.App();
new CdkChatbotPhdStack(app, 'CdkChatbotPhdStack');
