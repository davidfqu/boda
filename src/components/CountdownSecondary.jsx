import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/count-down-david-lia.jpeg';

const CountdownSecondary = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2026-10-03') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <section className="py-4 md:py-12 px-4 flex justify-center font-serif">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-4xl aspect-[4/5] md:aspect-[16/10] overflow-hidden flex items-end justify-center shadow-2xl"
            >
                <div className="absolute inset-0 overflow-hidden">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-[center_30%]"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />

                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute w-full bottom-0 left-0 pb-8 md:pb-12 pt-20">
                        <div className="flex items-center justify-center gap-1 md:gap-4 text-white">
                            {/* Days */}
                            <div className="flex flex-col items-center justify-center w-16 md:w-28">
                                <span className="text-4xl md:text-7xl font-light leading-none tracking-wider mb-1 md:mb-3">
                                    {String(timeLeft.days || 0).padStart(3, '0')}
                                </span>
                                <span className="text-xs md:text-lg font-light tracking-widest lowercase">
                                    días
                                </span>
                            </div>

                            <span className="text-3xl md:text-6xl font-light self-start mt-[-2px] md:mt-2 opacity-90">:</span>

                            {/* Hours */}
                            <div className="flex flex-col items-center justify-center w-16 md:w-28">
                                <span className="text-4xl md:text-7xl font-light leading-none tracking-wider mb-1 md:mb-3">
                                    {String(timeLeft.hours || 0).padStart(2, '0')}
                                </span>
                                <span className="text-xs md:text-lg font-light tracking-widest lowercase">
                                    hrs.
                                </span>
                            </div>

                            <span className="text-3xl md:text-6xl font-light self-start mt-[-2px] md:mt-2 opacity-90">:</span>

                            {/* Minutes */}
                            <div className="flex flex-col items-center justify-center w-16 md:w-28">
                                <span className="text-4xl md:text-7xl font-light leading-none tracking-wider mb-1 md:mb-3">
                                    {String(timeLeft.minutes || 0).padStart(2, '0')}
                                </span>
                                <span className="text-xs md:text-lg font-light tracking-widest lowercase">
                                    mins.
                                </span>
                            </div>

                            <span className="text-3xl md:text-6xl font-light self-start mt-[-2px] md:mt-2 opacity-90">:</span>

                            {/* Seconds */}
                            <div className="flex flex-col items-center justify-center w-16 md:w-28">
                                <span className="text-4xl md:text-7xl font-light leading-none tracking-wider mb-1 md:mb-3">
                                    {String(timeLeft.seconds || 0).padStart(2, '0')}
                                </span>
                                <span className="text-xs md:text-lg font-light tracking-widest lowercase">
                                    segs.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CountdownSecondary;
