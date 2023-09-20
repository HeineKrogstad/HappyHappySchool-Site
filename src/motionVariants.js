export const globalVariants = {
    hiddenText: { opacity: 0 },
    visibleText: { opacity: 1 },
    hiddenVector: { pathLength: 0  },
    visibleVector: { pathLength: 1 },
    hiddenBlock: { opacity: 0, x: -50 },
    visibleBlock: custom => ( { opacity: 1, x: 0, transition: { duration: 1, delay: custom * 0.2 } } ),
    hiddenVerticalBlock: { opacity: 0, y: 50 },
    visibleVerticalBlock: { opacity: 1, y: 0 }
}