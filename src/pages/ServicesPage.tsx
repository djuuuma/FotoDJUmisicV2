import React from 'react';
import { FadeIn } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Camera, Video, Film, Star } from 'lucide-react';
import { FAQ } from '../components/FAQ';

export default function ServicesPage() {
    const { t } = useLanguage();

    return (
        <div className="pt-20 bg-background text-foreground">
            {/* Header */}
            <header className="relative py-24 lg:py-32 overflow-hidden bg-charcoal">
                <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/services/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="container-editorial relative z-10 text-center px-6">
                    <FadeIn>
                        <span className="text-sm tracking-widest uppercase text-gold mb-6 block">{t('services_page.tag')}</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-cream mb-6">
                            {t('services_page.title_1')}<span className="italic">{t('services_page.title_2')}</span>
                        </h1>
                        <p className="text-base md:text-lg font-light text-cream/70 max-w-2xl mx-auto">
                            {t('services_page.desc')}
                        </p>
                    </FadeIn>
                </div>
            </header>

            {/* Packages Section */}
            <section className="section-padding">
                <div className="container-editorial max-w-6xl">

                    {/* Wedding Packages */}
                    <FadeIn>
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-8 border-b border-muted/20 pb-4">
                                <Video className="text-gold" size={28} />
                                <div>
                                    <h2 className="text-2xl font-serif text-foreground">{t('services_page.wedding_title')}</h2>
                                    <p className="text-muted text-sm font-light mt-1">{t('services_page.wedding_subtitle')}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Pkg 1 */}
                                <div className="border border-muted/20 bg-ivory p-8 rounded-sm hover:border-gold/50 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-medium text-lg uppercase tracking-wider">{t('services_page.wedding_pkg1')}</h3>
                                        <span className="text-gold font-serif text-xl">{t('services_page.wedding_pkg1_price')}</span>
                                    </div>
                                    <ul className="space-y-4 text-muted/80 font-light text-sm">
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.wedding_pkg1_item1')}</li>
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.wedding_pkg1_item2')}</li>
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.wedding_pkg1_item3')}</li>
                                    </ul>
                                </div>
                                {/* Pkg 2 */}
                                <div className="border border-gold bg-charcoal text-cream p-8 rounded-sm relative overflow-hidden">
                                    <div className="absolute -right-12 -top-12 bg-gold/10 w-32 h-32 rounded-full blur-3xl"></div>
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <h3 className="font-medium text-lg uppercase tracking-wider">{t('services_page.wedding_pkg2')}</h3>
                                        <span className="text-gold font-serif text-xl">{t('services_page.wedding_pkg2_price')}</span>
                                    </div>
                                    <ul className="space-y-4 text-cream/80 font-light text-sm relative z-10">
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold" /> {t('services_page.wedding_pkg2_item1')}</li>
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold" /> {t('services_page.wedding_pkg2_item2')}</li>
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold" /> {t('services_page.wedding_pkg2_item3')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Portrait Packages */}
                    <FadeIn delay={0.2}>
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-8 border-b border-muted/20 pb-4">
                                <Camera className="text-gold" size={28} />
                                <div>
                                    <h2 className="text-2xl font-serif text-foreground">{t('services_page.portrait_title')}</h2>
                                    <p className="text-muted text-sm font-light mt-1">{t('services_page.portrait_subtitle')}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="border border-muted/20 bg-ivory p-8 rounded-sm hover:border-gold/50 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-medium text-lg uppercase tracking-wider">{t('services_page.portrait_pkg1')}</h3>
                                        <span className="text-gold font-serif text-xl">{t('services_page.portrait_pkg1_price')}</span>
                                    </div>
                                    <ul className="space-y-4 text-muted/80 font-light text-sm">
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.portrait_pkg1_item1')}</li>
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.portrait_pkg1_item2')}</li>
                                    </ul>
                                </div>
                                <div className="border border-muted/20 bg-ivory p-8 rounded-sm hover:border-gold/50 transition-colors">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="font-medium text-lg uppercase tracking-wider">{t('services_page.portrait_pkg2')}</h3>
                                        <span className="text-gold font-serif text-xl">{t('services_page.portrait_pkg2_price')}</span>
                                    </div>
                                    <ul className="space-y-4 text-muted/80 font-light text-sm">
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.portrait_pkg2_item1')}</li>
                                        <li className="flex items-center gap-3"><Star size={14} className="text-gold/60" /> {t('services_page.portrait_pkg2_item2')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* 35mm Film */}
                    <FadeIn delay={0.3}>
                        <div>
                            <div className="flex items-center gap-4 mb-8 border-b border-muted/20 pb-4">
                                <Film className="text-gold" size={28} />
                                <div>
                                    <h2 className="text-2xl font-serif text-foreground">{t('services_page.film_title')}</h2>
                                    <p className="text-muted text-sm font-light mt-1">{t('services_page.film_subtitle')}</p>
                                </div>
                            </div>
                            <div className="border border-muted/20 bg-background p-8 rounded-sm">
                                <p className="text-muted/80 font-light mb-6 flex-1">
                                    {t('services_page.film_desc')}
                                </p>
                                <div className="inline-block border border-gold/30 bg-gold/5 px-4 py-2 rounded-full text-gold text-sm font-medium tracking-wide">
                                    {t('services_page.film_price')}
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* Render FAQ Component here directly */}
            <FAQ />
        </div>
    );
}
