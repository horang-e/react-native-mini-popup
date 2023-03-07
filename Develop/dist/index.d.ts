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
};
declare const Swal: ({ swal, setSwal, text, backgroundcolor, color, positionFromBottom, fontsize, touchOutSideClose, duration, }: SwalProps) => JSX.Element;
export default Swal;
//# sourceMappingURL=index.d.ts.map