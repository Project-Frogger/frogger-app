import { motion } from "framer-motion";


const MotionHoc = ( Component ) => {
  return function HOC() {
    return (
      <motion.div
        initial={ { y: 600 } }
        animate={ { 
          y: 0,
          transition: { duration: 0.6, type: "spring" }  
        } }
        exit= { {
          y: -600,
          transition: { duration: 0.6, type: "spring", ease: "easeInOut" }
        } }
      >
        <Component />
      </motion.div>
    )
  }
}

export default MotionHoc;
