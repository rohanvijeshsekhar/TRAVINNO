import React from 'react';
import { motion } from 'framer-motion';

const ROW_1_TESTIMONIALS = [
  {
    text: "Our Singapore corporate retreat was planned down to the millisecond. The Gardens by the Bay dining experience was breathtaking. Absolute perfection in DMC management.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Sarah Jenkins",
    company: "Global Events Director, TechCorp (UK)",
  },
  {
    text: "A bespoke Kenya safari that exceeded every luxury expectation. Waking up to giraffes framing our private camp is a memory our executives will cherish forever.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "David Vance",
    company: "Managing Director, Peak Capital (USA)",
  },
  {
    text: "The transition from the modern Singapore skyline to Bali's tranquil rice terraces was completely seamless. Travinno's local guides are extraordinary.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Elena Rostova",
    company: "Private Travel Designer (Switzerland)",
  },
  {
    text: "Operational excellence at its finest. Managing an incentive group of 150 across Dubai and Malaysia was flawless, all thanks to the local expertise of Travinno.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Marcus Thorn",
    company: "Incentive Travel Director, Apex Group (Canada)",
  }
];

const ROW_2_TESTIMONIALS = [
  {
    text: "Their attention to detail and relationships with high-end resorts in Thailand and Bali made our luxury wellness summit a resounding success.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Zainab Al-Mansoori",
    company: "Founder, Retreats Elite (UAE)",
  },
  {
    text: "Flawless logistics, curated local dining, and exceptional luxury vessels. Every detail is handled with absolute professionalism and discretion.",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Christian Dumont",
    company: "Directeur Voyage, Elite Club (France)",
  },
  {
    text: "As a private travel designer, my clients demand the absolute best. Travinno delivers extraordinary journeys with absolute precision, every single time.",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    name: "Aiko Tanaka",
    company: "Bespoke Travel Consultant (Japan)",
  },
  {
    text: "A masterclass in luxury destination management. From the helicopter transfers to private island buyouts, their execution is flawless.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Rupert Sterling",
    company: "CEO, Sterling Concierge (Australia)",
  }
];

function TestimonialCard({ text, image, name, company }) {
  return (
    <div className="new-testimonial-card">
      <span className="new-testimonial-quote">“</span>
      <div className="new-testimonial-header">
        <img
          src={image}
          alt={name}
          className="new-testimonial-avatar"
          loading="lazy"
        />
        <div className="new-testimonial-info">
          <div className="new-testimonial-name">{name}</div>
          <div className="new-testimonial-company">{company}</div>
        </div>
      </div>
      <div className="new-testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="new-testimonial-star">★</span>
        ))}
      </div>
      <p className="new-testimonial-text">{text}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="new-testimonials-section" id="insights">
      <div className="new-testimonials-grid-bg" />
      <div className="section-blend-overlay blend-to-05" />

      <div className="new-testimonials-container">
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="new-testimonials-header"
        >
          <div className="new-testimonials-pill-wrapper">
            <div className="new-testimonials-pill">Testimonials</div>
          </div>

          <h2 className="new-testimonials-title">
            Exceptional Stories
          </h2>
          <p className="new-testimonials-subtitle">
            Discover what travel designers and corporate planners say about our extraordinary journeys.
          </p>
        </motion.div>

        {/* Horizontal Testimonials Wall */}
        <div className="testimonials-wall">
          {/* Top Row: Right to Left */}
          <div className="testimonial-row-container">
            <div className="testimonial-marquee-track right-to-left">
              {[...ROW_1_TESTIMONIALS, ...ROW_1_TESTIMONIALS].map((item, idx) => (
                <TestimonialCard key={`row1-${idx}`} {...item} />
              ))}
            </div>
          </div>

          {/* Bottom Row: Left to Right */}
          <div className="testimonial-row-container">
            <div className="testimonial-marquee-track left-to-right">
              {[...ROW_2_TESTIMONIALS, ...ROW_2_TESTIMONIALS].map((item, idx) => (
                <TestimonialCard key={`row2-${idx}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
