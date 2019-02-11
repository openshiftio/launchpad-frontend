import {BackendPickerValue} from '../pickers/backend-picker/backend-picker';
import {Button, EmptyState, EmptyStateBody, Title} from '@patternfly/react-core';
import * as React from 'react';
import {RuntimeLoader} from '../loaders/enums-runtimes-loaders';


interface BackendOverviewProps {
  value: BackendPickerValue;
  onClick: () => void;
}


export function BackendOverview(props: BackendOverviewProps) {

  if (!props.value.runtime) {
    return (
      <EmptyState style={{margin: 'auto'}}>
        <Title size="lg">You can select a Backend for your custom application</Title>
        <EmptyStateBody>
          By selecting a bunch of capabilities (Http Api, Database, ...), you will be able to bootstrap the backend of your application in a few seconds...
        </EmptyStateBody>
        <Button variant="primary" onClick={props.onClick}>Select Backend</Button>
      </EmptyState>
    );
  }
  return (
    <div style={{margin: 'auto'}}>
      <RuntimeLoader id={props.value.runtime.id}>
        {runtime => (
            <EmptyState>
                <Title size="lg">Your Backend will run on {runtime!.name}</Title>
                <EmptyStateBody>
                   It will feature: {props.value.capabilities.filter(c => c.selected).map(c => c.id).join(', ')}
                </EmptyStateBody>
            </EmptyState>
        )}
      </RuntimeLoader>
    </div>
  );
}