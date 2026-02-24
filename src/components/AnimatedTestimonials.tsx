import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { FadeIn } from './Layout';
import { useLanguage } from '../contexts/LanguageContext';

interface Testimonial {
    id: number;
    name: string;
    source: string;
    content: string;
}

interface AnimatedTestimonialsProps {
    testimonials: Testimonial[];
    autoRotateInterval?: number;
}

export function AnimatedTestimonials({
    testimonials,
    autoRotateInterval = 6000,
}: AnimatedTestimonialsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();

    // Auto rotate testimonials
    useEffect(() => {
        if (autoRotateInterval <= 0 || testimonials.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, autoRotateInterval);

        return () => clearInterval(interval);
    }, [autoRotateInterval, testimonials.length]);

    if (testimonials.length === 0) return null;

    return (
        <section className="section-padding bg-ivory">
            <div className="container-editorial">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side: Heading and navigation */}
                    <div className="flex flex-col justify-center">
                        <FadeIn>
                            <div className="space-y-6">
                                <span className="text-sm tracking-widest uppercase text-gold mb-4 block">
                                    {t('testimonials.tag')}
                                </span>

                                <h2 className="editorial-subheading text-foreground">
                                    {t('testimonials.title_1')}
                                    <span className="italic">{t('testimonials.title_2')}</span>
                                </h2>

                                <p className="editorial-body max-w-[500px]">
                                    {t('testimonials.desc')}
                                </p>

                                <div className="flex items-center gap-3 pt-4">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`h-[3px] rounded-full transition-all duration-300 ${activeIndex === index
                                                ? 'w-10 bg-gold'
                                                : 'w-3 bg-muted/30'
                                                }`}
                                            aria-label={t('testimonials.view_btn') + ` ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right side: Testimonial cards */}
                    <FadeIn delay={0.2}>
                        <div className="relative min-h-[280px] md:min-h-[320px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 60 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -60 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="absolute inset-0"
                                >
                                    <div className="bg-background border border-muted/20 rounded-sm p-8 md:p-10 h-full flex flex-col">
                                        {/* Decorative quote */}
                                        <div className="mb-6">
                                            <Quote className="h-8 w-8 text-gold/30 rotate-180" />
                                        </div>

                                        {/* Quote content */}
                                        <div className="flex-1 mb-6">
                                            <p className="font-sans text-base md:text-lg font-light leading-relaxed text-foreground/80">
                                                "{testimonials[activeIndex].content}"
                                            </p>
                                        </div>

                                        {/* Gold separator line */}
                                        <div className="h-px w-16 bg-gold mb-6" />

                                        {/* Author */}
                                        <div>
                                            <h3 className="font-sans font-medium text-foreground">
                                                {testimonials[activeIndex].name}
                                            </h3>
                                            <p className="text-sm text-muted">
                                                {testimonials[activeIndex].source}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
