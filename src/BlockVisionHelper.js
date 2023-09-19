import { useInView} from "framer-motion"
import { useRef } from "react";

export const BlockVisibility = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return isInView;
};