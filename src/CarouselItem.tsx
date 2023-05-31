import { Box } from "@chakra-ui/react";
import { IData } from "./data.interface";

interface ICarouselItem {
  children: React.ReactNode;
  item: IData;
  visibleItems: number;
}

const CarouselItem = ({
  children,
  item,
  visibleItems,
}: ICarouselItem) => {
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
