import Children from '../../utils/types/types';
export interface SKAOBackdropProps {
    children?: Children;
    open: boolean;
    visible?: boolean;
}
export declare function SKAOBackdrop({ children, open, visible }: SKAOBackdropProps): JSX.Element;
export default SKAOBackdrop;
