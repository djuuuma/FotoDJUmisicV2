import React, { useState } from 'react';
import { FadeIn } from '../components/Layout';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const categories = ['Sve', 'Vjenčanja', 'Portret', 'Event', 'Komercijalno'];

const galleryImages = [
  { id: 1, category: 'Vjenčanja', src: '/recepcija.jpg' },
  { id: 2, category: 'Portret', src: 'https://picsum.photos/seed/p1/800/1000' },
  { id: 3, category: 'Event', src: 'https://picsum.photos/seed/e1/800/1000' },
  { id: 4, category: 'Vjenčanja', src: 'https://picsum.photos/seed/w2/800/800' },
  { id: 5, category: 'Komercijalno', src: 'https://picsum.photos/seed/c1/800/1000' },
  { id: 6, category: 'Portret', src: 'https://picsum.photos/seed/p2/800/800' },
  { id: 7, category: 'Vjenčanja', src: 'https://picsum.photos/seed/w3/800/1200' },
  { id: 8, category: 'Event', src: 'https://picsum.photos/seed/e2/800/800' },
  { id: 9, category: 'Komercijalno', src: 'https://picsum.photos/seed/c2/800/800' },
  { id: 10, category: 'Vjenčanja', src: 'https://picsum.photos/seed/w4/800/1000' },
  { id: 11, category: 'Portret', src: 'https://picsum.photos/seed/p3/800/1200' },
  { id: 12, category: 'Event', src: 'https://picsum.photos/seed/e3/800/1000' },
  { id: 13, category: 'Vjenčanja', src: 'https://picsum.photos/seed/w5/800/800' },
  { id: 14, category: 'Portret', src: 'https://picsum.photos/seed/p4/800/1000' },
  { id: 15, category: 'Komercijalno', src: 'https://picsum.photos/seed/c3/800/1200' },
  { id: 16, category: 'Event', src: 'https://picsum.photos/seed/e4/800/800' },
];

function LazyImage({ src, alt, onClick }: { src: string, alt: string, onClick: () => void }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-sm cursor-pointer bg-muted/20"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 ${isLoaded ? 'blur-0 opacity-100 grayscale-0' : 'blur-md opacity-0 grayscale'
          }`}
        referrerPolicy="no-referrer"
      />
      {isLoaded && (
        <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-cream text-xs tracking-widest uppercase border border-cream/40 px-4 py-2 backdrop-blur-sm">
            Povećaj
          </span>
        </div>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Sve');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'Sve'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-editorial">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase text-gold mb-4 block">Galerija</span>
            <h1 className="editorial-subheading text-foreground">
              Naš <span className="italic">Portfolio</span>
            </h1>
            <p className="editorial-body max-w-2xl mx-auto mt-4">
              Pregledajte naše najbolje radove kroz različite kategorije. Svaka fotografija je pažljivo obrađena kako bi prenijela pravu emociju.
            </p>
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-transparent text-charcoal border-charcoal/20 hover:border-charcoal'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid"
              >
                <LazyImage
                  src={img.src}
                  alt={img.category}
                  onClick={() => setSelectedImage(img.src)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
