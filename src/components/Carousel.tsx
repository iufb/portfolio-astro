import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const carouselData = [
  { img: "cloud.jpeg", name: "Cloud" },
  { img: "1.jpeg", name: "Cloud" },
  { img: "2.jpg", name: "Cloud" },
  { img: "3.jpeg", name: "Cloud" },
  { img: "4.jpg", name: "Cloud" },
  { img: "5.jpeg", name: "Cloud" },
];
export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const indicators = new Array(carouselData.length).fill("a");
  const next = () => {
    if (currentIndex == carouselData.length - 1) {
      setCurrentIndex(0);
    } else setCurrentIndex(currentIndex + 1);
  };
  const back = () => {
    if (currentIndex == 0) {
      setCurrentIndex(carouselData.length - 1);
    } else setCurrentIndex(currentIndex - 1);
  };
  const changeCurrentIndex = (idx: number) => {
    setCurrentIndex(idx);
  };
  return (
    <div className=" w-[400px] h-[300px] relative  group ">
      <div
        style={{ backgroundImage: `url(${carouselData[currentIndex].img})` }}
        className=" rounded-2xl duration-500 w-full h-full bg-center bg-cover  "
      />
      <h2 className="text-center">{carouselData[currentIndex].name}</h2>
      <div className="absolute hidden group-hover:flex top-[50%]  justify-between w-full">
        <button type="button" onClick={back}>
          <BsChevronCompactLeft size={30} />
        </button>
        <button type="button" onClick={next}>
          <BsChevronCompactRight size={30} />
        </button>
      </div>
      <div className="absolute bottom-2 flex gap-4 translate-x-[25%] w-full">
        {indicators.map((_, idx) => (
          <div
            className={`w-4 h-1 ${
              currentIndex == idx ? "bg-white" : "bg-gray-400"
            } cursor-pointer`}
            key={idx}
            onClick={() => changeCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};
