import { motion } from 'framer-motion';
import cardBackground from '../assets/tarjeta-crema-con-relieve-en-esquinas.png';
import iglesiaDibujo from '../assets/iglesia-dibujo-removebg-preview.png';
import ranchoDibujo from '../assets/rancho-l86-dibujo-removebg-preview.png';

const LocationCard = ({ title, iconImage, time, locationName, mapUrl, image, link, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="flex flex-col items-center justify-center w-full"
        >
            <h3 className="text-[clamp(32px,5vw,46px)] md:text-5xl font-serif text-sage-dark italic tracking-wide mb-4 z-10">
                {title}
            </h3>

            <div
                className="relative w-full flex items-center justify-center drop-shadow-xl"
                style={{ aspectRatio: '1' }}
            >
                {/* Rotated background image to act as the horizontal card base */}
                <img
                    src={cardBackground}
                    alt="Fondo Tarjeta"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 object-fill"
                    style={{ width: '100%', height: '100%' }} // adjusted for 1.4 ratio
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 z-10 w-full h-full">
                    <div className="space-y-[3%] font-serif text-gray-700 opacity-90 mt-[1%]">
                        <p className="text-[clamp(14px,2.5vw,20px)] md:text-xl font-light tracking-widest uppercase">
                            {locationName}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-[clamp(14px,2.5vw,18px)]">
                            <span>{time}</span>
                        </div>
                    </div>

                    <div className="my-[1%] md:my-[4%] flex justify-center">
                        <img src={iconImage} alt={`Icono de ${title}`} className="h-48 w-auto md:h-20 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105 opacity-90" />
                    </div>

                    <div className="mt-1">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[clamp(10px,2vw,12px)] uppercase tracking-widest text-[#5A5A40] hover:text-black hover:font-bold transition-all font-light border-b border-transparent hover:border-black pb-0.5"
                        >
                            <span>IR AL MAPA</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Locations = () => {
    return (
        <section className="py-16 px-1 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-sage-dark mb-4">Detalles del Día</h2>
                    <p className="text-gray-500 italic">Todo lo que necesitas saber para acompañarnos</p>
                </motion.div>

                <div className="grid md:grid-cols-2 md:gap-16 max-w-5xl mx-auto">
                    <LocationCard
                        title="Ceremonia Religiosa"
                        iconImage={iglesiaDibujo}
                        time="15:00 hrs"
                        locationName="Parroquia De San Juan De Los Lagos"
                        image="https://images.unsplash.com/photo-1548625361-e87563c6c09d?q=80&w=2070&auto=format&fit=crop"
                        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.318428236113!2d-116.6025!3d31.8545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDUxJzE2LjIiTiAxMTbCsDM2JzA5LjAiVw!5e0!3m2!1sen!2smx!4v1635789000000!5m2!1sen!2smx"
                        link="https://goo.gl/maps/placeholder"
                        delay={0.2}
                    />

                    <LocationCard
                        title="Recepción"
                        iconImage={ranchoDibujo}
                        time="17:00"
                        locationName="Rancho L86"
                        image="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop"
                        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.0763967812297!2d-116.65757192358896!3d32.01257997399127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d8926978478491%3A0x643694002621021!2sRancho%20L-86%2C%20Hotel%20y%20Eventos!5e0!3m2!1sen!2smx!4v1707435000000!5m2!1sen!2smx"
                        link="https://maps.app.goo.gl/4Q3X2yZ5Z1Z1Z1Z1"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Locations;
