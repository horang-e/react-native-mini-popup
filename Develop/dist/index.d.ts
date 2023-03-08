/// <reference types="react" />
export declare type SwalProps = {
    swal: boolean;
    setSwal: (open: boolean) => void;
    text: string;
    backgroundcolor?: string;
    color?: string;
    positionFromBottom?: number;
    fontsize?: number;
    touchOutSideClose?: boolean;
    duration?: number;
    textStyle?: {};
    button?: boolean;
    btnStyle?: {};
    btnFunction?: () => void;
    popup?: boolean;
};
declare const Swal: ({ swal, setSwal, text, backgroundcolor, color, positionFromBottom, fontsize, touchOutSideClose, duration, textStyle, button, btnStyle, btnFunction, popup, }: SwalProps) => JSX.Element;
export default Swal;
//# sourceMappingURL=index.d.ts.map