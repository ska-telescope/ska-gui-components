import React from 'react';
export interface AuthProviderProps {
  MSENTRA_CLIENT_ID: string;
  MSENTRA_AUTHORITY: string;
  MSENTRA_REDIRECT_URI: string;
  children?: React.ReactElement;
}
export declare const AuthProvider: ({
  MSENTRA_CLIENT_ID,
  MSENTRA_AUTHORITY,
  MSENTRA_REDIRECT_URI,
  children,
}: AuthProviderProps) => React.JSX.Element;
