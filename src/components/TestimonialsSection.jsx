import React from 'react';
import { motion } from 'framer-motion';

const testimonialsLeft = [
  {
    quote: "Working with Travinno has consistently exceeded our expectations. Their professionalism and local expertise make every journey effortless.",
    name: "Sarah Williams",
    company: "Travel Consultant",
    country: "United Kingdom"
  },
  {
    quote: "Their MICE execution is outstanding. We had 200 high-profile guests, and the coordination was flawless down to the last minute.",
    name: "Marcus Dupont",
    company: "Director of Operations, Elite Events",
    country: "France"
  },
  {
    quote: "The ground handling across Asia is exceptional. Our luxury travelers expect perfection, and Travinno delivers it every single time.",
    name: "Elena Rostova",
    company: "Leisure Travel Manager",
    country: "Germany"
  },
  {
    quote: "A truly responsive team that designs curated itineraries that showcase the absolute best of local culture and hospitality.",
    name: "Kenji Sato",
    company: "Bespoke Planner, Japan Luxury Travel",
    country: "Japan"
  }
];

const testimonialsRight = [
  {
    quote: "They understand the nuances of ultra-luxury. From private yacht bookings to exclusive access, Travinno makes the impossible happen.",
    name: "Charlotte Vance",
    company: "Vance & Co Luxury Travel",
    country: "USA"
  },
  {
    quote: "Our corporate partners were blown away by the level of service during our executive retreat. A highly professional partner.",
    name: "David Chen",
    company: "Managing Director, Global Ventures",
    country: "Singapore"
  },
  {
    quote: "Proactive communication, transparent pricing, and unparalleled local connections. They are our go-to DMC.",
    name: "Alessandro Rossi",
    company: "Founder, Italia Extraordinary",
    country: "Italy"
  },
  {
    quote: "A seamless collaboration from start to finish. Their attention to detail keeps our VIP clients coming back year after year.",
    name: "Amelia Thomson",
    company: "Elite Journeys",
    country: "Australia"
  }
];

function TestimonialCard({ quote, name, company, country, className = "" }) {
  return (
    <div className={`testimonial-premium-card ${className}`}>
      <span className="testimonial-quote-mark">“</span>
      <blockquote className="testimonial-quote-text">{quote}”</blockquote>
      <div className="testimonial-author-info">
        <div className="testimonial-author-name">{name}</div>
        <div className="testimonial-author-meta">
          {company} &bull; {country}
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({ items, reverse = false }) {
  return (
    <div className="testimonials-marquee-col">
      <div className={`testimonials-column-track ${reverse ? 'scroll-down' : 'scroll-up'}`}>
        {/* First list */}
        {items.map((item, idx) => (
          <TestimonialCard key={`orig-${idx}`} {...item} />
        ))}
        {/* Duplicate list for seamless infinite loop (hidden on mobile) */}
        {items.map((item, idx) => (
          <TestimonialCard key={`dup-${idx}`} {...item} className="duplicate-card" />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-premium-section" id="insights">
      <div className="testimonials-premium-container">
        {/* Section Intro */}
        <div className="testimonials-premium-header">
          <motion.span
            className="testimonials-premium-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="testimonials-premium-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            Trusted By<br />
            Travel Professionals<br />
            Worldwide
          </motion.h2>
          <motion.p
            className="testimonials-premium-intro"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Real experiences from travel partners who trust Travinno to deliver exceptional destination management services.
          </motion.p>
        </div>

        {/* Dual-Column Infinite Scroll Viewport */}
        <motion.div
          className="testimonials-premium-viewport"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Fading Edge Overlays */}
          <div className="testimonials-fade-overlay-top" />
          <div className="testimonials-fade-overlay-bottom" />

          {/* Columns */}
          <div className="testimonials-dual-columns">
            <MarqueeColumn items={testimonialsLeft} />
            <MarqueeColumn items={testimonialsRight} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
