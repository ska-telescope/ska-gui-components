import React from 'react';
import Children from '../../utils/types/types';
export interface FooterProps {
    ariaDescription?: string;
    ariaTitle?: string;
    children?: Children;
    copyrightFunc?: Function;
    testId?: string;
    version?: string;
    versionTooltip?: string;
}
export declare function Footer({ ariaDescription, ariaTitle, children, copyrightFunc, testId, version, versionTooltip, }: FooterProps): React.JSX.Element;
export default Footer;
