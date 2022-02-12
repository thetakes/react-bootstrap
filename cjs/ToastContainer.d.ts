import * as React from 'react';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
export declare type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
export interface ToastContainerProps extends BsPrefixProps, React.HTMLAttributes<HTMLElement> {
    position?: ToastPosition;
}
declare const ToastContainer: BsPrefixRefForwardingComponent<'div', ToastContainerProps>;
export default ToastContainer;
