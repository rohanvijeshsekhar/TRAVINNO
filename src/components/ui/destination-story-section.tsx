import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Destination {
  title: string;       // Destination Name (e.g. Dubai, Malaysia...)
  region: string;      // Region (e.g. Middle East, Southeast Asia...)
  countryName: string; // Bold Country Name (e.g. United Arab Emirates, Malaysia...)
  heading: string;     // Large Editorial Heading
  description: string; // Short Description
  highlights: string[];// Feature Pills
  image: string;       // Image URL
}

const BASE = import.meta.env.BASE_URL;

const destinations: Destination[] = [
  {
    title: "Dubai",
    region: "Middle East",
    countryName: "United Arab Emirates",
    heading: "Modern Skylines & Desert Safaris",
    description: "Experience a world where futuristic glass skyscrapers rise directly from ancient desert sands, curating the ultimate heights of luxury leisure and private safaris.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/dubai.webp`
  },
  {
    title: "Malaysia",
    region: "Southeast Asia",
    countryName: "Malaysia",
    heading: "Vibrant Cultures & Rainforest Escapes",
    description: "Discover a rich tapestry of history, modern capital luxury, and pristine ancient rainforest canopies home to unique biodiversity.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/malaysia.webp`
  },
  {
    title: "Thailand",
    region: "Southeast Asia",
    countryName: "Thailand",
    heading: "Golden Temples & Tropical Islands",
    description: "Immerse yourself in the warm hospitality of golden temple cities and white sand archipelago islands with tailored beachfront luxury.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/thailand.webp`
  },
  {
    title: "Singapore",
    region: "Southeast Asia",
    countryName: "Singapore",
    heading: "Futuristic Gardens & Cosmopolitan Charm",
    description: "Walk through the world's most advanced architectural nature displays, leading Michelin-starred dining, and premium lifestyle ports.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/singapore.webp`
  },
  {
    title: "Bali",
    region: "Southeast Asia",
    countryName: "Bali",
    heading: "Sacred Temples & Pristine Beaches",
    description: "Reconnect in the spiritual capital of volcanic lake vistas, iconic terraced valleys, and private pool luxury villas.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/bali.webp`
  },
  {
    title: "Kenya",
    region: "East Africa",
    countryName: "Kenya",
    heading: "Untamed Wildlife & Savannah Reserves",
    description: "Witness the great wilderness migration on the plains of Masai Mara, pairing raw nature with five-star luxury tented camp reserves.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/kenya.webp`
  },
  {
    title: "Vietnam",
    region: "Southeast Asia",
    countryName: "Vietnam",
    heading: "Historic Cities & Dramatic Karst Bays",
    description: "Cruise the emerald waters of Ha Long Bay and explore French colonial cities, combining rich historic heritage with luxury maritime travel.",
    highlights: ["Luxury Travel", "MICE", "Corporate", "Leisure", "Adventure"],
    image: `${BASE}images/destinations/vietnam.webp`
  }
];

