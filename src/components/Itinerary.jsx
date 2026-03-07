import { motion } from 'framer-motion';
import { Heart, Wine, Church, Martini, Utensils, Music, PartyPopper } from 'lucide-react';

const events = [
    {
        time: '17:00',
        title: 'Llegada de invitados',
        description: 'Recepción y bienvenida en la finca',
        icon: Heart
    },
    {
        time: '17:30',
        title: 'Welcome Drink',
        description: 'Cóctel de bienvenida mientras esperamos',
        icon: Wine
    },
    {
        time: '18:00',
        title: 'Ceremonia',
        description: 'El momento más especial del día',
        icon: Church
    },
    {
        time: '19:00',
        title: 'Cóctel',
        description: 'Aperitivos y bebidas en los jardines',
        icon: Martini
    },
    {
        time: '21:00',
        title: 'Banquete',
        description: 'Cena y celebración',
        icon: Utensils
    },
    {
        time: '00:00',
        title: 'Fiesta',
        description: '¡A bailar hasta el amanecer!',
        icon: Music
    },
    {
        time: '03:00',
        title: 'Fin de fiesta',
        description: 'Despedida y buenos recuerdos',
        icon: PartyPopper
    },
];

export default function Itinerary() {
    return (
        <section className="py-20 bg-cream relative overflow-hidden">
            {/* Decorative top divider if needed, or simple spacing */}

            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <img
                            src="/images/itinerary-illustration.png"
                            alt="Ilustración Boda"
                            className="mx-auto h-48 md:h-64 object-contain"
                        />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl text-sage-dark font-serif mb-4"
                    >
                        Programa del día
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-600 font-serif text-lg"
                    >
                        Lo que tenemos preparado para vosotros
                    </motion.p>
                </div>

                {/* Timeline Section */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-[31px] top-4 bottom-4 w-px bg-sage-dark/20"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-6 md:gap-10 relative"
                            >
                                {/* Icon Marker */}
                                <div className="relative z-10 shrink-0">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-sage/20 flex items-center justify-center shadow-sm">
                                        <event.icon className="w-6 h-6 md:w-7 md:h-7 text-sage-dark stroke-[1.5]" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-2 pb-2">
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                        <span className="bg-sage-dark text-white text-xs font-bold px-3 py-1 rounded inline-block w-fit tracking-wider">
                                            {event.time}
                                        </span>
                                        <h3 className="text-2xl text-gray-800 font-serif">
                                            {event.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 font-serif italic text-lg leading-relaxed border-l-2 border-gold/30 pl-4 md:border-none md:pl-0">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
