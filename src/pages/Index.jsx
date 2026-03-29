import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnnouncementMarquee from '../components/AnnouncementMarquee'
import ReviewSection from '../components/ReviewSection'

import heroImg1 from '../assets/serum/Guava Vitamin C .jpg'
import heroImg2 from '../assets/mosturizer/Cloud Berry.jpg'
import heroImg3 from '../assets/scrub/Sugared Sheacot.jpg'

import catGloss from '../assets/gloss/Red Berry.jpg'
import catMoisturizer from '../assets/mosturizer/Cloud Berry.jpg'
import catScrub from '../assets/scrub/Coffee Scrub.jpg'
import catSerum from '../assets/serum/Avocado Ceramide.jpg'
import catToner from '../assets/Toner/Rose Dew Toner.jpeg'
import founderImg from '../assets/founder.jpeg'

const Index = () => {
  const trio = [
    { src: heroImg1, alt: 'Bare N Blush — look one' },
    { src: heroImg2, alt: 'Bare N Blush — look two' },
    { src: heroImg3, alt: 'Bare N Blush — look three' },
  ]

  const showcaseCategories = [
    {
      id: 'gloss',
      title: 'Lip Gloss',
      desc: 'Achieve the perfect pout with our highly reflective, ultra-hydrating glosses. Formulated to keep your lips perfectly supple all day.',
      img: catGloss,
      path: '/products?category=gloss'
    },
    {
      id: 'mosturizer',
      title: 'Moisturizers',
      desc: 'Lock in deep hydration and repair your skin barrier with our beautifully light, cloud-like moisturisers.',
      img: catMoisturizer,
      path: '/products?category=mosturizer'
    },
    {
      id: 'scrub',
      title: 'Body Scrubs',
      desc: 'Buff away dullness and reveal glowing, smooth skin with our gentle and luxuriously scented exfoliators.',
      img: catScrub,
      path: '/products?category=scrub'
    },
    {
      id: 'serum',
      title: 'Face Serums',
      desc: 'Concentrated elixirs targeting specific skin concerns from dullness to anti-aging, dropping the perfect glow instantly.',
      img: catSerum,
      path: '/products?category=serum'
    },
    {
      id: 'toner',
      title: 'Toners',
      desc: 'Balance, prep, and refresh your skin with our lightweight, skin-loving toners — the essential step that makes every other product work harder.',
      img: catToner,
      path: '/products?category=toner'
    }
  ]

  return (
    <div className='flex min-h-dvh w-full flex-col bg-background pt-20 sm:pt-22 md:pt-24'>
      <AnnouncementMarquee />

      <section className='relative flex w-full max-w-none flex-1 flex-col justify-center px-4 pt-2 pb-6 sm:px-6 sm:pt-3 md:px-8 md:pt-3 lg:px-10 min-h-[90vh]'>
        <div className='pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-background via-platinum/50 to-background' />

        <div className='relative z-10 flex w-full max-w-none flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-8 xl:gap-12'>
          <div className='flex w-full min-h-0 flex-1 gap-2 sm:gap-3 md:gap-4 lg:order-1 lg:max-h-[min(72vh,760px)] lg:flex-[1.35]'>
            {trio.map((item) => (
              <div
                key={item.src}
                className='min-w-0 flex-1 overflow-hidden rounded-lg bg-card shadow-md ring-1 ring-primary/15'
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className='h-full min-h-[160px] w-full object-cover sm:min-h-[220px] lg:min-h-[min(68vh,720px)] lg:max-h-[min(72vh,760px)]'
                />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className='w-full max-w-xl shrink-0 text-left lg:order-2 lg:flex lg:w-auto lg:max-w-md lg:flex-col lg:justify-around xl:max-w-lg'
          >
            <h1 className='font-heading text-4xl font-semibold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl'>
              BARE.
              <br />
              BLUSH.
              <br />
              REPEAT.
            </h1>
            <Link
              to='/products'
              className='mt-8 inline-flex w-fit max-w-sm items-center justify-center rounded-full bg-cta px-8 py-3.5 font-body text-[13px] font-medium uppercase tracking-[0.2em] text-cta-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-cta/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cta/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-cta/40 sm:px-12 sm:py-4 sm:text-[15px] md:mt-20'
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEW: Alternating Category Showcase */}
      <section className="flex flex-col w-full">
        <div className="w-full text-center mb-4 mt-16 md:mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl font-bold text-foreground"
          >
            Our Products
          </motion.h2>
        </div>

        {showcaseCategories.map((cat, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={cat.id}
              className={`flex flex-col w-full py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden ${isEven ? 'bg-background' : 'bg-platinum'}`}
            >
              <div className={`mx-auto w-full max-w-[1440px] flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 w-full max-w-[500px] md:max-w-none"
                >
                  {/* Abstract art wrapper */}
                  <div className="relative mx-auto md:w-4/5">

                    {/* Floating blob top-right */}
                    <div className={`absolute -top-5 ${isEven ? '-right-5' : '-left-5'} h-24 w-24 rounded-full bg-primary/15 blur-2xl z-0`} />

                    {/* Floating blob bottom-left */}
                    <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} h-32 w-32 rounded-full bg-primary/10 blur-3xl z-0`} />

                    {/* Offset border frame */}
                    <div className={`absolute z-0 h-full w-full rounded-2xl border-2 border-primary/30 ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`} />

                    {/* Small dot accent */}
                    <div className={`absolute ${isEven ? '-left-3 top-1/2' : '-right-3 top-1/2'} z-10 flex flex-col gap-1.5`}>
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                      ))}
                    </div>

                    {/* Main image */}
                    <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-primary/10 aspect-[4/5]">
                      <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex-1 w-full flex flex-col items-center text-center md:items-start md:text-left max-w-xl md:max-w-none"
                >
                  <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
                    The Collection
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-md leading-relaxed">
                    {cat.desc}
                  </p>
                  <Link
                    to={cat.path}
                    className="inline-flex w-fit items-center justify-center rounded-full bg-cta px-10 py-4 font-body text-[14px] font-medium uppercase tracking-[0.15em] text-cta-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-cta/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cta/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-cta/40"
                  >
                    Shop {cat.title}
                  </Link>
                </motion.div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Founder's Note Section */}
      <section className="relative overflow-hidden bg-platinum/30 py-12 sm:py-16 lg:py-20">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
            
            {/* Image (Abstract treatment) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative w-full max-w-[400px] lg:max-w-none lg:w-[35%] shrink-0"
            >
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tl-none rounded-br-none shadow-2xl ring-1 ring-primary/20">
                <img 
                  src={founderImg} 
                  alt="Charul Mehta, Founder" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              {/* Abstract decorative elements */}
              <div className="absolute -left-6 -bottom-6 z-0 h-full w-full rounded-[2rem] rounded-tl-none rounded-br-none border-2 border-primary/40"></div>
              <div className="absolute -right-8 top-12 z-0 h-full w-full rounded-[2rem] rounded-tl-none rounded-br-none bg-primary/10"></div>
            </motion.div>

            {/* Content */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
               className="w-full lg:flex-1 lg:w-[65%] text-left"
            >
              <h2
                className="mb-6 sm:mb-10 text-3xl sm:text-4xl md:text-5xl text-primary leading-tight font-medium"
                style={{ fontFamily: 'var(--font-style, "Brush Script MT", cursive)' }}
              >
                From the Founder
              </h2>
              <div className="flex flex-col gap-4 sm:gap-6 text-foreground/85 text-sm sm:text-base md:text-lg leading-relaxed font-body font-light">
                <p>
                  Bare & Blush began as more than just an idea it started as a feeling I could not ignore. Growing up around business I always knew I wanted to create something of my own, not just another brand but something thoughtful and meaningful
                </p>
                <p>
                  Over time I noticed a pattern around me. So many people were investing in skincare yet still felt unsure. There were endless products and promises but very little clarity. I saw friends and family hesitate before trying something new worried it might not suit their skin or lead to breakouts acne or long term damage. Skincare which should feel comforting had become confusing and overwhelming
                </p>
                <p>
                  That is where Bare & Blush found its purpose
                </p>
                <p>
                  I wanted to create a space where skincare feels safe simple and reassuring. A brand that does not make you second guess your choices but instead helps you feel confident in them. Every product is designed with care gentle yet effective minimal yet meaningful made to work across different skin types while addressing concerns like pigmentation dark spots tanning and uneven texture
                </p>
                <p>
                  Bare & Blush is not about perfection it is about understanding your skin and giving it what it truly needs without fear or confusion
                </p>
                <p className="font-medium text-primary text-base sm:text-xl leading-relaxed mt-2">
                  At its heart this brand is a promise to make skincare feel soothing honest and beautifully effortless something you can trust every single day.
                </p>
              </div>

              <div className="mt-8 sm:mt-14 border-t border-primary/20 pt-6 sm:pt-8">
                <p className="font-heading text-2xl sm:text-3xl font-bold text-foreground">— Charul Mehta</p>
                <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mt-2">Founder, Bare & Blush</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <ReviewSection />

    </div>
  )
}

export default Index
