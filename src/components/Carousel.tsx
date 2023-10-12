import { useState, type FC } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
interface Work {
  title: string;
  image: string;
}
interface Props {
  works: Work[];
}
export const Carousel: FC<Props> = ({ works }): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const indicators = new Array(works.length).fill("a");
  const next = () => {
    if (currentIndex == works.length - 1) {
      setCurrentIndex(0);
    } else setCurrentIndex(currentIndex + 1);
  };
  const back = () => {
    if (currentIndex == 0) {
      setCurrentIndex(works.length - 1);
    } else setCurrentIndex(currentIndex - 1);
  };
  const changeCurrentIndex = (idx: number) => {
    setCurrentIndex(idx);
  };
  return (
    <div className=" w-[400px] h-[300px] relative  group ">
      <div
        style={{ backgroundImage: `url(${works[currentIndex].image})` }}
        className=" rounded-2xl duration-500 w-full h-full bg-center bg-cover  "
      />
      <h2 className="text-center">{works[currentIndex].title}</h2>
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
