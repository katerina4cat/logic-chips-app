import useOutside from "../../hooks/useOutside";
import cl from "./Modal.module.scss";

interface ModalReq extends React.HTMLAttributes<HTMLDivElement> {
    setOpenedRef?: React.MutableRefObject<(e: boolean) => void>;
    OpenedRef?: React.MutableRefObject<boolean>;
    Showed?: boolean;
}

const Modal: React.FC<ModalReq> = (props) => {
    const [ref, IsShow, setIsShow] = useOutside(
        props.Showed != undefined ? props.Showed : false
    );
    if (props.setOpenedRef) props.setOpenedRef.current = setIsShow;
    if (props.OpenedRef) props.OpenedRef.current = IsShow;
    return (
        <div
            className={cl.Modal}
            style={{
                display: IsShow ? "flex" : "none",
            }}
        >
            <div
                ref={ref}
                {...props}
                className={`${cl.ModalWindow} ${props.className}`}
            />
        </div>
    );
};

export default Modal;
