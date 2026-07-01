import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Slow Travel in Kenya',
    category: 'Expeditions',
    readTime: '5 min read',
    date: 'June 28, 2026',
    image: 'images/destinations/kenya.webp',
    description: 'An editorial guide on experiencing the untamed beauty of East Africa at a refined, deliberate pace.'
  },
  {
    id: 2,
    title: 'Navigating the Sacred Sanctuaries of Bali',
    category: 'Culture',
    readTime: '6 min read',
    date: 'June 15, 2026',
    image: 'images/destinations/bali.webp',
    description: "Discovering the hidden water temples and spiritual heritage of Indonesia's most mystical island."
  },
  {
    id: 3,
    title: 'Vietnam’s Culinary Secrets: A Connoisseur’s Diary',
    category: 'Gastronomy',
    readTime: '8 min read',
    date: 'May 30, 2026',
    image: 'images/destinations/vietnam.webp',
    description: "An intimate journey through Kaiseki dining and the ancient tea ceremonies of Vietnam's cultural heart."
  },
  {
    id: 4,
    title: 'Bespoke Yachting Across Thailand’s Islands',
    category: 'Escapes',
    readTime: '4 min read',
    date: 'May 12, 2026',
    image: 'images/destinations/thailand.webp',
    description: 'Sailing the dramatic cliffs and azure coves of southern Thailand on a custom-designed private charter.'
  },
  {
    id: 5,
    title: 'Modern Architecture Whispers in Singapore',
    category: 'Metropolis',
    readTime: '5 min read',
    date: 'April 22, 2026',
    image: 'images/destinations/singapore.webp',
    description: "Exploring the futuristic skyline and lush green skyscrapers of Southeast Asia's ultimate metropolis."
  },
  {
    id: 6,
    title: 'Bespoke Luxury Retreats in Dubai',
    category: 'Hotels',
    readTime: '7 min read',
    date: 'April 05, 2026',
    image: 'images/destinations/dubai.webp',
    description: 'A curated collection of the most extraordinary penthouse desert escapes and private island resorts.'
  }
];

