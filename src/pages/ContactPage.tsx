import React, { useState } from 'react';
import { FadeIn } from '../components/Layout';
import { MapPin, Phone, Mail, Instagram, Clock, Send } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);


        //WEB3FORMS stranica za kontakt formu
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '04999d9d-83b2-4f53-b1d7-472bc057d3f9',
                    ...formData
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);

            if (submitStatus === 'success') {
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        }
    };

    return (
        <div className="pt-20 bg-background text-foreground">
            {/* Hero Header */}
            <section className="relative py-24 md:py-32 w-full bg-charcoal text-cream overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/contactbg/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="container-editorial relative z-10 text-center px-6">
                    <FadeIn>
                        <span className="text-sm tracking-widest uppercase text-gold mb-6 block">Kontaktirajte nas</span>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                            Zabilježimo vašu priču.
                        </h1>
                        <p className="text-base md:text-lg font-light text-cream/70 max-w-2xl mx-auto">
                            Bilo da planirate vjenčanje, porodični portret ili poslovni događaj, voljeli bismo čuti vaše ideje.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-background">
                <div className="container-editorial">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Contact Info & Map */}
                        <div className="space-y-12">
                            <FadeIn>
                                <div className="mb-12">
                                    <h2 className="editorial-subheading text-foreground mb-4">
                                        Naša <span className="italic">lokacija</span>
                                    </h2>
                                    <p className="editorial-body">
                                        Posjetite naš studio i razgovarajmo o vašim željama uz kafu. Nalazimo se u srcu Sarajeva.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8 text-foreground/80 font-light mb-12">
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-foreground tracking-wide uppercase text-sm flex items-center gap-2">
                                            <MapPin className="text-gold" size={16} /> Adresa
                                        </h4>
                                        <p>Zmaja od Bosne bb<br />71000 Sarajevo, BiH</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-foreground tracking-wide uppercase text-sm flex items-center gap-2">
                                            <Clock className="text-gold" size={16} /> Radno vrijeme
                                        </h4>
                                        <p>Pon - Pet: 09:00 - 17:00<br />Sub: 10:00 - 14:00</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-foreground tracking-wide uppercase text-sm flex items-center gap-2">
                                            <Phone className="text-gold" size={16} /> Telefon
                                        </h4>
                                        <p>+387 61 123 456<br />+387 33 123 456</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-foreground tracking-wide uppercase text-sm flex items-center gap-2">
                                            <Mail className="text-gold" size={16} /> Email & Društvene mreže
                                        </h4>
                                        <p className="mb-2">info@fotodumisic.ba</p>
                                        <a href="#" className="inline-flex text-foreground/80 hover:text-gold transition-colors">
                                            <Instagram size={20} />
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="w-full h-[400px] rounded-sm overflow-hidden border border-muted/20 grayscale hover:grayscale-0 transition-all duration-700">
                                    {/* Google Maps iFrame */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0195536413693!2d18.39845701549449!3d43.855424579114224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758ce0e2b34eb81%3A0xc3bbaebe104764b8!2sZmaja%20od%20Bosne%2C%20Sarajevo%2071000!5e0!3m2!1sen!2sba!4v1675123456789!5m2!1sen!2sba"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Foto Đumišić Lokacija"
                                    ></iframe>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-ivory p-8 md:p-12 rounded-sm border border-muted/10">
                            <FadeIn delay={0.3}>
                                <h3 className="font-serif text-2xl text-foreground mb-8">Pošaljite nam poruku</h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted font-medium">Ime i Prezime</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-muted/30 p-4 font-light focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                                            placeholder="Vaše ime"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted font-medium">Email Adresa</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-muted/30 p-4 font-light focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                                            placeholder="vasa@email.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted font-medium">Vrsta usluge</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-muted/30 p-4 font-light focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                                            placeholder="Npr. Vjenčanje, Porodični portret..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted font-medium">Poruka</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-background border border-muted/30 p-4 font-light focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50 resize-y"
                                            placeholder="Detalji o vašem događaju ili viziji..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-charcoal text-cream hover:bg-gold tracking-widest uppercase text-xs font-sans h-14 px-10 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Slanje...' : (
                                            <>
                                                Pošaljite Upit <Send size={16} />
                                            </>
                                        )}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <div className="p-4 bg-green-50 text-green-800 text-sm font-light border border-green-200">
                                            Vaša poruka je uspješno poslana! Javit ćemo se u najkraćem roku.
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="p-4 bg-red-50 text-red-800 text-sm font-light border border-red-200">
                                            Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo ili nas pozovite.
                                        </div>
                                    )}

                                    <p className="text-xs text-muted/70 font-light mt-4 text-center">
                                        Klikom na Slanje slažete se s obradom vaših podataka za potrebe odgovora na upit.
                                    </p>
                                </form>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
