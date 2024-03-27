import React, { useEffect, useRef } from 'react'
import { motion,useInView,useAnimation } from 'framer-motion'
function Reveal({children,index_Delay=0.2,dur=1,onlyOpacity=false}) {
    const ref =useRef(null);
    const isInview = useInView(ref, {once :true});
    const mainControls = useAnimation();
    const ops = {
        hidden: { opacity:0.1,y:50},
        intialonlyOpacity : {opacity:0 },
        visible : {opacity:1,y:0},
    }
    useEffect( ()=> {
        if(isInview)
        {
            mainControls.start("visible")
        }
    },[isInview])
    return (
        <div ref={ref}  >
            <motion.div 
                variants={
                    ops
                }
                initial={ onlyOpacity ? "intialonlyOpacity" : "hidden"}
                animate={mainControls}
                transition={ {duration:dur, delay: index_Delay}}
            >
                {children}
            </motion.div>
        </div>
    )
}
export default Reveal