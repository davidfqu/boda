import React from 'react';
import { motion } from 'framer-motion';
import tarjetaDressCode from '../assets/tarjeta-crema-con-relieve-circular.png';
import parejaDibujo from '../assets/pareja-dibujo.png';
import tarjetaAdultos from '../assets/tarjeta-ovalada-verde-gris.png';
import angelDibujo from '../assets/angel-dibujo.png';
import selloCera from '../assets/sello-cera-crema.png';

const DressCode = () => {
    return (
        <section className="w-full pt-16 pb-64 px-4 flex justify-center items-center bg-[#FDFCF8] overflow-hidden">
            {/* 
        Container with fixed aspect ratio to maintain relative positions 
        Aspect ratio ~ 0.8 (e.g., 400x500) to match the vertical collage feel
      */}
            <div className="relative w-full max-w-md aspect-[4/5]">

                {/* 1. Photo Top Right (Behind Dress Code) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-[0%] right-[0%] w-[45%] aspect-[3/4] bg-gray-200 shadow-md rotate-3 border-4 border-white flex items-center justify-center z-0"
                >
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden">
                        {/* Placeholder content */}
                        <span className="text-[10px] text-gray-500 font-serif text-center px-1">Foto B&N</span>
                    </div>
                </motion.div>


                {/* 2. Dress Code Card (Main Top Left) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-[5%] left-[-10%] w-[95%] z-10"
                >
                    <img src={tarjetaDressCode} alt="Fondo Tarjeta" className="w-full h-auto drop-shadow-2xl" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#5A5A40] pl-[12%] pr-[15%] py-[15%]">
                        <img src={parejaDibujo} alt="Pareja" className="w-[30%] h-auto mb-[0%] opacity-90" />

                        <h2 className="font-serif text-[clamp(10px,4vw,20px)] mb-[2%] italic leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Código de Vestimenta
                        </h2>

                        <p className="uppercase tracking-widest text-[clamp(8px,2.5vw,12px)] mb-[5%] font-semibold">
                            Formal
                        </p>

                        <div className="font-serif italic text-[clamp(9px,3vw,14px)] space-y-[2%] mb-[8%] leading-tight">
                            <p>Mujeres: Vestido Largo</p>
                            <p>Hombres: Traje</p>
                        </div>

                        <button className="group text-[clamp(8px,2.5vw,11px)] uppercase tracking-widest border-b border-[#5A5A40] pb-0.5 hover:text-black hover:border-black transition-all">
                            Ver Ideas <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </motion.div>


                {/* 3. Photo Bottom Left (Behind Adults Only) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-[0%] left-[0%] w-[45%] aspect-square bg-gray-200 shadow-md -rotate-2 border-4 border-white flex items-center justify-center z-0"
                >
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden">
                        {/* Placeholder content */}
                        <span className="text-[10px] text-gray-500 font-serif text-center px-1">Foto B&N</span>
                    </div>
                </motion.div>

                {/* 4. Adults Only Card (Bottom Right) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-[-30%] right-[-7%] w-[80%] z-20"
                >
                    {/* Wax Seal */}
                    <div className="absolute -top-[2%] left-[50%] transform -translate-x-1/2 z-30 drop-shadow-md w-[20%]">
                        <img src={selloCera} alt="Sello" className="w-full h-auto" />
                    </div>

                    <img src={tarjetaAdultos} alt="Fondo Adultos" className="w-full h-auto drop-shadow-xl transform rotate-2" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#5A5A40] p-[10%] transform rotate-2">
                        <h3 className="uppercase tracking-widest text-[clamp(14px,2.5vw,13px)] font-semibold mb-[3%] mt-[3%]">
                            Solo Adultos
                        </h3>

                        <p className="font-serif italic text-[clamp(12px,2.8vw,10px)] mb-[5%] leading-relaxed opacity-90">
                            Nada de bendis plis…
                        </p>

                        <p className="font-handwriting italic text-[clamp(10px,4vw,4px)] mb-[5%] font-bold" style={{ fontFamily: 'Dancing Script, cursive' }}>
                            Gracias!
                        </p>

                        <img src={angelDibujo} alt="Angel" className="w-[40%] h-auto opacity-80" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default DressCode;
