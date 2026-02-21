import React from 'react';
import { FadeIn } from '../components/Layout';

export default function HomePage() {
  const services = [
    { title: 'Vjenčanja', img: 'https://picsum.photos/seed/wedding2/600/800' },
    { title: 'Portret', img: 'https://picsum.photos/seed/portrait/600/800' },
    { title: 'Event', img: 'https://picsum.photos/seed/event/600/800' },
  ];

  const portfolioPreview = Array.from({ length: 8 }).map((_, i) => `https://picsum.photos/seed/port${i}/800/800`);

  const testimonials = [
    {
      quote: "Fotografije su predivne, a cijelo iskustvo bilo je opušteno i profesionalno. Preporučujemo svima!",
      name: "Amela & Adnan",
      event: "Vjenčanje 2024"
    },
    {
      quote: "Uspjeli su uhvatiti sve posebne momente našeg vjenčanja. Zauvijek ćemo čuvati ove uspomene.",
      name: "Lejla & Emir",
      event: "Vjenčanje 2023"
    },
    {
      quote: "Porodično fotografiranje je bilo toliko zabavno za djecu. Fotografije su ispale magično!",
      name: "Porodica Hodžić",
      event: "Novogodišnje fotografiranje"
    }
  ];

  return (
    <>
      {/* Hero */}
      <section id="početna" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://picsum.photos/seed/wedding1/1920/1080" alt="Foto Đumišić studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-6 max-w-4xl mt-16">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6">
                Fotografija koja ima osjećaj.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 text-cream/90">
                Bilježimo emociju, detalje i trenutke koji traju.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/portfolio" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-cream/20 text-cream border border-cream/40 backdrop-blur-sm hover:bg-cream hover:text-charcoal tracking-widest uppercase text-xs font-sans h-14 px-10 py-4">
                  Pogledaj portfolio
                </a>
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 text-cream border border-cream/50 backdrop-blur-sm hover:bg-cream/10 hover:text-cream tracking-widest uppercase text-xs font-sans h-14 px-10 py-4 bg-transparent">
                  Rezerviši termin
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="w-px h-16 bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0 animate-pulse"></div>
        </div>
      </section>

      {/* About */}
      <section id="o-nama" className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <span className="text-sm tracking-widest uppercase text-gold mb-4 block">O studiju</span>
                <h2 className="editorial-subheading text-foreground">
                  Prirodno. Čisto.<br />
                  <span className="italic">Emotivno.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="editorial-body mb-6">
                  U Foto Đumišić studiju vjerujemo da svaka fotografija treba pričati priču. Naš pristup je diskretan i prirodan – fokusiramo se na emocije, detalje i autentične trenutke koji čine vaše uspomene posebnim.
                </p>
                <p className="editorial-body mb-8">
                  Sa godinama iskustva u fotografiji vjenčanja, portreta, porodičnih sesija i komercijalnog snimanja, donosimo profesionalnost i kreativnost u svaki projekat.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <a href="/o-nama" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 border border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-cream tracking-widest uppercase text-xs font-sans h-12 px-8 py-3">
                  Saznaj više
                </a>
              </FadeIn>
            </div>
            <FadeIn delay={0.3}>
              <div className="image-hover-zoom rounded-sm">
                <img src="https://picsum.photos/seed/camera/800/1000" alt="O studiju" className="w-full h-[500px] lg:h-[600px] object-cover" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="section-padding bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-gold mb-4 block">Naše usluge</span>
              <h2 className="editorial-subheading text-foreground">
                Šta <span className="italic">nudimo</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.2}>
                <a href="/portfolio" className="group block relative overflow-hidden aspect-[3/4] rounded-sm">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-cream mb-2">{service.title}</h3>
                    <span className="text-cream/70 text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300">
                      Pogledaj galeriju →
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="section-padding bg-background">
        <div className="container-editorial">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-gold mb-4 block">Portfolio</span>
              <h2 className="editorial-subheading text-foreground">
                Svaka galerija je <span className="italic">priča</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioPreview.map((img, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.1}>
                <div className="image-hover-zoom aspect-square rounded-sm">
                  <img src={img} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <a href="/portfolio" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 border border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-cream tracking-widest uppercase text-xs font-sans h-12 px-8 py-3">
                Pogledaj cijeli portfolio
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ivory">
        <div className="container-editorial">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm tracking-widest uppercase text-gold mb-4 block">Utisci</span>
              <h2 className="editorial-subheading text-foreground">
                Šta kažu naši <span className="italic">klijenti</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="text-center">
                  <p className="font-serif text-xl italic text-foreground leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">{t.event}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/wedding3/1920/1080" alt="Kontakt pozadina" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>

        <div className="relative z-10 container-editorial text-center px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
              Spremni za termin?
            </h2>
            <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Pošaljite upit i dobićete odgovor u roku 24h.
            </p>
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-cream/20 text-cream border border-cream/40 backdrop-blur-sm hover:bg-cream hover:text-charcoal tracking-widest uppercase text-xs font-sans h-14 px-10 py-4">
              Kontakt
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
