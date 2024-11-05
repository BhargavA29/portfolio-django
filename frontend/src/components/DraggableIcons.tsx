"use client"
import Image from "next/image"
import cursor from "../assets/icon1.png"
import lightning from "../assets/icon2.png"
import { motion } from "framer-motion"

const DraggableIcons = () => {
    return (
        <>
            <motion.div
                className="hidden md:block absolute left-[250px] top-[170px] z-50"
                drag
                dragMomentum={true}
                dragTransition={{ 
                    power: 0.3,      // Increased from 0.1 to 0.3 (300% increase)
                    timeConstant: 200
                }}
            >
                <Image
                    src={cursor}
                    height={170}
                    width={170}
                    alt="cursor"
                    className="select-none"
                    draggable="false"
                />
            </motion.div>

            <motion.div
                className="hidden md:block absolute right-[220px] top-[170px] z-50"
                drag
                dragMomentum={true}
                dragTransition={{ 
                    power: 0.3,      // Increased from 0.1 to 0.3 (300% increase)
                    timeConstant: 200
                }}
            >
                <Image
                    src={lightning}
                    height={120}
                    width={120}
                    alt="lightning"
                    className="select-none"
                    draggable="false"
                />
            </motion.div>
        </>
    )
}

export default DraggableIcons