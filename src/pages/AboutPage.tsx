import React from 'react';
import { FadeIn } from '../components/Layout';

export default function AboutPage() {
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
                        <span className="text-sm tracking-widest uppercase text-gold mb-6 block drop-shadow-md">O nama</span>
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-cream drop-shadow-lg mb-6">
                            Naša priča.
                        </h1>
                        <p className="text-lg md:text-xl font-light text-cream/90 max-w-2xl mx-auto">
                            Decenije posvećene umjetnosti svjetlosti i uspomenama koje nikada ne blijede.
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
                                    Tradicija koja <span className="italic">živi kroz objektiv.</span>
                                </h2>
                                <div className="h-px w-24 bg-gold mb-8"></div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p className="editorial-body">
                                    Naše putovanje počelo je u maloj, skromnoj tamnoj komori gdje su miris hemikalija za razvijanje i prigušeno crveno svjetlo stvarali magiju iz ničega. Od tih ranih dana pa sve do današnje digitalne ere, strast ka fotografiji prenosila se s koljena na koljeno.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <p className="editorial-body">
                                    Foto Đumišić nije samo studio. To je porodično naslijeđe, jedna dugovječna vizija da se emocija, onakva kakva jest u svojoj suštinskoj čistoći, zauvijek zadrži u vremenu. Od prvih analognih traka do naših savremenih senzora visoke rezolucije, osnovni princip je uvijek ostao isti – <strong>mi bilježimo osjećaj.</strong>
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p className="editorial-body">
                                    Svaki osmijeh, svaka sakrivena suza radosnica, svako nježno držanje za ruku ili prkosni portret priča su koju shvatamo krajnje ozbiljno. Naša moć zapažanja i urođeni osjećaj za kompoziciju, građeni i usavršavani godinama, razlog su zašto više generacija porodica bira nas da ovjekovječimo njihove najznačajnije trenutke.
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
                        <span className="text-sm tracking-widest uppercase text-gold mb-4 block">Naša Filozofija</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-10 leading-snug">
                            "Mi ne pravimo fotografije aparatom. <br /> <span className="italic text-muted">Aparat u nju unosi sve slike koje ste vidjeli, knjige koje ste pročitali, muziku koju ste čuli i ljude koje ste voljeli.</span>"
                        </h3>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="editorial-body mb-12">
                            Kroz decenije rada shvatili smo da vrhunska fotografija ne zavisi nužno od opreme (iako imamo najmoderniju), već od sposobnosti fotografa da se poveže s ljudima ispred sebe.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <FadeIn delay={0.3}>
                            <div className="p-8 border border-muted/20 hover:border-gold transition-colors duration-500 rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group">
                                <span className="font-serif text-5xl text-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">01</span>
                                <h4 className="font-medium text-lg mb-2 uppercase tracking-wide">Pristup</h4>
                                <p className="text-sm font-light text-muted">Potpuno diskretan, prirodan i usmjeren na hvatanje neinsceniranih, iskrenih momenata.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="p-8 border border-muted/20 hover:border-gold transition-colors duration-500 rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group">
                                <span className="font-serif text-5xl text-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">02</span>
                                <h4 className="font-medium text-lg mb-2 uppercase tracking-wide">Estetika</h4>
                                <p className="text-sm font-light text-muted">Vrhunski kolor grading uz sofisticiranu igru svjetla i sjene koja podsjeća na umjetnička djela.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                            <div className="p-8 border border-muted/20 hover:border-gold transition-colors duration-500 rounded-sm bg-ivory aspect-square flex flex-col items-center justify-center text-center group">
                                <span className="font-serif text-5xl text-gold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">03</span>
                                <h4 className="font-medium text-lg mb-2 uppercase tracking-wide">Posvećenost</h4>
                                <p className="text-sm font-light text-muted">Svaki projekat je jedinstven. Vaša priča postaje naša odgovornost da je vječno sačuvamo.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
