import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const QAItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-stone-200 rounded-lg overflow-hidden bg-white/80 shadow-sm transition-all duration-300 hover:shadow-md">
            <button
                onClick={onClick}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none bg-inherit"
            >
                <span className="text-xl text-stone-800 font-serif font-medium pr-8">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-stone-500 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-stone-500 flex-shrink-0" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 text-stone-600 leading-relaxed font-serif border-t border-stone-100 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    // Independent state for each item or singular open state?
    // "todos cerrados por default" implies they start closed.
    // The prompt says "estos componentes colapsables", usually users like one open at a time or multiple.
    // I'll implement independent opening as it's more flexible, but default all closed.
    // To do that, I can use an array of open indices or just a set, or keep it simple with just one open at a time if that's preferred for "accordion" style.
    // Given the "AnimatePresence", let's do one open at a time for that clean accordion feel, or toggle.
    // Actually, simple toggle per item is fine.

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "¿Puedo llevar acompañante?",
            answer: "Cada invitación incluye un +1. Por favor, indícalo en el formulario con su nombre y apellido. Si sois más de 1 o una familia, no hay problema, añadidlo en el formulario."
        },
        {
            question: "¿Habrá parking disponible?",
            answer: "Sí, el Rancho L86 cuenta con amplio estacionamiento y servicio de valet parking para la comodidad de todos nuestros invitados."
        },
        {
            question: "¿Qué código de vestimenta debo seguir?",
            answer: "El código de vestimenta es Formal. Les sugerimos traje para los caballeros y vestido largo o de cóctel para las damas."
        },
        {
            question: "¿Puedo tomar fotos durante la ceremonia?",
            answer: "Sí, pueden tomar fotos. Sin embargo, les pedimos respetar la solemnidad de la ceremonia religiosa y evitar obstruir la vista de los fotógrafos oficiales."
        }
    ];

    return (
        <section className="py-20 px-6 max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                    <HelpCircle className="w-8 h-8 text-stone-600" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-sage-dark italic">
                    Preguntas frecuentes
                </h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <QAItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
