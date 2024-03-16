import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const DRAG_BUFFER = 30;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

interface SwipeCarouselProps {
  images: string[];
  activeCourseIndex: number;
  setActiveCourseIndex: React.Dispatch<React.SetStateAction<number>>;
  autoSwipe?: boolean;
  autoSwipeDelay?: number;
  isStacked?: boolean;
}

const SwipeCarousel = ({
  images,
  activeCourseIndex,
  setActiveCourseIndex,
  autoSwipe = true,
  autoSwipeDelay = 5000,
  isStacked = false,
}: SwipeCarouselProps) => {
  const dragX = useMotionValue(0);

  // auto swipe
  useEffect(() => {
    if (autoSwipe) {
      const intervalRef = setInterval(() => {
        const x = dragX.get();

        if (x === 0) {
          setActiveCourseIndex((prev) => {
            if (prev === images.length - 1) {
              return 0;
            }
            return prev + 1;
          });
        }
      }, autoSwipeDelay);

      return () => clearInterval(intervalRef);
    }
  }, [autoSwipe]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && activeCourseIndex < images.length - 1) {
      setActiveCourseIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && activeCourseIndex > 0) {
      setActiveCourseIndex((prev) => prev - 1);
    }
  };

  return (
    <div
      className={`relative w-full h-full ${isStacked ? "" : "overflow-hidden"}`}
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={
          isStacked
            ? {}
            : {
                translateX: `-${activeCourseIndex * 100}%`,
              }
        }
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className={`w-full h-full relative ${
          isStacked ? "" : "flex items-center"
        }`}
      >
        {images.map((imgSrc, index) => {
          return (
            <>
              {isStacked ? (
                <motion.div
                  key={index}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  animate={{
                    scale: (() => {
                      if (activeCourseIndex === index) return 1;
                      else if (activeCourseIndex > index) {
                        return (activeCourseIndex - index) / 10 + 1;
                      } else {
                        return 1 - (index - activeCourseIndex) / 10;
                      }
                    })(),
                    zIndex: images.length - index - 1,
                    left: `${(index - activeCourseIndex) * 15}%`,
                    opacity: activeCourseIndex > index ? 0 : 1,
                  }}
                  transition={SPRING_OPTIONS}
                  className="w-full h-full shrink-0 rounded-xl object-cover object-center absolute"
                />
              ) : (
                <motion.div
                  key={index}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  animate={{
                    scale: activeCourseIndex === index ? 1 : 0.85,
                  }}
                  transition={SPRING_OPTIONS}
                  className="w-full h-full shrink-0 rounded-xl object-cover object-center"
                />
              )}
            </>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SwipeCarousel;
