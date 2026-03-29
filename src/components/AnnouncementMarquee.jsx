import React from "react";

const defaultItems = [
  { text: "Free shipping on orders above ₹999" },
  { text: "Clean • Minimal • Effective", italic: true },
  { text: "New Summer Essentials Live Now" },
];

// Reusable strip component
const MessageStrip = ({ items }) => (
  <>
    {items.map((item, i) => (
      <React.Fragment key={`${item.text}-${i}`}>
        <span className="inline-flex shrink-0 items-center px-4 text-[13px] font-medium tracking-wide text-primary sm:px-8 sm:text-sm md:text-[15px]">
          {item.italic ? (
            <em className="font-medium">{item.text}</em>
          ) : (
            item.text
          )}
        </span>

        {i < items.length - 1 && (
          <span className="shrink-0 text-primary/30 sm:px-2" aria-hidden>
            ·
          </span>
        )}
      </React.Fragment>
    ))}
  </>
);

/**
 * Full-width scrolling announcement bar
 */
const AnnouncementMarquee = ({ items = defaultItems }) => {
  return (
    <div className="w-full overflow-hidden border-b border-border bg-white">
      <div className="relative py-2.5 sm:py-3">
        <div className="flex w-max animate-announcement-marquee font-body">
          
          {/* First strip */}
          <div className="flex shrink-0 items-center">
            <MessageStrip items={items} />
          </div>

          {/* Duplicate strip for infinite scroll */}
          <div className="flex shrink-0 items-center" aria-hidden>
            <MessageStrip items={items} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnnouncementMarquee;