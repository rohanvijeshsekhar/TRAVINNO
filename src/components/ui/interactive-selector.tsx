import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Destination {
  id: string;
  countryName: string;
  region: string;
  heading: string;
  description: string;
  highlights: string[];
  image: string;
}

const BASE = import.meta.env.BASE_URL || '/';

const destinations: Destination[] = [
  {
    id: 'dubai',
    countryName: 'Dubai',
    region: 'Middle East',
    heading: 'A Mirage Built of Glass and Gold',
    description: 'A futuristic metropolis rising from the Arabian Desert, where luxury meets gravity-defying architecture and ancient sands border ultra-modern skylines.',
    highlights: ['Golden Dunes', 'Skyline Marvels', 'Desert Safaris'],
    image: `${BASE}images/destinations/dubai.webp`
  },
  {
    id: 'malaysia',
    countryName: 'Malaysia',
    region: 'Southeast Asia',
    heading: 'Where Ancient Rainforests Meet the Clouds',
    description: 'A harmonious blend of ancient equatorial jungles, vibrant modern cities, and pristine island sanctuaries preserved in timeless tranquility.',
    highlights: ['Rainforest Canopy', 'Heritage Towns', 'Tropical Bays'],
    image: `${BASE}images/destinations/malaysia.webp`
  },
  {
    id: 'thailand',
    countryName: 'Thailand',
    region: 'Southeast Asia',
    heading: 'The Sacred Land of Golden Temples',
    description: 'A spiritual tapestry of glittering golden pagodas, misty northern mountains, and warm hospitality that welcomes every traveler home.',
    highlights: ['Buddhist Temples', 'Misty Highlands', 'Emerald Isles'],
    image: `${BASE}images/destinations/thailand.webp`
  },
  {
    id: 'singapore',
    countryName: 'Singapore',
    region: 'Southeast Asia',
    heading: 'The Visionary Garden City of Tomorrow',
    description: 'A futuristic garden city where towering vertical ecosystems merge with cutting-edge urban design, Michelin gastronomy, and neon skies.',
    highlights: ['Supertree Groves', 'Eco-Architecture', 'Marina Vistas'],
    image: `${BASE}images/destinations/singapore.webp`
  },
  {
    id: 'bali',
    countryName: 'Bali',
    region: 'Indonesia',
    heading: 'The Mystical Island of the Gods',
    description: 'A sacred volcanic island defined by emerald terraced rice fields, ancient stone temples, and a deep-rooted spiritual calm.',
    highlights: ['Sacred Temples', 'Rice Terraces', 'Surf Coastlines'],
    image: `${BASE}images/destinations/bali.webp`
  },
  {
    id: 'kenya',
    countryName: 'Kenya',
    region: 'East Africa',
    heading: 'The Untamed Heart of the Wilderness',
    description: 'The cradle of nature where the legendary Great Migration sweeps across vast golden savannahs under endless African horizons.',
    highlights: ['Great Migration', 'Savannah Safaris', 'Tribal Heritage'],
    image: `${BASE}images/destinations/kenya.webp`
  },
  {
    id: 'vietnam',
    countryName: 'Vietnam',
    region: 'Southeast Asia',
    heading: 'A Tapestry of Rivers, Mist, and History',
    description: 'An enchanting land of emerald waterways, limestone cliffs rising from serene bays, and ancient towns lit by glowing lanterns.',
    highlights: ['Ha Long Bay', 'Ancient Lanterns', 'Scenic Deltas'],
    image: `${BASE}images/destinations/vietnam.webp`
  }
];

