import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import envelopeVideo from '../assets/Video_De_Sobre_Abriendose.mp4';

export default function Envelope({ onOpen }) {
    const [isVisible, setIsVisible] = useState(true);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const hasOpened = sessionStorage.getItem('envelopeOpened');
        if (hasOpened) {
            // setIsVisible(false);
            // onOpen();
        }
    }, [onOpen]);

    const handleVideoClick = () => {
        if (isPlaying || !videoRef.current) return;

        setIsPlaying(true);
        videoRef.current.play();
        sessionStorage.setItem('envelopeOpened', 'true');

        setTimeout(() => {
            setIsVisible(false);
            onOpen();
        }, 3000); // 3 seconds delay
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 w-screen h-[100dvh] z-50 bg-black flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <video
                        ref={videoRef}
                        src={`${envelopeVideo}#t=0.001`}
                        className="w-full h-full object-cover scale-[1.17] cursor-pointer origin-center"
                        playsInline
                        preload="metadata"
                        onClick={handleVideoClick}
                        muted // Muted needed for potential autoplay policies, though we are clicking.
                    />

                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <p className="text-white/80 font-serif text-xl tracking-widest animate-pulse mt-112">
                                Haz click para abrir
                            </p>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

