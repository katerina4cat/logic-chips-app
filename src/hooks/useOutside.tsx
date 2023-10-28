import { useEffect, useRef, useState } from "react";

function useOutside(
    isVisible: boolean = false
): [
    React.MutableRefObject<any>,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
] {
    const [IsShow, setIsShow] = useState(isVisible);
    const ref = useRef<any>(null);
    const handleClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target))
            setIsShow(false);
    };
    useEffect(() => {
        document.addEventListener("click", handleClick, true);
        document.addEventListener("contextmenu", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    });
    return [ref, IsShow, setIsShow];
}

export default useOutside;
