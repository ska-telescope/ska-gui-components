declare module '@mui/material';

// types.d.ts
declare module '*.css' {
  const url: string;
  export default url;
}

/** Maps authored classNames to their CSS Modules -suffixed generated classNames. */
interface Mapping {
  [key: string]: string;
}
declare module '*.module.css' {
  const mapping: Mapping;
  export default mapping;
}
