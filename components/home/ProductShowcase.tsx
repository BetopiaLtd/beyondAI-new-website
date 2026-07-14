'use client'
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Globe, Smartphone } from "lucide-react";

interface App {
  name: string;
  url: string;
  store: "apple" | "google" | "testflight" | "web" | "software";
  image: string;
  category?: string;
}

const apps: App[] = [
  { name: "sendagift", url: "https://sendagift.shop/", store: "web", image: "/images/image_1.png", category: "Website" },
  { name: "sendagift", url: "https://dermexia.eu/", store: "web", image: "/images/image_2.png", category: "Website" },
  { name: "Usagivr", url: "https://shop.usagivr.com/", store: "web", image: "/images/image_3.png", category: "Website" },
  { name: "aandsrefrigerationboxes", url: "https://aandsrefrigerationboxes.com/", store: "web", image: "/images/image_4.png", category: "Website" },
  { name: "kitfix.com", url: "https://kitfix.com/", store: "web", image: "/images/image_5.png", category: "Website" },
  { name: "adedamolaatelier", url: "https://www.adedamolaatelier.com/", store: "web", image: "/images/image_6.png", category: "Website" },
  { name: "veralosso", url: "https://www.veralosso.com/", store: "web", image: "/images/image_7.png", category: "Website" },
  { name: "sprayfixsolutions", url: "https://www.sprayfixsolutions.ca/", store: "web", image: "/images/image_8.png", category: "Website" },
  { name: "bloomvits", url: "https://bloomvits.nl/", store: "web", image: "/images/image_9.png", category: "Website" },
  { name: "obyronstore", url: "https://obyronstore.com/", store: "web", image: "/images/image_10.png", category: "Website" },
];

const AppCard = ({ app, isActive }: { app: App; isActive: boolean }) => {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block transition-all duration-700 ease-out transform-gpu ${
        isActive 
          ? "scale-100 opacity-100 z-10" 
          : "scale-[0.88] opacity-50 blur-[1px]"
      }`}
    >
      <div className="relative group cursor-pointer text-left">
        {/* Glow Effect */}
        <div className={`absolute -inset-4 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-2xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Card Container */}
        <div className={`relative glass-card rounded-[2.5rem] p-4 transition-all duration-500 
          bg-card/50 backdrop-blur-xl border border-white/10
          group-hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] group-hover:translate-y-[-8px]`}
        >
          {/* Screenshot */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-muted">
            <img 
              src={app.image} 
              alt={app.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-gray-900 text-sm font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Project
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* Card Info */}
          <div className={`mt-5 px-2 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
            <div className="flex items-center justify-between mb-2">
               <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                 {app.category || "Development"}
               </span>
               <div className="p-1.5 rounded-lg bg-primary/10">
                 {app.store === "web" || app.store === "software" ? (
                   <Globe className="w-3.5 h-3.5 text-primary" />
                 ) : (
                   <Smartphone className="w-3.5 h-3.5 text-primary" />
                 )}
               </div>
            </div>
            <h3 className="font-display font-bold text-xl text-foreground truncate">
              {app.name}
            </h3>
          </div>
        </div>
      </div>
    </a>
  );
};

const ProductShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: false,
      direction: "ltr", // This makes the slide move Left-to-Right
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-2 relative w-full overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 w-full">
        {/* CENTERED HEADER SECTION */}
        {/* ── HEADER ── */}
          <div className={`mb-0  max-w-[1660px] w-[90%] mx-auto`}>
            

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(44px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Digital 
  {' '}
                  <span className="wwa-shimmer-blue"> Masterpieces  </span> 
                </h2>

                {/* ── original subtitle text ── */}
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">Explore our cross-platform portfolio, from scalable SaaS dashboards to intuitive mobile experiences.
                </p>
              </div> 
            </div>
          </div>

        {/* FULL WIDTH CAROUSEL (Left-to-Right) */}
        <div className="relative w-full" dir="ltr">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="flex-none w-[85vw] sm:w-[480px] md:w-[580px] px-4 py-8"
                >
                  <AppCard app={app} isActive={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Seamless Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-[10vw] bg-linear-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[10vw] bg-linear-to-l from-background to-transparent z-20 pointer-events-none" />
        </div>

        {/* CENTERED PROGRESS INDICATORS */}
        <div className="flex justify-center gap-3 mt-12">
          {apps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                index === selectedIndex 
                  ? "bg-primary w-12" 
                  : "bg-muted-foreground/20 w-3 hover:bg-muted-foreground/40"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;