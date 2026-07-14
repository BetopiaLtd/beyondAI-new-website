'use client'
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";


interface App {
  name: string;
  url: string;
  store: "apple" | "google" | "testflight";
  image: string;
}

const apps: App[] = [
  { name: "VALRPRO", url: "https://testflight.apple.com/join/GRTuaY52", store: "testflight", image: "/apps/valrpro.png" },
  { name: "Tastehub", url: "https://apps.apple.com/jp/app/tastehub-app/id6751109669?platform=iphone", store: "apple", image: "/apps/tastehub.png" },
  { name: "Prime Pilates", url: "https://apps.apple.com/us/app/prime-pilates/id6741531586?platform=iphone", store: "apple", image: "/apps/prime-pilates.png" },
  { name: "Bookatable", url: "https://play.google.com/store/apps/details?id=com.bookatable.app.mu&hl=en", store: "google", image: "/apps/bookatable.png" },
  { name: "SwiftSwap", url: "https://play.google.com/store/apps/details?id=com.swipswap.jorge&pli=1", store: "google", image: "/apps/swiftswap.png" },
  { name: "Dudu Car Malaysia", url: "https://apps.apple.com/kh/app/dudu-car-malaysia/id6751107228", store: "apple", image: "/apps/dudu-car.png" },
  { name: "My Tracks", url: "https://play.google.com/store/apps/details?id=com.mytracksdarren.roe", store: "google", image: "/apps/my-tracks.png" },
  { name: "Klaus Bekker", url: "https://play.google.com/store/apps/details?id=com.klausbekker.audiobook", store: "google", image: "/apps/klaus-bekker.png" },
  { name: "Nelya", url: "https://play.google.com/store/apps/details?id=com.nelya.period_tracking", store: "google", image: "/apps/nelya.png" },
  { name: "ANGRYai", url: "https://apps.apple.com/us/app/angryai/id6756209388", store: "apple", image: "/apps/angryaii.png" },
  { name: "Distrax", url: "https://apps.apple.com/us/app/distrax/id6753587746", store: "apple", image: "/apps/distrax.png" },
  { name: "Prism Sports", url: "https://apps.apple.com/us/app/prism-sports-journal/id6749793697", store: "apple", image: "/apps/prism-sports.png" },
  { name: "WET Piscinas", url: "https://apps.apple.com/us/app/wet-app-piscinas/id6749312378", store: "apple", image: "/apps/wet-piscinas.png" },
  { name: "Descubrelo", url: "https://apps.apple.com/us/app/descubrelo-colorado-guide/id6754084053", store: "apple", image: "/apps/descubrelo.png" },
  { name: "DMR Connect", url: "https://apps.apple.com/us/app/dmr-connect/id6754272171", store: "apple", image: "/apps/dmr-connect.png" },
  { name: "re: social", url: "https://apps.apple.com/us/app/re-social/id6754686897", store: "apple", image: "/apps/re-social.png" },
  { name: "Med World", url: "https://apps.apple.com/us/app/medworldapp/id6745454498", store: "apple", image: "/apps/med-world.png" },
  { name: "TheClue Crypto", url: "https://apps.apple.com/us/app/theclue-crypto-education/id6752632864", store: "apple", image: "/apps/theclue-crypto.png" },
  { name: "MilkMix", url: "https://apps.apple.com/us/app/milkmix/id6754192786", store: "apple", image: "/apps/milkmix.png" },
  { name: "Whisky Cask", url: "https://apps.apple.com/us/app/whisky-cask-club/id6757377998", store: "apple", image: "/apps/whisky-cask.png" },
  { name: "Below MSRP", url: "https://apps.apple.com/us/app/below-msrp/id6754098147", store: "apple", image: "/apps/below-msrp.png" },
  { name: "Nutra AI", url: "https://apps.apple.com/us/app/nutra-ai/id6743385114", store: "apple", image: "/apps/nutra-ai.png" },
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
          : "scale-[0.85] opacity-50 blur-[1px]"
      }`}
    >
      <div className="relative group cursor-pointer">
        {/* Glow Effect */}
        <div className={`absolute -inset-4 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-2xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Card Container */}
   <div
  className={`relative glass-card rounded-3xl p-4 transition-all duration-500 
  group-hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]`}
>
          {/* Screenshot */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={app.image} 
              alt={`${app.name} app screenshot`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* View App Button - appears on hover */}
            <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View App
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          {/* App Info */}
          <div className={`mt-4 text-center transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
            <h3 className="font-display font-bold text-lg text-foreground mb-2 truncate px-2">
              {app.name}
            </h3>
            
            {/* Platform Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm text-xs ${
              app.store === "testflight" 
                ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" 
                : "bg-muted/50 text-muted-foreground"
            }`}>
              {app.store === "apple" ? (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </>
              ) : app.store === "testflight" ? (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>TestFlight</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Play Store</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const AppShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-2 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-linear-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Section Header */}
         {/* ── HEADER ── */}
          <div className={`mb-0  max-w-[1660px] w-[90%] mx-auto`}>
            <div className="wwa-tag-pill mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] inline-block" />
              Our Portfolio
            </div>

            <div className="wwa-accent-bar h-0.5 w-12 bg-[#facc15] mb-6 rounded-full" />

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-[clamp(44px,6vw,60px)] leading-[0.9] uppercase text-[#0f1e4a] mb-4">
                  Apps We've
  {' '}
                  <span className="wwa-shimmer-blue"> Built </span> 
                </h2>

                {/* ── original subtitle text ── */}
                <p className="text-[#6b7280] text-sm leading-relaxed max-w-lg font-light">
                 From fitness to finance, food to transportation — explore the mobile apps we've crafted for clients worldwide
                </p>
              </div> 
            </div>
          </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="flex-none w-[280px] sm:w-[320px] md:w-[340px] pl-4 pr-4 py-8"
                >
                  <AppCard app={app} isActive={index === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* linear Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {apps.slice(0, 10).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex % 10
                  ? "bg-primary w-8 h-2"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <p className="text-center text-sm text-muted-foreground mt-6 sm:hidden">
          ← Swipe to explore more apps →
        </p>
        
        {/* App Count */}
        {/* <p className="text-center text-sm text-muted-foreground mt-4">
          <span className="font-semibold text-foreground">{apps.length}+</span> apps delivered to clients worldwide
        </p> */}
      </div>
    </section>
  );
};

export default AppShowcase;
