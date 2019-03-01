import * as React from 'react';
import { Alert } from '@patternfly/react-core';
import { ClusterIcon, CodeIcon, GiftIcon } from '@patternfly/react-icons';
import { ExternalLink } from './external-link';

interface LaunchNextStepsProps {
  error?: any;
  links: { [x: string]: string | undefined };
}

export function LaunchNextSteps(props: LaunchNextStepsProps) {
  const landingPageLink = (props.links['GITHUB_CREATE'] || 'https://fabric8-launcher.github.io/application-creator-landingpage/')
    + '/blob/master/README.adoc';
  const repositoryLink = props.links['GITHUB_CREATE'] || 'https://github.com/fabric8-launcher/launcher-creator-frontend';
  const deploymentLink = props.links['OPENSHIFT_CREATE'] || 'https://manage.openshift.com/';
  return (
    <React.Fragment>
      {!props.error && (
        <React.Fragment>
          <Alert variant="success" title="Launch Success" aria-label="launch-success">Your application deployment has started</Alert>
          <h2>Follow your application delivery</h2>
          <p>You can follow your application deployment in your OpenShift Console</p>
          <ExternalLink href={deploymentLink}>
            <ClusterIcon /> OpenShift Console
          </ExternalLink>
          <h2>As soon as deployment is done, check out your new application capabilities</h2>
          <p>We prepared a set of examples to let you directly start playing with your new application.
            Those examples are there to get you started,
            soon it will be time for you to remove them and start developing your awesome application.</p>
          <ExternalLink href={landingPageLink}>
            <GiftIcon /> Check out your new Application
          </ExternalLink>
          <h2>Update your application using Continuous Delivery</h2>
          <p>We set up your application codebase in the GitHub repository you requested</p>
          <p>Your application is automatically configured to build and deploy on OpenShift with new commits.</p>
          <ExternalLink href={repositoryLink}>
            <CodeIcon /> Clone your new codebase
          </ExternalLink>
        </React.Fragment>
      )}
      {props.error && (
        <Alert variant="danger" title="Launch Error" aria-label="error-during-launch">
          <p>Holy guacamole... something weird happened, please reload the page to try again.</p>
          <p>{props.error.toString()}</p>
        </Alert>
      )}
    </React.Fragment>
  );
}