import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
    const [formData, setFormData] = useState({ name: '', attendance: 'yes', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <section className="py-20 px-4 max-w-lg mx-auto" id="rsvp">
            <h2 className="text-4xl font-serif text-sage-dark text-center mb-8">Confirmar Asistencia</h2>

            {submitted ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center p-8 bg-white/50 rounded-lg border border-gold/30"
                >
                    <p className="text-xl font-serif text-gray-800">¡Gracias por confirmar!</p>
                    <p className="text-gray-600 mt-2">Nos hace mucha ilusión verte.</p>
                </motion.div>
            ) : (
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label className="block text-sm font-serif uppercase tracking-wider text-gray-500 mb-2">Nombre Completo</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-gray-300 focus:border-gold outline-none py-2 text-lg font-serif"
                            placeholder="Ej. Juan Pérez"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-serif uppercase tracking-wider text-gray-500 mb-2">¿Asistirás?</label>
                        <div className="flex gap-8 mt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="yes"
                                    checked={formData.attendance === 'yes'}
                                    onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                                    className="accent-gold w-5 h-5"
                                />
                                <span className="font-serif">Sí, allí estaré</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="attendance"
                                    value="no"
                                    checked={formData.attendance === 'no'}
                                    onChange={e => setFormData({ ...formData, attendance: e.target.value })}
                                    className="accent-gold w-5 h-5"
                                />
                                <span className="font-serif">Lo siento, no podré</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-serif uppercase tracking-wider text-gray-500 mb-2">Mensaje (Opcional)</label>
                        <textarea
                            className="w-full bg-transparent border-b border-gray-300 focus:border-gold outline-none py-2 text-lg font-serif resize-none"
                            rows={3}
                            placeholder="Déjanos un mensaje..."
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sage-dark text-white py-4 font-serif text-lg tracking-widest hover:bg-opacity-90 transition-colors mt-4"
                    >
                        ENVIAR
                    </button>
                </motion.form>
            )}
        </section>
    );
}
