import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Shield, Sparkles, ArrowRight } from 'lucide-react';

import founderImg from '../assets/founder.jpeg';
import heroSectionImg from '../assets/hero-section.png';
import serumImg from '../assets/serum/Citrus Glow.jpg';
import moisturizerImg from '../assets/mosturizer/Cloud Kiss.jpg';
import scrubImg from '../assets/scrub/Coffee Scrub.jpg';
import tonerImg from '../assets/Toner/Rose Dew Toner.jpeg';

/* ---------- DATA ---------- */
const pillars = [
  {
    icon: Leaf,
    title: 'Clean Ingredients',
    desc: 'We handpick every ingredient for a purpose. No fillers, no harmful chemicals — just what your skin actually needs.',
    color: 'bg-green-50 text-green-700 ring-green-200',
  },
  {
    icon: Shield,
    title: 'Skin Safe, Always',
    desc: 'Dermatologist-reviewed formulas designed to be gentle on all skin types, including sensitive and acne-prone skin.',
    color: 'bg-blue-50 text-blue-700 ring-blue-200',
  },
  {
    icon: Heart,
    title: 'Made with Intention',
    desc: 'Every product begins with a question: what does real skin truly need? The answer shapes everything we create.',
    color: 'bg-rose-50 text-rose-700 ring-rose-200',
  },
  {
    icon: Sparkles,
    title: 'Effortless Glow',
    desc: 'Skincare doesn\'t need to be complicated. We believe the best routines are the ones you actually stick to.',
    color: 'bg-amber-50 text-amber-700 ring-amber-200',
  },
];

const stats = [
  { number: '20+', label: 'Products crafted with care' },
  { number: '5K+', label: 'Happy customers' },
  { number: '100%', label: 'Cruelty-free formulas' },
  { number: '0', label: 'Harmful chemicals' },
];

const productShowcase = [
  { img: serumImg, label: 'Face Serums' },
  { img: moisturizerImg, label: 'Moisturizers' },
  { img: scrubImg, label: 'Body Scrubs' },
  { img: tonerImg, label: 'Toners' },
];

/* ---------- COMPONENTS ---------- */
const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.75, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ---------- PAGE ---------- */
const About = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex min-h-dvh w-full flex-col bg-background">

      {/* ── HERO ─────────────────────────────────────── */}
      <section ref={heroRef} className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src={heroSectionImg}
            alt="Bare N Blush hero"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-background" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col items-center px-6 pt-28 text-center"
        >
          <FadeUp delay={0.1}>
            <span className="mb-4 inline-block rounded-full bg-primary-foreground/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm ring-1 ring-primary-foreground/30">
              Our Story
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="font-heading max-w-3xl text-5xl font-bold leading-tight text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Skin That Feels
              <span className="block italic font-medium">Like You.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Bare & Blush was built on a simple belief: skincare should feel comforting, not confusing.
            </p>
          </FadeUp>
          <FadeUp delay={0.5}>
            <Link
              to="/products"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
          </FadeUp>

          {/* Scroll cue */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-20 flex flex-col items-center gap-2 text-primary-foreground/50"
          >
            <div className="h-10 w-[1px] bg-primary-foreground/30" />
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── BRAND MISSION ───────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-28">
            {/* Left: stacked photos */}
            <FadeUp className="relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Background card */}
                <div className="absolute left-8 top-8 h-full w-full rounded-3xl bg-platinum" />
                {/* Main photo */}
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-primary/10 aspect-[3/4]">
                  <img src={founderImg} alt="Founder" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                </div>
                {/* Floating stat pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-6 -right-4 z-20 flex items-center gap-3 rounded-2xl bg-background px-5 py-3 shadow-xl ring-1 ring-primary/10"
                >
                  <Heart className="text-primary" size={22} fill="currentColor" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Loved by</p>
                    <p className="font-heading text-xl font-bold text-foreground">5K+ customers</p>
                  </div>
                </motion.div>
              </div>
            </FadeUp>

            {/* Right: text */}
            <div className="flex flex-col gap-6">
              <FadeUp delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who We Are</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
                  Born from a gap we couldn't ignore.
                </h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  The beauty market is full of products that overwhelm more than they help. Bare & Blush exists to change that. We started with one question: what would skincare look like if it put your actual skin first?
                </p>
              </FadeUp>
              <FadeUp delay={0.35}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Every product is crafted to be gentle, effective, and honest — minimal complexity, maximum comfort. Whether you're battling pigmentation, dryness, or just want a reliable daily ritual, we've got you.
                </p>
              </FadeUp>
              <FadeUp delay={0.45}>
                <Link
                  to="/products"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-cta px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-cta-foreground transition-all hover:-translate-y-0.5 hover:bg-cta/90"
                >
                  Shop the Range <ArrowRight size={15} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PILLARS ──────────────────────────────── */}
      <section className="bg-platinum py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <FadeUp className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What We Stand For</span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              The Bare & Blush Promise
            </h2>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="flex flex-col gap-4 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-primary/8 hover:shadow-md transition-shadow"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.color} ring-1`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────── */}
      <section className="border-y border-border bg-background py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="font-heading text-5xl font-extrabold text-primary">{stat.number}</span>
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT MOSAIC ──────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <FadeUp className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">The Collection</span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground sm:text-5xl">
              A range built for real life.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {productShowcase.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl shadow-md"
                style={{ aspectRatio: i === 0 || i === 3 ? '3/4' : '3/4' }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-heading text-lg font-bold text-primary-foreground">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-cta-foreground shadow-lg shadow-cta/20 transition-all hover:-translate-y-1 hover:bg-cta/90 hover:shadow-cta/30"
            >
              Shop Everything <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── CLOSING MANIFESTO ───────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-28 sm:py-36 text-center">
        {/* Abstract blobs */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <FadeUp>
            <p className="font-heading text-4xl font-medium leading-snug text-primary-foreground sm:text-5xl md:text-6xl">
              "Skincare should feel like a gift to yourself, not a chore."
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="mt-8 text-base text-primary-foreground/70">
              — Charul Mehta, Founder of Bare & Blush
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <Link
              to="/products"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              Start Your Ritual <ArrowRight size={15} />
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default About;
