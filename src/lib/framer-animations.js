export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

export const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const zoomOut = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const slideUp = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const slideDown = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const slideLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const slideRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const rotate = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { rotate: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

export const bounce = {
    hidden: { y: -10, opacity: 0 },
    visible: {
        y: [0, -10, 0],
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, ease: "easeInOut" },
    },
};

export const popIn = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export const popOut = {
    hidden: { scale: 1, opacity: 1 },
    visible: {
        scale: 0.5,
        opacity: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};
