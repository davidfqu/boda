import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
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

    const timerComponents = [];

    const timeUnits = [
        { label: 'Días', value: timeLeft.days },
        { label: 'hr', value: timeLeft.hours },
        { label: 'min', value: timeLeft.minutes },
        { label: 'seg', value: timeLeft.seconds },
    ];

    return (
        <section className="py-20 bg-[#f5f1eb] text-center font-serif">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl italic mb-4 font-normal text-[#8a9a5b]"
                >
                    Cuenta atrás
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg mb-12 uppercase tracking-widest text-[#8a9a5b]/70"
                >
                    Para el día más especial de nuestras vidas
                </motion.p>

                {/* Contador en una sola fila con separadores */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-0 max-w-3xl mx-auto"
                >
                    {timeUnits.map((unit, index) => (
                        <div key={unit.label} className="flex items-center">
                            {/* Unidad de tiempo */}
                            <div className="flex flex-col items-center justify-center px-6 md:px-10 py-4">
                                <span className="text-5xl md:text-7xl font-light text-[#5a5a5a] leading-none mb-2">
                                    {String(unit.value || 0).padStart(2, '0')}
                                </span>
                                <span className="text-sm md:text-lg text-[#b8a07e] font-light tracking-wide">
                                    {unit.label}
                                </span>
                            </div>

                            {/* Separador vertical (no mostrar después del último elemento) */}
                            {index < timeUnits.length - 1 && (
                                <div className="h-16 md:h-20 w-[1px] bg-[#b8a07e]/30"></div>
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Corazón decorativo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <div className="text-4xl text-[#b8a07e]">♥</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
