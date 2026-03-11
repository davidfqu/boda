import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Datos de prueba temporales basados en la imagen
const mockGuests = [
    { id: 1, grupo: 1, nombre: 'David Quinonez', mensaje: '', contestada: 0, asistira: null },
    { id: 2, grupo: 1, nombre: 'Lia Camacho', mensaje: '', contestada: 0, asistira: null },
    { id: 3, grupo: 2, nombre: 'Barbara Uribe', mensaje: '', contestada: 0, asistira: null },
    { id: 4, grupo: 2, nombre: 'Oscar Quinonez', mensaje: '', contestada: 0, asistira: null },
    { id: 5, grupo: 2, nombre: 'Raul Quinonez', mensaje: '', contestada: 0, asistira: null },
    { id: 6, grupo: 3, nombre: 'Raul Uribe', mensaje: '', contestada: 0, asistira: null },
];

export default function RSVP() {
    const [searchQuery, setSearchQuery] = useState('');
    const [groupGuests, setGroupGuests] = useState(null);
    const [foundGuestId, setFoundGuestId] = useState(null);
    const [attendance, setAttendance] = useState({});
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setError('');
        const trimmedQuery = searchQuery.trim().toLowerCase();
        if (!trimmedQuery) return;

        const words = trimmedQuery.split(/\s+/);
        if (words.length < 2) {
            setError('Por favor ingresa tu nombre y apellido.');
            setGroupGuests(null);
            setFoundGuestId(null);
            return;
        }

        const foundGuest = mockGuests.find(g => {
            const guestName = g.nombre.toLowerCase();
            return words.every(word => guestName.includes(word));
        });

        if (foundGuest) {
            setFoundGuestId(foundGuest.id);
            const group = mockGuests.filter(g => g.grupo === foundGuest.grupo);
            setGroupGuests(group);

            const initialAttendance = {};
            group.forEach(g => {
                initialAttendance[g.id] = g.contestada === 1 ? (g.asistira === 1 ? 'yes' : g.asistira === 0 ? 'no' : null) : null;
            });
            setAttendance(initialAttendance);
        } else {
            setError('No se encontró al invitado. Por favor, asegúrate de escribir bien el nombre y apellido.');
            setGroupGuests(null);
            setFoundGuestId(null);
        }
    };

    const handleAttendanceChange = (id, value) => {
        setAttendance(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedGuests = groupGuests.map(g => {
            const isAttending = attendance[g.id] === 'yes' ? 1 : attendance[g.id] === 'no' ? 0 : null;

            const mockGuest = mockGuests.find(mg => mg.id === g.id);
            if (isAttending !== null && mockGuest.contestada !== 1) {
                mockGuest.contestada = 1;
                mockGuest.asistira = isAttending;
                if (g.id === foundGuestId && message.trim() !== '') {
                    mockGuest.mensaje = message;
                }
            }

            return mockGuest;
        });

        console.log('Form submitted:', { guests: updatedGuests });
        setSubmitted(true);
    };

    const resetSearch = () => {
        setGroupGuests(null);
        setFoundGuestId(null);
        setSearchQuery('');
        setAttendance({});
        setMessage('');
        setError('');
        setSubmitted(false);
    };

    return (
        <section className="py-2 px-4 max-w-2xl mx-auto" id="rsvp">
            <h2 className="text-4xl font-serif text-sage-dark text-center mb-8">Confirmar Asistencia</h2>

            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center p-10 bg-white/50 rounded-lg border border-gold/30 shadow-sm"
                    >
                        <p className="text-2xl font-serif text-gray-800 mb-4">¡Gracias por confirmar!</p>
                        <p className="text-gray-600 mb-8">Hemos recibido tu respuesta y mensaje de forma exitosa.</p>
                        <button
                            onClick={resetSearch}
                            className="text-sm font-serif uppercase tracking-wider text-sage-dark border-b border-sage-dark pb-1"
                        >
                            Volver al inicio
                        </button>
                    </motion.div>
                ) : !groupGuests ? (
                    <motion.form
                        key="search"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSearch}
                        className="bg-white/40 border border-gold/20 rounded-xl p-8 shadow-sm backdrop-blur-sm"
                    >
                        <div>
                            <label className="block text-sm font-serif uppercase tracking-wider text-gray-600 mb-4 text-center">
                                Ingresa tu nombre completo para buscar tu invitación
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    required
                                    className="flex-1 bg-white border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none py-3 px-4 text-lg font-serif rounded-md transition-all"
                                    placeholder="Ej. Lia Camacho"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-sage-dark text-white px-8 py-3 font-serif text-sm tracking-widest hover:bg-opacity-90 transition-colors rounded-md sm:w-auto w-full"
                                >
                                    BUSCAR
                                </button>
                            </div>
                            {error && <p className="text-red-500 text-sm mt-4 font-serif text-center">{error}</p>}
                        </div>
                    </motion.form>
                ) : (
                    <motion.form
                        key="rsvp-form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="flex justify-between items-center mb-6 px-2">
                            <h3 className="text-xl font-serif text-gray-700">Invitaciones de tu grupo</h3>
                            <button type="button" onClick={resetSearch} className="text-sm text-sage-dark underline font-serif hover:text-gold transition-colors">
                                Buscar otro nombre
                            </button>
                        </div>

                        <div className="space-y-4">
                            {groupGuests.map((guest, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={guest.id}
                                    className="bg-white/80 border border-gold/30 rounded-xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <h3 className="text-2xl font-serif text-sage-dark mb-4 capitalize">
                                        {guest.nombre}
                                        {guest.contestada === 1 && <span className="text-sm text-gray-400 ml-3 italic lowercase">(Ya contestada)</span>}
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        <label className={`flex flex-1 items-center gap-3 px-5 py-3 rounded-lg border transition-all ${attendance[guest.id] === 'yes' ? 'border-gold bg-gold/5' : 'border-gray-200 bg-gray-50/50'} ${guest.contestada === 1 ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}`}>
                                            <input
                                                type="radio"
                                                name={`attendance-${guest.id}`}
                                                value="yes"
                                                disabled={guest.contestada === 1}
                                                checked={attendance[guest.id] === 'yes'}
                                                onChange={() => handleAttendanceChange(guest.id, 'yes')}
                                                className="accent-gold w-4 h-4"
                                            />
                                            <span className="font-serif text-gray-800">Sí, asistiré</span>
                                        </label>
                                        <label className={`flex flex-1 items-center gap-3 px-5 py-3 rounded-lg border transition-all ${attendance[guest.id] === 'no' ? 'border-sage-dark bg-sage-dark/5' : 'border-gray-200 bg-gray-50/50'} ${guest.contestada === 1 ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}`}>
                                            <input
                                                type="radio"
                                                name={`attendance-${guest.id}`}
                                                value="no"
                                                disabled={guest.contestada === 1}
                                                checked={attendance[guest.id] === 'no'}
                                                onChange={() => handleAttendanceChange(guest.id, 'no')}
                                                className="accent-sage-dark w-4 h-4"
                                            />
                                            <span className="font-serif text-gray-800">No podré asistir</span>
                                        </label>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: groupGuests.length * 0.1 }}
                            className="bg-white/60 border border-gray-200 rounded-xl p-6 mt-8"
                        >
                            <label className="block text-sm font-serif uppercase tracking-wider text-sage-dark mb-3">Mensaje para nosotros nosotros (Opcional)</label>
                            <textarea
                                className="w-full bg-white border border-gray-300 focus:border-gold outline-none p-4 text-lg font-serif resize-none rounded-lg focus:ring-1 focus:ring-gold transition-all"
                                rows={3}
                                placeholder="Déjanos un mensaje, deseos o algún comentario..."
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (groupGuests.length * 0.1) + 0.1 }}
                            type="submit"
                            className="w-full bg-sage-dark text-white py-4 rounded-lg font-serif text-lg tracking-widest hover:bg-opacity-90 hover:shadow-lg transition-all mt-6 uppercase"
                        >
                            Enviar Confirmación
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </section>
    );
}
