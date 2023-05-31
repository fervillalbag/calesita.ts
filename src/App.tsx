import React from "react";

import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import { IData } from "./data.interface";
import { data } from "./data";

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [visibleItems] = React.useState<number>(1);

  return (
    <Carousel
      items={data}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      visibleItems={visibleItems}
      animationDuration={500}
    >
      {data?.map((item: IData) => (
        <CarouselItem key={item.id} item={item} visibleItems={visibleItems}>
          {item.content}
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default App;
