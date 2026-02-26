import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from './Layout';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const questions = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
        { q: t('faq.q5'), a: t('faq.a5') }
    ];

    return (
        <section className="section-padding bg-ivory">
            <div className="container-editorial max-w-4xl">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-sm tracking-widest uppercase text-gold mb-4 block">
                            {t('faq.tag')}
                        </span>
                        <h2 className="editorial-subheading text-foreground">
                            {t('faq.title_1')}<span className="italic">{t('faq.title_2')}</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="space-y-4">
                    {questions.map((faqItem, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="border-b border-muted/20">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                                >
                                    <span className="font-medium text-lg text-foreground group-hover:text-gold transition-colors pr-8">
                                        {faqItem.q}
                                    </span>
                                    <div className={`p-2 rounded-full border border-muted/20 bg-background transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-gold/10 border-gold/30' : ''}`}>
                                        <ChevronDown size={18} className={openIndex === index ? 'text-gold' : 'text-muted'} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 text-muted font-light leading-relaxed">
                                                {faqItem.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
