import { useEffect, useRef } from "react";
import {createPortal} from "react-dom";

const Modal = ({children}) => { // we distructured it otherwise its (props)
        const elRef = useRef(null); // elRef = element reference
        if(!elRef.current){
            elRef.current = document.createElement('div');
        }

        useEffect(()=> {
            const modalRoot = document.getElementById("modal");
            modalRoot.appendChild(elRef.current);
            return () => modalRoot.removeChild(elRef.current); // resolve memory leak issue by removing the child after running once.
        }, []); // [] means run only once

        return createPortal(<div>{children}</div>, elRef.current); // without distructring it would be {props.children}
}

export default Modal;