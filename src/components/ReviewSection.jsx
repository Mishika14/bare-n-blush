import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'Priya S.',
    location: 'Mumbai',
    rating: 5,
    product: 'Citrus Glow Serum',
    date: 'March 2025',
    text: "I've been using this serum for about 6 weeks now and honestly my skin has never looked this bright. My dark spots from old acne have visibly faded and my mom actually asked if I'd done something different. Totally worth every rupee.",
    avatar: 'P',
    avatarColor: 'bg-rose-200 text-rose-700',
  },
  {
    id: 2,
    name: 'Aarav M.',
    location: 'Delhi',
    rating: 5,
    product: 'Coffee Scrub',
    date: 'February 2025',
    text: "Okay I was completely skeptical about buying a scrub online but the Coffee Scrub is genuinely incredible. My skin feels like silk after every use. The smell is also amazing, like a warm café. My girlfriend started stealing it so I had to order two.",
    avatar: 'A',
    avatarColor: 'bg-amber-200 text-amber-700',
  },
  {
    id: 3,
    name: 'Sneha R.',
    location: 'Bangalore',
    rating: 4,
    product: 'Cloud Kiss Moisturizer',
    date: 'March 2025',
    text: "Perfect for my oily skin! It absorbs so fast and doesn't leave any sticky residue like most moisturisers do. I apply it in the morning and my skin stays comfortable all day. Taking off one star only because I wish the tube was a bit bigger for the price.",
    avatar: 'S',
    avatarColor: 'bg-purple-200 text-purple-700',
  },
  {
    id: 4,
    name: 'Kavya T.',
    location: 'Pune',
    rating: 5,
    product: 'Rose Dew Toner',
    date: 'January 2025',
    text: "This toner has become non-negotiable in my routine. It smells absolutely divine and my skin feels so calm and soft after using it. I have really sensitive skin that reacts to everything and this has caused zero irritation. Bare & Blush really understands skin.",
    avatar: 'K',
    avatarColor: 'bg-pink-200 text-pink-700',
  },
  {
    id: 5,
    name: 'Nisha V.',
    location: 'Hyderabad',
    rating: 5,
    product: 'Mauve Floss Lip Gloss',
    date: 'March 2025',
    text: "The shade is STUNNING — it works on my dusky skin tone so beautifully. I get compliments every time I wear it. It's not sticky at all and lasts a surprising amount of time. Already ordered the Berrilicious one too!",
    avatar: 'N',
    avatarColor: 'bg-teal-200 text-teal-700',
  },
  {
    id: 6,
    name: 'Diya P.',
    location: 'Chennai',
    rating: 4,
    product: 'Strawberry Milk Serum',
    date: 'February 2025',
    text: "Light, absorbs quickly, smells amazing and my skin texture has genuinely improved. I pair it with the Rose Dew Toner and the Cloud Kiss Moisturiser and my skincare routine finally feels complete. Would love a larger bottle option though!",
    avatar: 'D',
    avatarColor: 'bg-red-200 text-red-700',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
    className="flex flex-col gap-4 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-primary/10 hover:shadow-md hover:ring-primary/25 transition-all duration-300"
  >
    {/* Stars + product */}
    <div className="flex items-start justify-between gap-2">
      <StarRating rating={review.rating} />
      <span className="shrink-0 rounded-full bg-primary/8 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
        {review.product}
      </span>
    </div>

    {/* Review text */}
    <p className="flex-1 text-sm leading-relaxed text-foreground/80 font-body">
      "{review.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-2 border-t border-border">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${review.avatarColor}`}>
        {review.avatar}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{review.name}</p>
        <p className="text-xs text-muted-foreground">{review.location} · {review.date}</p>
      </div>
    </div>
  </motion.div>
);

const ReviewSection = () => {
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            What Our Customers Say
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Loved by Real Skin
          </h2>
          {/* Average rating summary */}
          <div className="flex items-center gap-3 mt-2">
            <span className="font-heading text-5xl font-bold text-primary">{averageRating}</span>
            <div className="flex flex-col items-start gap-1">
              <StarRating rating={5} />
              <span className="text-xs text-muted-foreground">{reviews.length} verified reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewSection;
