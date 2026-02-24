import React from 'react';
import { FadeIn } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
    const { t } = useLanguage();
    return (
        <div className="pt-20 bg-background text-foreground">
            {/* Hero Header */}
            <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://picsum.photos/seed/studiohistory/1920/1080"
                        alt="Historija studija"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/40"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center container-editorial text-center px-6">
                    <FadeIn>
                        <span className="text-sm tracking-widest uppercase text-gold mb-6 block drop-shadow-md">{t('about.tag')}</span>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-cream drop-shadow-lg mb-6">
                            {t('about.title')}
                        </h1>
                        <p className="text-lg md:text-xl font-light text-cream/90 max-w-2xl mx-auto">
                            {t('about.subtitle')}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* The Story */}
            <section className="section-padding bg-ivory">
                <div className="container-editorial">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <FadeIn>
                            <div className="image-hover-zoom rounded-sm aspect-[4/5] relative overflow-hidden">
                                <img
                                    src="https://picsum.photos/seed/oldcamera/800/1000"
                                    alt="Stara kamera"
                                    className="w-full h-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </FadeIn>

                        <div className="space-y-8">
                            <FadeIn>
                                <h2 className="editorial-subheading text-foreground">
                                    {t('about.story_title_1')}<span className="italic">{t('about.story_title_2')}</span>
                                </h2>
                                <div className="h-px w-24 bg-gold mb-8"></div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p className="editorial-body">
                                    {t('about.story_p1')}
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <p className="editorial-body">
                                    {t('about.story_p2')}<strong>{t('about.story_p2_strong')}</strong>
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p className="editorial-body">
                                    {t('about.story_p3')}
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-background text-center">
                <div className="container-editorial max-w-4xl">
                    <FadeIn>
                        <span className="text-sm tracking-widest uppercase text-gold mb-4 block">{t('about.philosophy_tag')}</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-10 leading-snug">
                            {t('about.philosophy_q1')}<br /> <span className="italic text-muted">{t('about.philosophy_q2')}</span>{t('about.philosophy_q3')}
                        </h3>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="editorial-body mb-12">
                            {t('about.philosophy_desc')}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <FadeIn delay={0.3}>
                            <div className="p-8 border border-muted/20 hover:border-gold transition-colors duration-500 rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group">
                                <span className="font-serif text-5xl text-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">01</span>
                                <h4 className="font-medium text-lg mb-2 uppercase tracking-wide">{t('about.approach')}</h4>
                                <p className="text-sm font-light text-muted">{t('about.approach_desc')}</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="p-8 border border-muted/20 hover:border-gold transition-colors duration-500 rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group">
                                <span className="font-serif text-5xl text-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">02</span>
                                <h4 className="font-medium text-lg mb-2 uppercase tracking-wide">{t('about.esthetics')}</h4>
                                <p className="text-sm font-light text-muted">{t('about.esthetics_desc')}</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <div className="p-8 border border-muted/20 hover:border-gold transition-colors duration-500 rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group">
                                <span className="font-serif text-5xl text-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">03</span>
                                <h4 className="font-medium text-lg mb-2 uppercase tracking-wide">{t('about.dedication')}</h4>
                                <p className="text-sm font-light text-muted">{t('about.dedication_desc')}</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
