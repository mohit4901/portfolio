import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// A single icon component with its own motion logic
const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}) => {
  const ref = React.useRef(null);

  // Motion values for the icon's position, with spring physics for smooth movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        // If the cursor is close enough, repel the icon
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('absolute', iconData.className)}
    >
      {/* Inner wrapper for the continuous floating animation */}
      <motion.div
        className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 p-2 sm:p-3 rounded-2xl md:rounded-3xl shadow-2xl bg-zinc-950/80 backdrop-blur-md border border-white/5"
        animate={{
          y: [0, -6, 0, 6, 0],
          x: [0, 4, 0, -4, 0],
          rotate: [0, 4, 0, -4, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
      </motion.div>
    </motion.div>
  );
};

// Infinite scrolling marquee row using Framer Motion
const MarqueeRow = ({ items, direction = 1, speed = 40 }) => {
  const repeatedItems = [...items, ...items];
  return (
    <div className="flex whitespace-nowrap overflow-hidden w-full select-none py-1.5 md:py-3">
      <motion.div
        initial={{ x: direction === 1 ? "0%" : "-50%" }}
        animate={{ x: direction === 1 ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex gap-20 text-6xl md:text-[7.5rem] font-black uppercase tracking-widest text-white/[0.06] font-mono"
      >
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="inline-block">{item}</span>
        ))}
      </motion.div>
    </div>
  );
};

const FloatingIconsHero = React.forwardRef(({
  className,
  title,
  subtitle,
  ctaText,
  ctaHref,
  icons,
  bgTexts = [
    "JavaScript", "Python", "C++", "React.js", "Vite", "Tailwind CSS",
    "Node.js", "Express.js", "MongoDB", "Supabase", "Docker", "Git",
    "GitHub", "Razorpay", "Stripe", "OpenAI API", "Gemini API", "JWT Auth"
  ],
  ...props
}, ref) => {
  // Refs to track the raw mouse position
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full min-h-[550px] flex items-center justify-center overflow-hidden bg-black',
        className
      )}
      {...props}
    >
      {/* Subtle scrolling background tech marquee */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex flex-col justify-around py-6 z-0">
        <MarqueeRow items={bgTexts.slice(0, 6)} direction={1} speed={40} />
        <MarqueeRow items={bgTexts.slice(6, 12)} direction={-1} speed={50} />
        <MarqueeRow items={bgTexts.slice(3, 9)} direction={1} speed={45} />
      </div>

      {/* Container for the background floating icons */}
      <div className="absolute inset-0 w-full h-full z-0">
        {icons.map((iconData, index) => (
          <Icon
            key={iconData.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={iconData}
            index={index}
          />
        ))}
      </div>

      {/* Container for the foreground content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Status badge / category tag */}
        <p className="text-xs uppercase tracking-widest font-mono text-zinc-400 mb-2">02 / Skills</p>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
          {title}
        </h2>
        <div className="h-[2px] w-12 bg-white mx-auto mb-6 rounded-full" />
        
        <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-zinc-350 leading-relaxed font-sans">
          {subtitle}
        </p>

        <div className="mt-8">
          <Button asChild size="lg" className="px-8 py-3 text-sm font-extrabold rounded-xl border border-white/20 bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all duration-300">
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };
