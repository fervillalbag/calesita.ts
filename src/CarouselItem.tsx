import { Box } from "@chakra-ui/react";

const CarouselItem = ({
  children,
  item,
  visibleItems,
}: any) => {
  return (
    <Box
      key={item.id}
      flex={`0 0 ${100 / visibleItems}%`}
      backgroundColor="gray.200"
      borderRadius="md"
      padding="4"
    >
      {children}
    </Box>
  );
};

export default CarouselItem;
