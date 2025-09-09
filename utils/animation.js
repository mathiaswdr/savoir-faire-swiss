
export const blurIn = {
    hidden: {
      opacity: 0,
      filter: "blur(50px)",
      transition: {
        duration: 2,
        type: "spring",
        ease: "easeInOut"
      }
    },
    show: {
      opacity: 1, 
      filter: "blur(0px)",
      transition: {
        duration: 2,
        type: "spring",
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      filter: "blur(50px)",
      transition: {
        duration: 2,
        type: "spring",
        ease: "easeInOut"
      }
    },
  }

export const blurInCompose = (duration, delay) =>  {



    return {
    hidden: {
      opacity: 0,
      filter: "blur(50px)",
      transition: {
        duration: duration,
        type: "spring",
        ease: "easeInOut"
      }
    },
    show: {
      opacity: 1, 
      filter: "blur(0px)",
      transition: {
        duration: duration,
        type: "spring",
        ease: "easeInOut",
        delay: delay ? delay : 0
      }
    },
    exit: {
      opacity: 0,
      filter: "blur(50px)",
      transition: {
        duration: duration,
        type: "spring",
        ease: "easeInOut"
      }
    },
  }
}

export const moveBottom = {
    hidden: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        type: "spring",
        ease: "easeInOut"
      }
    },
    show: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        ease: "easeInOut"
      }
    }
  }