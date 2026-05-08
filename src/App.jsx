import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from './components/Envelope';
import { Heart } from 'lucide-react';
const heroImage = '/portada-lia-david-principal.webp';

const History = lazy(() => import('./components/History'));
const CountdownSecondary = lazy(() => import('./components/CountdownSecondary'));
const Locations = lazy(() => import('./components/Locations'));
const DressCode = lazy(() => import('./components/DressCode'));
const Gifts = lazy(() => import('./components/Gifts'));
const RSVP = lazy(() => import('./components/RSVP'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <>
      <Envelope onOpen={() => setContentVisible(true)} />

      {contentVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen pb-6 overflow-x-hidden bg-[url('/cream-paper.png')]"
        >
          {/* Hero Section - Full Screen Image */}
          <header className="h-screen relative overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content over the image */}
            <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-0 font-semibold mt-32 text-white tracking-[0.2em] text-sm uppercase drop-shadow-lg"
              >
                Estás invitado a la boda de
              </motion.p>
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="font-semibold text-6xl md:text-8xl font-serif text-white mb-4 drop-shadow-2xl"
              >
                Lia <span className="text-4xl align-middle mx-2">&</span> David
              </motion.h1>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="font-semibold absolute bottom-0 mb-24 flex flex-col md:flex-row gap-6 md:gap-12 text-white font-serif text-lg"
              >
                <div className="flex items-center gap-2 drop-shadow-lg">
                  <span>3 de Octubre, 2026</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 animate-bounce"
              >
                <Heart className="w-6 h-6 text-white fill-current drop-shadow-lg" />
              </motion.div>
            </div>
          </header>

          <Suspense fallback={null}>
            <History />
            <CountdownSecondary />
            <Locations />
            <DressCode />
            <Gifts />
            <RSVP />
            <FAQ />
          </Suspense>

          <footer className="text-center py-0 text-gray-400 text-sm font-serif">
            <p>Lia & David • 2026</p>
          </footer>
        </motion.div>
      )}
    </>
  );
}

export default App;
