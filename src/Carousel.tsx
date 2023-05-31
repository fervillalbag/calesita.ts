import { Box, Button } from "@chakra-ui/react";

const Carousel = ({
  animationDuration,
  items,
  currentIndex,
  visibleItems,
  setCurrentIndex,
  children,
}: any) => {
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex: any) => (prevIndex + 1) % items.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex: any) =>
        (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <Box className="carousel">
      <Box
        className="carousel-inner"
        display="flex"
        transform={`translateX(-${
          currentIndex * (100 / visibleItems)
        }%)`}
        transition={`transform ${animationDuration}ms ease-in-out`}
      >
        {children}
      </Box>
      <Button
        className="carousel-prev"
        onClick={prevSlide}
        variant="outline"
        mt="4"
        mr="2"
      >
        Prev
      </Button>
      <Button
        className="carousel-next"
        onClick={nextSlide}
        variant="outline"
        mt="4"
      >
        Next
      </Button>
    </Box>
  );
};

export default Carousel;