export default function DestinationStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: any;
    let rafId1 = 0;
    let rafId2 = 0;
    let loaderListener: any;

    const initScrollTrigger = () => {
      const container = containerRef.current;
      const viewport = viewportRef.current;
      if (!container || !viewport) return;

      const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
      const textContainers = textContainerRefs.current.filter((t): t is HTMLDivElement => t !== null);
      if (cards.length === 0) return;

      // ─── Visual Viewport Measure Source of Truth ──────────────────────────
      const getVH = () => window.innerHeight;

      ctx = gsap.context(() => {
        // Set initial state: Card 0 visible, others hidden and scaled down
        cards.forEach((card, idx) => {
          if (idx === 0) {
            gsap.set(card, { opacity: 1, scale: 1, visibility: 'visible' });
            if (textContainers[0]) {
              const children = textContainers[0].querySelectorAll('.story-animate-el');
              gsap.set(children, { y: 0, opacity: 1 });
            }
          } else {
            gsap.set(card, { opacity: 0, scale: 0.95, visibility: 'hidden' });
            if (textContainers[idx]) {
              const children = textContainers[idx].querySelectorAll('.story-animate-el');
              gsap.set(children, { y: 40, opacity: 0 });
            }
          }
        });

        // ─── Unified Timeline & ScrollTrigger ─────────────────────────────
        const transitionDuration = 1.0;
        const holdDuration = 1.0;
        const totalDurationPerCard = transitionDuration + holdDuration;
        
        // End calculation based on dynamic layout scale
        const scrollDistance = () => getVH() * (cards.length - 1);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollDistance()}`,
            pin: viewport,
            pinSpacing: true,
            scrub: 1.5,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });

        // Loop cards to create smooth sequential cinematic fade/dissolve transitions
        for (let i = 1; i < cards.length; i++) {
          const startPos = (i - 1) * totalDurationPerCard;

          // Outgoing card (i-1) zooms out/fades
          tl.to(cards[i - 1], {
            opacity: 0,
            scale: 1.04,
            duration: transitionDuration,
            ease: "power2.inOut"
          }, startPos);

          if (textContainers[i - 1]) {
            const outgoingTexts = textContainers[i - 1].querySelectorAll('.story-animate-el');
            tl.to(outgoingTexts, {
              y: -40,
              opacity: 0,
              stagger: 0.05,
              duration: transitionDuration * 0.8,
              ease: "power2.inOut"
            }, startPos);
          }

          // Incoming card (i) zooms in/fades
          tl.set(cards[i], { visibility: 'visible' }, startPos);
          
          tl.fromTo(cards[i],
            { opacity: 0, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              duration: transitionDuration,
              ease: "power2.inOut"
            },
            startPos
          );

          if (textContainers[i]) {
            const incomingTexts = textContainers[i].querySelectorAll('.story-animate-el');
            tl.fromTo(incomingTexts,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: transitionDuration * 0.9,
                ease: "power2.out"
              },
              startPos + 0.15
            );
          }

          // Card hold phase before next transition starts
          tl.to({}, { duration: holdDuration });
        }

      }, containerRef);

      // Defer execution until the browser's painting thread stabilizes
      rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(() => {
          ScrollTrigger.refresh(true);
        });
      });
    };

    const checkAndInit = () => {
      const loader = document.querySelector('.fullscreen-loader');
      if (loader) {
        loaderListener = () => {
          window.removeEventListener('travinnoLoaderComplete', loaderListener);
          if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(initScrollTrigger);
          } else {
            initScrollTrigger();
          }
        };
        window.addEventListener('travinnoLoaderComplete', loaderListener);
      } else {
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(initScrollTrigger);
        } else {
          initScrollTrigger();
        }
      }
    };

    checkAndInit();

    return () => {
      if (loaderListener) {
        window.removeEventListener('travinnoLoaderComplete', loaderListener);
      }
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="destinations-story-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#050505',
        boxSizing: 'border-box'
      }}
    >
      <style>{`
        .destinations-story-viewport {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          background-color: #050505;
        }

        .destinations-story-card {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .story-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .story-vignette-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: radial-gradient(circle at 60% 50%, transparent 10%, rgba(5,5,5,0.7) 60%, rgba(5,5,5,0.98) 100%),
                      linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.3) 40%, transparent 100%);
          pointer-events: none;
        }

        .story-content-panel {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          padding: 80px 10% 80px 10%;
          box-sizing: border-box;
        }

        .story-text-container {
          max-width: 540px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Editorial Typography & Spacing */
        .story-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border: 1px solid rgba(193, 18, 31, 0.25);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(247, 245, 242, 0.85);
          background: rgba(193, 18, 31, 0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .story-meta-pill-dot {
          width: 5px;
          height: 5px;
          background-color: #C1121F;
          border-radius: 50%;
          box-shadow: 0 0 6px #C1121F;
        }

        .story-title-line {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5.5vw, 5.8rem);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #F7F5F2;
          margin: 0 0 8px 0;
        }

        .story-heading-script {
          font-family: 'Allura', cursive;
          background: linear-gradient(to bottom, #F7F5F2 20%, #E8A7A7 60%, #C1121F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          font-size: clamp(1.8rem, 3.2vw, 2.8rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          line-height: 1.1;
          text-transform: none;
          margin: 0 0 20px 0;
        }

        .story-description-para {
          font-family: 'Satoshi', var(--font-sans);
          font-size: clamp(0.9rem, 1.1vw, 1.05rem);
          line-height: 1.65;
          color: rgba(247, 245, 242, 0.65);
          margin: 0 0 28px 0;
          max-width: 460px;
        }

        .story-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .story-detail-pill {
          padding: 6px 12px;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .story-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 28px;
          background-color: #F7F5F2;
          color: #050505;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .story-explore-btn:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
        }

        .story-explore-btn .btn-arrow {
          transition: transform 0.3s ease;
        }

        .story-explore-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* ─── Mobile Media Query ────────────────────────────────────────── */
        @media (max-width: 1023px) {
          .story-vignette-overlay {
            background: linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.75) 50%, rgba(5,5,5,0.6) 100%);
          }

          .story-content-panel {
            padding: 80px 24px 60px 24px;
            align-items: flex-end;
          }

          .story-text-container {
            max-width: 100%;
          }

          .story-meta-pill {
            margin-bottom: 12px;
            padding: 4px 10px;
            font-size: 0.6rem;
          }

          .story-title-line {
            font-size: 2.5rem !important;
            margin-bottom: 4px;
          }

          .story-heading-script {
            font-size: 1.35rem !important;
            margin-bottom: 12px;
          }

          .story-description-para {
            font-size: 0.85rem !important;
            line-height: 1.55;
            margin-bottom: 20px;
            max-width: 100%;
          }

          .story-pills-row {
            margin-bottom: 24px;
            gap: 6px;
          }

          .story-detail-pill {
            padding: 4px 10px;
            font-size: 0.65rem;
          }

          .story-explore-btn {
            padding: 10px 22px;
            font-size: 0.75rem;
          }
        }
      `}</style>

      {/* Immersive Sticky Viewport */}
      <div ref={viewportRef} className="destinations-story-viewport">
        {destinations.map((dest, idx) => (
          <div
            key={`dest-story-${idx}`}
            ref={(el) => { cardRefs.current[idx] = el; }}
            className="destinations-story-card"
            style={{ zIndex: idx + 1 }}
          >
            {/* Immersive background image */}
            <img
              src={dest.image}
              alt={dest.countryName}
              loading={idx < 2 ? 'eager' : 'lazy'}
              className="story-bg-image"
            />
            {/* Vignette lighting overlay */}
            <div className="story-vignette-overlay" />

            {/* Editorial Story Panel */}
            <div className="story-content-panel">
              <div
                ref={(el) => { textContainerRefs.current[idx] = el; }}
                className="story-text-container"
              >
                <div className="story-animate-el story-meta-pill">
                  <span className="story-meta-pill-dot" />
                  <span>{dest.region}</span>
                </div>

                <h2 className="story-animate-el story-title-line">
                  {dest.countryName}
                </h2>
                
                <h3 className="story-animate-el story-heading-script">
                  {dest.heading}
                </h3>
                
                <p className="story-animate-el story-description-para">
                  {dest.description}
                </p>

                <div className="story-animate-el story-pills-row">
                  {dest.highlights.map((h, hidx) => (
                    <span key={hidx} className="story-detail-pill">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="story-animate-el story-button-row">
                  <a href="#contact" className="story-explore-btn">
                    <span>Explore Destination</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
