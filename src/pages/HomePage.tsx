import { Link } from 'react-router-dom';
import { FadeIn } from '../components/Layout';
import { AnimatedTestimonials } from '../components/AnimatedTestimonials';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const services = [
    { title: t('home.services.weddings'), img: '/vencanje 1prva.jpg' },
    { title: t('home.services.portraits'), img: '/slika momaka.jpg' },
    { title: t('home.services.film'), img: '/digitize-35mm-film-negative-transfer.jpg' },
  ];

  const portfolioPreview = Array.from({ length: 8 }).map((_, i) => `https://picsum.photos/seed/port${i}/800/800`);



  return (
    <>
      {/* Hero */}
      <section id="početna" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/vecteezy_newlywed-couple-embraces-in-beautiful-outdoor-wedding_24576188.jpg" alt="Foto Đumišić studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-cream px-6 max-w-4xl mt-16">
            <FadeIn>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6">
                {t('home.hero_title')}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-10 text-cream/90">
                {t('home.hero_subtitle')}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-cream/20 text-cream border border-cream/40 backdrop-blur-sm hover:bg-cream hover:text-charcoal tracking-widest uppercase text-xs font-sans h-14 px-10 py-4">
                  {t('home.view_portfolio')}
                </Link>
                <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 text-cream border border-cream/50 backdrop-blur-sm hover:bg-cream/10 hover:text-cream tracking-widest uppercase text-xs font-sans h-14 px-10 py-4 bg-transparent">
                  {t('home.book_term')}
                </Link>
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
                <span className="text-sm tracking-widest uppercase text-gold mb-4 block">{t('home.about_tag')}</span>
                <h2 className="editorial-subheading text-foreground">
                  {t('home.about_title_1')}<br />
                  <span className="italic">{t('home.about_title_2')}</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="editorial-body mb-6">
                  {t('home.about_desc_1')}
                </p>
                <p className="editorial-body mb-8">
                  {t('home.about_desc_2')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Link to="/o-nama" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 border border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-cream tracking-widest uppercase text-xs font-sans h-12 px-8 py-3">
                  {t('home.learn_more')}
                </Link>
              </FadeIn>
            </div>
            <FadeIn delay={0.3}>
              <div className="image-hover-zoom rounded-sm">
                <img src="/vencanje 2 druga.jpg" alt="O studiju" className="w-full h-[500px] lg:h-[600px] object-cover" referrerPolicy="no-referrer" />
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
              <span className="text-sm tracking-widest uppercase text-gold mb-4 block">{t('home.services_tag')}</span>
              <h2 className="editorial-subheading text-foreground">
                {t('home.services_title_1')}<span className="italic">{t('home.services_title_2')}</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.2}>
                <Link to="/portfolio" className="group block relative overflow-hidden aspect-[3/4] rounded-sm">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-cream mb-2">{service.title}</h3>
                    <span className="text-cream/70 text-sm tracking-widest uppercase group-hover:text-gold transition-colors duration-300">
                      {t('home.view_gallery')}
                    </span>
                  </div>
                </Link>
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
              <span className="text-sm tracking-widest uppercase text-gold mb-4 block">{t('home.portfolio_tag')}</span>
              <h2 className="editorial-subheading text-foreground">
                {t('home.portfolio_title_1')}<span className="italic">{t('home.portfolio_title_2')}</span>
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
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 border border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-cream tracking-widest uppercase text-xs font-sans h-12 px-8 py-3">
                {t('home.view_full_portfolio')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedTestimonials
        testimonials={[
          {
            id: 1,
            name: "Belma Kapić",
            source: "Google Review",
            content:
              "A photography shop with a long tradition. A wonderful and professional duo, father and son, from whom you will leave with a smile in addition to top quality photos.",
          },
          {
            id: 2,
            name: "Şevval Akkaya",
            source: "Google Review",
            content:
              "I got my films developed here! They were very nice, and fast! Got the scans back in 2 days via e-mail.",
          },
          {
            id: 3,
            name: "Timur Ljubuncic",
            source: "Google Review",
            content:
              "A very pleasant young man was helping us with document photos. High quality and done in 20 minutes.",
          },
        ]}
      />

      {/* CTA */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/wedding3/1920/1080" alt="Kontakt pozadina" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>

        <div className="relative z-10 container-editorial text-center px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
              {t('home.cta_title')}
            </h2>
            <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              {t('home.cta_subtitle')}
            </p>
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-cream/20 text-cream border border-cream/40 backdrop-blur-sm hover:bg-cream hover:text-charcoal tracking-widest uppercase text-xs font-sans h-14 px-10 py-4">
              {t('home.cta_button')}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
