import React from 'react';
import { motion } from 'framer-motion';

import selloCera from '../assets/sello-cera-crema.png';
import tarjetaCafe from '../assets/tarjeta-cafe-con-relieve.png';
import tarjetaCrema from '../assets/tarjeta-crema-con-relieve-circular.png';
import angel from '../assets/angel.png';

const History = () => {
    return (
        <section className="relative w-full mx-auto py-24 px-2 sm:px-4 flex flex-col items-center mb-36">

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

                    <h2 style={{ fontFamily: "'Great Vibes', cursive, serif" }} className="text-xl md:text-2xl mb-2">Nuestra Historia</h2>

                    <div className="space-y-3 sm:space-y-4 text-[11px] sm:text-[11px] md:text-sm tracking-widest px-1 sm:px-2 leading-tight sm:leading-relaxed opacity-90">
                        <p>
                            Nos conocimos cuando ninguno buscaba<br />nada y, aun así, nos encontramos todo.<br />
                            Crecimos de la mano: amistades,<br />proyectos, retos y sueños que se<br />volvieron uno. En cada estación,<br />elegimos volver a elegirnos.
                        </p>
                        <p>
                            Ahora queremos celebrar con ustedes el<br />inicio de nuestra nueva aventura.<br />
                            Gracias por su apoyo, por las historias<br />compartidas y por los buenos deseos.<br />
                            Los esperamos para brindar, bailar y<br />decir juntos: ¡sí, aceptamos!
                        </p>
                        <p className="mt-6">
                            —David y Lia.
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
                                <p>5:00 PM</p>
                                <p>COCTEL</p>
                                <div className="w-20 sm:w-28 h-[1px] bg-[#4a3b32] mx-auto mt-1 sm:mt-1.5 opacity-80"></div>
                            </div>

                            <div>
                                <p>6:00 PM</p>
                                <p>ENTRADA DE NOVIOS</p>
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
