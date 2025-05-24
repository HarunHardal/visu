'use client'

import { useEffect } from "react";
import { usePathname } from 'next/navigation'

const ScrollToTop =()=>{
    const pathName = usePathname();

    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"auto"})
    },[pathName]);

    return null
}

export default ScrollToTop;