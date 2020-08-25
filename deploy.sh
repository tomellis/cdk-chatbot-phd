#!/usr/bin/env bash

# Lazy deploy to all regions
for regions in `aws ec2 describe-regions --query Regions[*].RegionName --output text`; do
  AWS_REGION=$regions cdk deploy --require-approval never
done
