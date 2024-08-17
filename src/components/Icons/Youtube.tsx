import * as React from 'react';
import { SVGProps } from 'react';
const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#FF0302"
      d="M23.498 5.81a3.266 3.266 0 0 0-.775-1.438 2.981 2.981 0 0 0-1.347-.835C19.5 3 12 3 12 3s-7.5 0-9.376.537c-.51.148-.974.436-1.347.835-.372.399-.64.895-.775 1.438C0 7.816 0 12 0 12s0 4.183.502 6.19c.136.543.403 1.04.775 1.438.373.4.837.687 1.347.835C4.5 21 12 21 12 21s7.5 0 9.376-.537c.51-.148.974-.436 1.347-.835.372-.399.64-.895.775-1.438C24 16.183 24 12 24 12s0-4.184-.502-6.19Z"
    />
    <path fill="#FEFEFE" d="M9 16V8l8 4-8 4Z" />
  </svg>
);
export default Youtube;
