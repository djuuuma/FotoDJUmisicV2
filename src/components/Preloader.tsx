import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(() => {
        return !sessionStorage.getItem('preloaderShown');
    });

    useEffect(() => {
        if (!isLoading) return;

        // Simuliramo učitavanje od 2.5 sekunde
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('preloaderShown', 'true');
        }, 2500);
        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999] bg-charcoal flex items-center justify-center text-cream"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="font-serif text-3xl md:text-5xl tracking-widest flex items-center gap-2">
                            <span className="italic mr-1 text-cream/70">Foto</span>
                            <span className="font-medium text-cream">Đumišić</span>
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            className="h-[1px] bg-gold"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
