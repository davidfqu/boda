import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import tarjetaCafe from '../assets/tarjeta-cafe-sin-relieve.png';
import monoCrema from '../assets/mono-crema-horizontal.png';
import tarjetaHueso from '../assets/tarjeta-hueso-sin-relieve.png';
import floresDibujo from '../assets/flores-dibujo.png';

export default function Gifts() {
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section className="py-20 px-4 w-full max-w-lg mx-auto flex flex-col items-center justify-center relative min-h-[600px] overflow-hidden">

            {/* Introductory Text and Icon */}
            <div className="flex flex-col items-center text-center mb-32 px-6 animate-fade-in text-[#4a3b32]">
                <div className="mb-2 opacity-90 transform hover:scale-110 transition-transform duration-500">
                    <img src={floresDibujo} alt="Flowers" className="w-20 h-20 object-contain" />
                </div>
                <p className="font-serif text-sm leading-relaxed italic">
                    Nos llena de emoción compartir este día con ustedes! Para nosotros, el regalo es que nos acompañen. Si quisieran hacernos un regalo adicional, les dejamos los datos.
                </p>
            </div>

            {/* Container for the composition to keep them relative to each other */}
            <div className="relative w-full max-w-[320px] mx-auto ml-30 md:ml-32 mt-10">

                {/* Left Photo (Absolute positioning behind the card, top-left) */}
                <div className="absolute z-0 -left-26 md:-left-26 -top-32 transform -rotate-6 w-55 md:w-48 shadow-lg p-2 bg-[#fdfbf7]">
                    {/* Placeholder image that simulates printed photography */}
                    <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
                        <img
                            src={tarjetaHueso}
                            alt="Photography Placeholder"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                </div>

                {/* Main Brown Card */}
                <div className="relative z-10 w-full drop-shadow-2xl flex flex-col items-center">
                    {/* The card background */}
                    <div className="relative w-full pb-10 pt-8 px-6 text-[#faecd1] flex flex-col items-center">

                        <div
                            className="absolute inset-0 bg-cover bg-center -z-10 rounded-sm shadow-inner"
                            style={{ backgroundImage: `url(${tarjetaCafe})` }}
                        />

                        <h2 className="font-serif text-3xl md:text-4xl italic mb-0 mt-1 tracking-wider">Mesa de Regalos</h2>

                        {/* The ribbon / bow */}
                        <div className="relative w-[121%] -mx-[7.5%] -mt-32 -mb-32 flex justify-center items-center pointer-events-none">
                            <img src={monoCrema} alt="Bow" className="w-full h-auto drop-shadow-xl" />
                        </div>

                        <div className="space-y-6 w-full font-serif text-center flex flex-col items-center tracking-widest">
                            {/* Department Store Section */}
                            <div className="flex flex-col items-center">
                                <button className="border border-[#faecd1] rounded-full px-4 mt-2 py-1.5 text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#faecd1] hover:text-[#4a3b32] transition-colors duration-300">
                                    Amazon →
                                </button>
                                <button className="border border-[#faecd1] rounded-full px-4 mt-2 py-1.5 text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#faecd1] hover:text-[#4a3b32] transition-colors duration-300">
                                    Liverpool →
                                </button>
                            </div>

                            {/* Envelope Section */}
                            <div className="pt-2 flex flex-col items-center">

                                <p className="uppercase text-[12px] md:text-xs font-medium mb-2">Efectivo</p>
                                <p className="text-[12px] md:text-[12px] opacity-70 leading-relaxed text-center mb-0 italic">
                                    Si deseas hacernos un presente en efectivo, contaremos con mesa de sobres el día del evento.
                                </p>
                            </div>

                            {/* Bank Transfer Section */}
                            <div className="w-full flex flex-col items-center">
                                <p className="uppercase text-[12px] mt-0 mb-5 font-medium opacity-80 tracking-[0.2em]">Depósito</p>

                                {/* Minimalist Credit Card Surround */}
                                <div
                                    onClick={() => handleCopy('4213166173255880', 'card')}
                                    className="relative w-full max-w-[280px] aspect-[1.58/1] rounded-2xl p-6 mb-8 flex flex-col justify-between border border-[#faecd1]/20 bg-gradient-to-br from-[#faecd1]/15 to-[#faecd1]/5 shadow-2xl backdrop-blur-sm overflow-hidden group cursor-pointer transition-transform active:scale-95"
                                >
                                    {/* Light effect */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#faecd1]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#faecd1]/10 transition-colors duration-500" />

                                    {/* Chip & Brand */}
                                    <div className="flex justify-between items-start relative z-10">
                                        <div className="w-10 h-7 rounded-lg bg-gradient-to-br from-[#faecd1]/20 to-[#faecd1]/5 border border-[#faecd1]/20 shadow-inner flex items-center justify-center">
                                            <div className="grid grid-cols-2 grid-rows-2 w-full h-full p-1 opacity-20">
                                                <div className="border-r border-b border-[#faecd1]" />
                                                <div className="border-b border-[#faecd1]" />
                                                <div className="border-r border-[#faecd1]" />
                                                <div />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] font-bold italic opacity-60 uppercase tracking-[0.2em]">HSBC</span>
                                            {copiedId === 'card' && (
                                                <span className="text-[8px] text-[#faecd1] font-sans mt-0.5 animate-pulse uppercase tracking-wider">Copiado!</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Number */}
                                    <div className="flex flex-col items-center relative z-10 py-2">
                                        <p className="text-sm md:text-xl font-mono tracking-[0.12em] text-[#faecd1] drop-shadow-md">
                                            4213 1661 7325 5880
                                        </p>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="flex justify-between items-end relative z-10">
                                        <div className="flex flex-col items-start">
                                            <span className="text-[7px] uppercase opacity-40 tracking-[0.2em] mb-1">Titular</span>
                                            <span className="text-[11px] uppercase tracking-[0.1em] font-light">David Quinonez Uribe</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {copiedId === 'card' ? <Check size={12} className="opacity-60" /> : <Copy size={12} className="opacity-40 group-hover:opacity-60 transition-opacity" />}

                                        </div>
                                    </div>
                                </div>

                                <div className="text-[11px] md:text-xs space-y-1 text-center opacity-60 font-light tracking-[0.15em] mb-4">
                                    <button
                                        onClick={() => handleCopy('1234578989', 'cuenta')}
                                        className="flex items-center justify-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity w-full"
                                    >
                                        <span className="text-[9px] opacity-70 uppercase tracking-tighter">No. de cuenta:</span>
                                        <span className="font-medium">1234578989</span>
                                        {copiedId === 'cuenta' ? <Check size={10} /> : <Copy size={10} className="opacity-0 group-hover:opacity-50 transition-opacity" />}
                                    </button>
                                    <button
                                        onClick={() => handleCopy('09876543211234567', 'clabe')}
                                        className="flex items-center justify-center gap-2 group cursor-pointer hover:opacity-100 transition-opacity w-full"
                                    >
                                        <span className="text-[9px] opacity-70 uppercase tracking-tighter">CLABE:</span>
                                        <span className="font-medium">09876543211234567</span>
                                        {copiedId === 'clabe' ? <Check size={10} /> : <Copy size={10} className="opacity-0 group-hover:opacity-50 transition-opacity" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
