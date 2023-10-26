import useOutside from "../../hooks/useOutside";
import cl from "./Modal.module.scss";

interface ModalReq extends React.HTMLAttributes<HTMLDivElement> {
    setOpenedRef: React.MutableRefObject<(e: boolean) => void>;
}

const Modal: React.FC<ModalReq> = (props) => {
    const [ref, IsShow, setIsShow] = useOutside(false);
    props.setOpenedRef.current = setIsShow;
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
