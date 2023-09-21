import React from 'react';
import YouTube from 'react-youtube';
import "./VideoComponent.scss";
import homeIndicator from "../../assets/Home Indicator.png"
import Camera from "../../assets/camera.png"
import { motion} from 'framer-motion';
import { globalVariants } from "../../motionVariants";


const VideoComponent = () => {
    const videoId = 'se50viFJ0AQ';
    const opts = {
        width: '200',
        height: '430', 
    }
    return (
    <motion.div
        className="section-title"
        variants={globalVariants}
        initial={'hiddenVerticalBlock'}
        whileInView={'visibleVerticalBlock'}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.2, once: true }}
    >
        <YouTube className='video-wrapper' videoId={videoId} opts={opts} />
        <img className='home-indicator' alt='home' src={homeIndicator}/>
        <img className='camera' alt='home' src={Camera}/>
    </motion.div>  
    );
};

export default VideoComponent