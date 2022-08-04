import * as React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name: string, params: string) {
  navigationRef.current?.navigate(name, params);
}