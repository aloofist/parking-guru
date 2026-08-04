import Header from "../../components/Header";
import Button from "../../components/Button";
import arrow from "../../assets/arrow.svg";
import { useParkingFlowData } from "../data/mockData";
import { useState } from "react";

export default function Welcome() {
  const data = useParkingFlowData();
  const [isCharging] = useState(false);

  if (!data) {
    return null;
  }

  return (
    <>
      <Header charging={isCharging} />
      <div className="details-container h-2/3 flex flex-col justify-center">
        <h1 className="text-4xl text-primary100 font-medium">
          {data.welcome.title}
        </h1>
        <h2>{data.welcome.subtitle}</h2>
      </div>

      <Button text={data.welcome.buttonText} route={data.welcome.route} />
      <img
        src={arrow}
        alt="background arrow"
        className="absolute -z-10 w-full left-0 top-0"
      />
    </>
  );
}
