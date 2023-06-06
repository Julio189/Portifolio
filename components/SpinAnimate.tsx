import { motion } from "framer-motion"


const SpinAnimate = () => {
  return (
    <motion.span 
    initial={{translateX:('-50%'), translateY:('-50%'),rotate:0}}
    animate={{translateX:('-50%'), translateY:('-50%'), rotate:360}}
    transition={{duration:2, repeat: Infinity , ease: "linear"}}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 w-full h-full rounded-[50%] border-t-2 border-x-[#20bbf8] border-y-[#112e42] border-b-2 border-l-2 border-r-2"></motion.span>
  )
}

export default SpinAnimate
