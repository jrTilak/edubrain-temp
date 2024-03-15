import { useEffect, useState } from "react";

export const useInnerSize = () => {
    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    useEffect(()=>{
        window.addEventListener(("resize"),()=>{
            setSize({
                height: window.innerHeight,
        width: window.innerWidth
            });
        })
    })
    return size;
}