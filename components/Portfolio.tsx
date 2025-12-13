import React, { useRef, useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // Distinguish drag from click

  // Lazy load simulation
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Mouse Down Event
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse Leave Event
  const handleMouseLeave = () => {
    setIsDown(false);
  };

  // Mouse Up Event
  const handleMouseUp = () => {
    setIsDown(false);
    // Timeout to reset dragging status slightly after release so click events can check it
    setTimeout(() => setIsDragging(false), 50); 
  };

  // Mouse Move Event
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
    
    // If moved significantly, consider it a drag operation
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
  };

  const handleCardClick = (e: React.MouseEvent, url: string) => {
    // If user was dragging, prevent the click
    if (isDragging) {
      e.preventDefault();
      return;
    }
    // Otherwise allow default link behavior or handle manually
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-[#0d121d]">
      
      {/* Neon Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[70%] bg-lite-neon/15 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 mb-10 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 uppercase">Projetos Recentes</h2>
        <p className="font-sans text-lite-metal">Arraste para ver mais</p>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="relative z-10 flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-[calc(50vw-400px)] pb-10 hide-scroll cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {PORTFOLIO_ITEMS.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center relative group select-none"
          >
            <a 
              href={item.projectUrl} 
              onClick={(e) => handleCardClick(e, item.projectUrl)}
              className="block relative h-[500px] md:h-[600px]"
              draggable="false" // Prevent native image dragging
            >
              {/* Polygon Card */}
              <div 
                className="relative w-full h-full bg-lite-surface overflow-hidden transition-all duration-300 group-hover:translate-y-[-10px] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-lite-surface group-hover:border-lite-neon/50"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                }}
              >
                {/* Skeleton Loader - Enhanced */}
                {!imagesLoaded[item.id] && (
                  <div className="absolute inset-0 bg-lite-surface z-10 flex flex-col justify-end p-6">
                    {/* Shimmer effect base */}
                    <div className="absolute inset-0 bg-gradient-to-b from-lite-surface to-lite-dark/50 animate-pulse" />
                    
                    {/* Placeholder content structure */}
                    <div className="relative z-20 space-y-4">
                      {/* Icon Placeholder */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[200px] w-16 h-16 rounded-full bg-lite-metal/10 animate-pulse flex items-center justify-center">
                         <div className="w-8 h-8 border-2 border-lite-metal/20 rounded-full" />
                      </div>

                      {/* Text Placeholders */}
                      <div className="h-4 w-24 bg-lite-metal/20 rounded animate-pulse" />
                      <div className="h-8 w-3/4 bg-lite-metal/20 rounded animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Image */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(item.id)}
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${imagesLoaded[item.id] ? 'opacity-60 scale-100' : 'opacity-0 scale-105'} group-hover:opacity-100 group-hover:scale-105`}
                  draggable="false"
                />

                {/* Overlay Content */}
                <div className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 ${imagesLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-display text-lite-neon text-sm font-bold uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <div className="flex justify-between items-end">
                    <h3 className="font-display text-3xl font-bold text-white uppercase">{item.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-lite-neon text-lite-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
        
        {/* Spacer for right padding in scroll */}
        <div className="w-4 flex-shrink-0" />
      </div>

      {/* Visual Indicator of swipe */}
      <div className="flex justify-center gap-2 mt-4 relative z-10">
        {PORTFOLIO_ITEMS.map((_, idx) => (
          <div key={idx} className={`w-2 h-2 rounded-full transition-colors duration-300 ${imagesLoaded[idx + 1] ? 'bg-lite-neon/50' : 'bg-lite-metal/30'}`} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;