export default function InteractiveSelector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx: any;
    let loaderListener: any;
    let rafId1 = 0;
    let rafId2 = 0;

    const initScrollTrigger = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
      const textPanels = textRefs.current.filter((t): t is HTMLDivElement => t !== null);
      if (cards.length === 0) return;

      ctx = gsap.context(() => {
        // Set initial positions: first card is active, others start off-screen
        cards.forEach((card, idx) => {
          if (idx === 0) {
            gsap.set(card, { yPercent: 0, opacity: 1, scale: 1 });
          } else {
            gsap.set(card, { yPercent: 100, opacity: 0, scale: 1.05 });
          }
        });

        // Set initial text animations: first card's texts are up, others are translated down
        textPanels.forEach((panel, idx) => {
          const elements = panel.querySelectorAll('.story-animate-el');
          if (idx === 0) {
            gsap.set(elements, { y: 0, opacity: 1 });
          } else {
            gsap.set(elements, { y: 30, opacity: 0 });
          }
        });

        // Single master timeline linked to ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${window.innerHeight * (destinations.length - 0.5)}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });

        const stepDuration = 1.0;
        const staggerDelay = 0.8;

        for (let i = 1; i < cards.length; i++) {
          const startTime = (i - 1) * staggerDelay;

          // Outgoing card (i-1): Recedes into background
          tl.to(cards[i - 1], {
            yPercent: -15,
            scale: 0.94,
            opacity: 0,
            duration: stepDuration,
            ease: 'power2.inOut'
          }, startTime);

          // Outgoing text elements (i-1): Fade and slide up
          const oldTextEls = textPanels[i - 1].querySelectorAll('.story-animate-el');
          tl.to(oldTextEls, {
            y: -25,
            opacity: 0,
            stagger: 0.05,
            duration: stepDuration * 0.6,
            ease: 'power2.in'
          }, startTime);

          // Incoming card (i): Slides up and settles in
          tl.fromTo(cards[i],
            { yPercent: 100, opacity: 0, scale: 1.05 },
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              duration: stepDuration,
              ease: 'power2.inOut',
              force3D: true
            },
            startTime
          );

          // Incoming text elements (i): Fade and slide up to center
          const newTextEls = textPanels[i].querySelectorAll('.story-animate-el');
          tl.fromTo(newTextEls,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              duration: stepDuration * 0.7,
              ease: 'power2.out'
            },
            startTime + 0.35
          );
        }

        // Final hold buffer so the last card remains visible before unpinning
        tl.to({}, { duration: 0.5 });
      }, containerRef);

      // Force ScrollTrigger to measure dimensions after layout paint
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
    <div ref={containerRef} className="destinations-story-wrapper">
      <style>{`
        .destinations-story-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          background-color: #050505;
          box-sizing: border-box;
          overflow: visible;
        }

        .destinations-story-viewport {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: #050505;
        }

        .destinations-story-card {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Large immersive background imagery */
        .story-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        /* Editorial Vignette Overlay */
        .story-vignette-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 50%, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.85) 50%, rgba(5,5,5,0.95) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Content panels and layouts */
        .story-content-panel {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          max-width: 1300px;
          margin: 0 auto;
          box-sizing: border-box;
          padding: 80px 24px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .story-text-container {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Premium Typography & Spacing */
        .story-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border: 1px solid rgba(193, 18, 31, 0.25);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: rgba(245, 242, 236, 0.7);
          background: rgba(193, 18, 31, 0.03);
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .story-meta-pill-dot {
          width: 4px;
          height: 4px;
          background-color: #C1121F;
          border-radius: 50%;
          display: inline-block;
        }

        .story-title-line {
          font-family: var(--font-sans);
          font-size: clamp(2.5rem, 5vw, 4.8rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #F5F2EC;
          margin-bottom: 8px;
        }

        .story-heading-script {
          font-family: 'Canela', var(--font-heading);
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 400;
          color: #E8A7A7;
          margin-bottom: 20px;
          line-height: 1.2;
          font-style: italic;
        }

        .story-description-para {
          font-family: 'Satoshi', var(--font-sans);
          font-size: clamp(0.9rem, 1.4vw, 1.15rem);
          line-height: 1.6;
          color: rgba(245, 242, 236, 0.6);
          margin-bottom: 32px;
          max-width: 520px;
        }

        .story-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
        }

        .story-detail-pill {
          padding: 6px 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: rgba(245, 242, 236, 0.85);
          background-color: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(8px);
        }

        .story-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background-color: #F5F2EC;
          color: #050505;
          border-radius: 100px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .story-explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(245, 242, 236, 0.2);
        }

        .story-explore-btn .btn-arrow {
          transition: transform 0.3s ease;
        }

        .story-explore-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Mobile-First Layout Rules */
        @media (max-width: 1023px) {
          .destinations-story-wrapper {
            height: 100vh !important;
            height: 100dvh !important;
          }

          .story-vignette-overlay {
            background: linear-gradient(to top, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.8) 50%, rgba(5,5,5,0.7) 100%);
          }

          .story-content-panel {
            padding: 48px 20px;
            align-items: flex-end;
          }

          .story-text-container {
            max-width: 100%;
          }

          .story-meta-pill {
            margin-bottom: 12px;
          }

          .story-title-line {
            font-size: 2.2rem !important;
            margin-bottom: 4px;
          }

          .story-heading-script {
            font-size: 1.15rem !important;
            margin-bottom: 12px;
          }

          .story-description-para {
            font-size: 0.85rem !important;
            line-height: 1.5;
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
            padding: 10px 20px;
            font-size: 0.72rem;
          }
        }
      `}</style>

      {/* Immersive Sticky Viewport */}
      <div className="destinations-story-viewport">
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
                ref={(el) => { textRefs.current[idx] = el; }}
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
                    <span>Explore Story</span>
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