export default function BlogPage() {
  const viewportRef = useRef(null);

  const scrollLeft = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#F5F2EC', width: '100%', minHeight: '100vh', position: 'relative', overflowX: 'hidden', boxSizing: 'border-box' }}>
      <style>{`
        .blog-container {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          padding: 160px 24px 120px 24px;
          box-sizing: border-box;
        }

        .carousel-viewport {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-behavior: smooth;
          padding: 16px 4px 32px 4px;
          margin-top: 12px;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE/Edge */
        }
        .carousel-viewport::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .premium-square-card {
          flex: 0 0 calc(25% - 18px);
          min-width: 270px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, rgba(16, 16, 20, 0.75) 0%, rgba(10, 10, 12, 0.95) 100%);
          border: 1px solid rgba(245, 242, 236, 0.08);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03), 0 12px 30px rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          cursor: pointer;
          aspect-ratio: 1 / 1.12;
          position: relative;
        }

        .premium-square-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 20%, rgba(193, 18, 31, 0.02) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .premium-square-card:hover {
          border-color: rgba(193, 18, 31, 0.6);
          background: linear-gradient(180deg, rgba(24, 24, 30, 0.85) 0%, rgba(15, 15, 18, 0.98) 100%);
          transform: translateY(-6px);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            0 20px 40px rgba(0, 0, 0, 0.65),
            0 0 40px rgba(193, 18, 31, 0.06);
        }

        .card-image-wrapper {
          width: 100%;
          height: 48%;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid rgba(245, 242, 236, 0.06);
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(90%) brightness(70%);
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .premium-square-card:hover .card-image-wrapper img {
          transform: scale(1.08);
          filter: grayscale(100%) contrast(100%) brightness(85%);
        }

        .card-info-content {
          padding: 18px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          z-index: 1;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 0.68rem;
          color: rgba(245, 242, 236, 0.45);
          margin-bottom: 4px;
        }

        .card-category {
          color: #C1121F;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 1.08rem;
          font-weight: 450;
          color: #F5F2EC;
          margin: 0 0 8px 0;
          line-height: 1.35;
          letter-spacing: -0.1px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .premium-square-card:hover .card-title {
          color: #FFFFFF;
        }

        .card-desc {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          line-height: 1.45;
          color: rgba(245, 242, 236, 0.6);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 300;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 0.68rem;
          color: rgba(245, 242, 236, 0.4);
          font-family: var(--font-sans);
        }

        .card-action-arrow {
          display: flex;
          align-items: center;
          color: rgba(245, 242, 236, 0.6);
          transition: all 0.3s ease;
        }

        .premium-square-card:hover .card-action-arrow {
          color: #C1121F;
          transform: translateX(4px);
        }

        .slider-control-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(245, 242, 236, 0.12);
          background-color: rgba(10, 10, 12, 0.5);
          color: #F5F2EC;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .slider-control-btn:hover {
          border-color: #C1121F;
          color: #FFFFFF;
          background-color: rgba(193, 18, 31, 0.12);
        }

        @media (max-width: 1200px) {
          .premium-square-card {
            flex: 0 0 calc(33.333% - 16px);
          }
        }

        @media (max-width: 900px) {
          .premium-square-card {
            flex: 0 0 calc(50% - 12px);
          }
          .hero-artwork-container {
            width: 100% !important;
            height: 520px !important;
            right: 0 !important;
            top: 0 !important;
            transform: none !important;
            mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%) !important;
          }
          .hero-artwork-container img {
            opacity: 0.45 !important;
            border-radius: 0px !important;
          }
        }

        @media (max-width: 600px) {
          .premium-square-card {
            flex: 0 0 100%;
          }
        }
      `}</style>

      {/* Base solid black background layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#050505',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Grid lines overlay layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245, 242, 236, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 242, 236, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px',
          backgroundRepeat: 'repeat, repeat',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Subtle Background/Foreground Editorial Hero Artwork */}
      <div
        className="hero-artwork-container"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '54%',
          height: '580px',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 70%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 70%)'
        }}
      >
        {/* Subtle Floating Movement wrapper */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative'
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/blog_hero.png`}
            alt="Travel Planning Editorial"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.38,
              filter: 'grayscale(100%) contrast(80%) brightness(65%)',
              transition: 'opacity 0.5s ease',
              WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
            }}
          />
        </motion.div>
      </div>

      <div className="blog-container">
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: '48px', position: 'relative' }}>
          
          <div style={{ maxWidth: '640px', position: 'relative', zIndex: 3 }}>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                border: '1px solid rgba(193, 18, 31, 0.18)',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'rgba(245, 242, 236, 0.85)',
                marginBottom: '16px',
                background: 'rgba(193, 18, 31, 0.05)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#C1121F',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
              />
              BLOG
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 450,
                lineHeight: 1.15,
                color: '#F5F2EC',
                margin: '0 0 16px 0',
                letterSpacing: '-0.5px'
              }}
            >
              Travel Knowledge <br />
              <span
                style={{
                  fontFamily: "'Allura', cursive",
                  fontSize: '1.25em',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.2',
                  display: 'inline-block',
                  marginTop: '-4px',
                  paddingBottom: '0px',
                  background: 'linear-gradient(to bottom, #F5F2EC 20%, #E8A7A7 60%, #C1121F 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                & Storytelling
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.65,
                color: '#F5F2EC',
                margin: 0,
                maxWidth: '680px',
                fontWeight: 300
              }}
            >
              Reflections, guides and perspectives on the art of luxury travel and destination planning.
            </motion.p>
          </div>
        </section>

        {/* ARTICLES SECTION */}
        <section style={{ position: 'relative' }}>
          
          {/* Section Header with Left Badge and Right Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                border: '1px solid rgba(193, 18, 31, 0.18)',
                borderRadius: '100px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'rgba(245, 242, 236, 0.85)',
                background: 'rgba(193, 18, 31, 0.05)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#C1121F',
                  borderRadius: '50%',
                  display: 'inline-block'
                }}
              />
              Latest Editorial
            </motion.div>

            {/* Slider control arrows */}
            <div style={{ display: 'flex', gap: '10px', zIndex: 10 }}>
              <button
                onClick={scrollLeft}
                aria-label="Previous posts"
                className="slider-control-btn"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next posts"
                className="slider-control-btn"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal scrolling track */}
          <div className="carousel-viewport" ref={viewportRef}>
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className="premium-square-card"
              >
                <div className="card-image-wrapper">
                  <img
                    src={`${import.meta.env.BASE_URL}${post.image}`}
                    alt={post.title}
                  />
                </div>
                <div className="card-info-content">
                  <div>
                    <div className="card-meta">
                      <span className="card-category">{post.category}</span>
                      <span style={{ fontSize: '0.7rem' }}>{post.readTime}</span>
                    </div>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-desc">{post.description}</p>
                  </div>
                  <div className="card-footer">
                    <span>{post.date}</span>
                    <div className="card-action-arrow">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}
