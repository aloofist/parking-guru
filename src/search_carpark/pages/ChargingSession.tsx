import Header from "../../components/Header";
import Button from "../../components/Button";
import CarSVG from "../../assets/carIcon.svg";
import Lightning from "../../assets/Lightning.svg";
import stripePattern from "../../assets/stripePattern.svg";
import cityBackdrop from "../../assets/cityBackdrop.svg";
import { Check } from "lucide-react";

const chargingStats = [
  {
    label: "充電時間",
    value: "00:21:30",
  },
  {
    label: "開始充電時間",
    value: "18:30",
    subText: "2026年4月15日",
  },
  {
    label: "估計收費",
    value: "HK$ 210",
  },
];

export default function ChargingSession() {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-black100 rounded-lg">
        <div className="bg-black100 p-4 rounded-lg flex flex-col gap-4 z-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2>充電量</h2>
              <h1 className="text-4xl text-primary100 font-bold">60.00kWh</h1>
            </div>
            <div className="flex flex-col items-end gap-4">
              <h2 className="text-grey120">電池電量</h2>
              <h1 className="text-2xl text-primary100 font-bold">60%</h1>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="bg-black150 w-[70%] rounded-md">
              <div className="bg-linear-90 from-secondary200 to-primary60 w-[70%] h-full rounded-md"></div>
            </div>
            <span className="flex items-center gap-1">
              <img src={Lightning} alt="lightning icon" />
              <h2 className="text-lg">充電中</h2>
            </span>
          </div>
        </div>

        <img
          src={stripePattern}
          alt="stripe pattern"
          className="bg-black150 rounded-b-lg z-0"
        />
      </div>

      <div className="flex flex-col items-center z-10">
        <p className="text-sm text-grey120 text-right w-full">1分鐘前更新</p>
        <img src={CarSVG} alt="Car" />
      </div>

      <div className="flex flex-col z-10">
        <div className="flex justify-between">
          {chargingStats.map((item) => (
            <div>
              <h2 className="text-sm mb-2">{item.label}</h2>
              <h1 className="font-bold">{item.value}</h1>
              {item.subText && (
                <p className="text-sm text-grey120">{item.subText}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Button text="結束充電" lucide_icon={Check} />
      <img
        src={cityBackdrop}
        alt="city backdrop"
        className="absolute z-0 w-full left-0 translate-y-1/2"
      />
    </>
  );
}
