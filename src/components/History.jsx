import React from 'react';
import { motion } from 'framer-motion';

import selloCera from '../assets/sello-cera-crema.webp';
import tarjetaCafe from '../assets/tarjeta-cafe-con-relieve.webp';
import tarjetaCrema from '../assets/tarjeta-crema-con-relieve-circular.webp';
import angel from '../assets/angel.webp';

const History = () => {
    return (
        <section className="relative w-full mx-auto py-24 px-2 sm:px-4 flex flex-col items-center mb-30">

            {/* Brown Card Container */}
            <div className="relative w-full drop-shadow-2xl flex flex-col items-center mt-4">

                {/* Wax Seal Absolute top center */}
                <img
                    src={selloCera}
                    alt="Sello de Cera"
                    className="absolute -top-24 w-18 h-18 z-20 drop-shadow-xl"
                />

                {/* Background Brown Card Image */}
                <img
                    src={tarjetaCafe}
                    alt="Tarjeta Cafe"
                    className="w-full h-auto object-cover rounded-md scale-[1.35] sm:scale-[1.35]"
                />

                {/* Content over Brown Card */}
                <div className="absolute inset-0 flex flex-col items-center text-center p-8 pt-2 md:p-12 md:pt-2 text-[#e3dac9] font-serif -mt-4">

                    {/* Angel */}
                    <img src={angel} alt="Angel" className="w-12 h-22 opacity-90 object-contain" />

                    <h2 style={{ fontFamily: "'Great Vibes', cursive, serif" }} className="text-xl md:text-2xl mb-2">Queridos Invitados</h2>

                    <div className="space-y-3 sm:space-y-4 text-[11px] sm:text-[11px] md:text-sm tracking-widest px-1 sm:px-2 leading-tight sm:leading-relaxed opacity-90">
                        <p>
                            Han sido parte fundamental de <br />
                            nuestras vidas y de nuestra historia. <br />
                            Hoy queremos celebrar no solo nuestro <br />
                            amor, sino también la familia que <br />
                            estamos por comenzar, y nos llena de <br />
                            alegría saber que siguen siendo parte <br />
                            de este camino. <br />

                            Cada uno de ustedes ha influido en <br />
                            quienes somos y en lo que aspiramos <br />
                            a ser, por lo que su <br />
                            presencia en  este día tan <br />
                            especial significa mucho <br />
                            para nosotros. <br />

                            Gracias por acompañarnos y por <br />
                            ser parte de este momento que <br />
                            recordaremos toda la vida. <br />

                        </p>
                        <p className="mt-6">
                            —Lia y David.
                        </p>
                    </div>
                </div>

                {/* Cream Card Container Absolute bottom overlapping */}
                <div
                    className="absolute -bottom-56 md:-bottom-48 w-[105%] md:w-[85%] z-10 drop-shadow-xl flex items-center justify-center"
                    style={{ aspectRatio: '1.4' }}
                >

                    {/* Background Cream Card Image */}
                    <img
                        src={tarjetaCrema}
                        alt="Tarjeta Crema"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 scale-[1.3] sm:scale-[1.4] object-fill"
                        style={{ width: '60%', height: '70%' }}
                    />

                    {/* Content over Cream Card */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 sm:p-4 md:p-6 w-full h-full text-[#4a3b32] font-mono uppercase tracking-[0.15em] text-[9px] sm:text-[11px] md:text-xs font-bold z-10 leading-tight">

                        <div className="space-y-2 sm:space-y-2 mt-3">
                            <div>
                                <p>3:00 PM</p>
                                <p>CEREMONIA RELIGIOSA</p>
                                <div className="w-20 sm:w-28 h-[1px] bg-[#4a3b32] mx-auto mt-1 sm:mt-1.5 opacity-80"></div>
                            </div>
                            <div>
                                <p>4:30 PM</p>
                                <p>CEREMONIA CIVIL</p>
                                <div className="w-20 sm:w-28 h-[1px] bg-[#4a3b32] mx-auto mt-1 sm:mt-1.5 opacity-80"></div>
                            </div>
                            <div>
                                <p>5:00 PM</p>
                                <p>COCTEL</p>
                                <div className="w-20 sm:w-28 h-[1px] bg-[#4a3b32] mx-auto mt-1 sm:mt-1.5 opacity-80"></div>
                            </div>
                            <div>
                                <p>7:00 PM</p>
                                <p>CENA</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default History;
