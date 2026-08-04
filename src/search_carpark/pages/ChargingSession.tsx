import Header from "../../components/Header";
import Button from "../../components/Button";
import CarSVG from "../../assets/carIcon.svg";
import Lightning from "../../assets/Lightning.svg";
import stripePattern from "../../assets/stripePattern.svg";
import CityBackdrop from "../../components/CityBackdrop";
import { Check } from "lucide-react";
import { useParkingFlowData } from "../data/mockData";
import { useState } from "react";

export default function ChargingSession() {
  const data = useParkingFlowData();
  const [isCharging] = useState(true);

  if (!data) {
    return null;
  }

  return (
    <>
      <Header
        parking_lot_name={data.header.parkingLotName}
        show_charge_details={true}
        charging={isCharging}
        charging_location={data.header.chargingLocation}
      />
      <div className="flex flex-col bg-black100 rounded-lg">
        <div className="bg-black100 p-4 rounded-lg flex flex-col gap-4 z-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2>充電量</h2>
              <h1 className="text-4xl text-primary100 font-bold">
                {data.chargingSession.chargeAmount}
              </h1>
            </div>
            <div className="flex flex-col items-end gap-4">
              <h2 className="text-grey120">電池電量</h2>
              <h1 className="text-2xl text-primary100 font-bold">
                {data.chargingSession.batteryLevel}
              </h1>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="bg-black150 w-[70%] rounded-md">
              <div className="bg-linear-90 from-secondary200 to-primary60 w-[70%] h-full rounded-md"></div>
            </div>
            <span className="flex items-center gap-1">
              <img src={Lightning} alt="lightning icon" />
              <h2 className="text-lg">{data.chargingSession.statusLabel}</h2>
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
        <p className="text-sm text-grey120 text-right w-full">
          {data.chargingSession.updatedAt}
        </p>
        <img src={CarSVG} alt="Car" />
      </div>

      <div className="flex flex-col z-10 ">
        <div className="flex justify-between">
          {data.chargingSession.chargingStats.map((item) => (
            <div key={item.label}>
              <h2 className="text-sm mb-2">{item.label}</h2>
              <h1 className="font-bold">{item.value}</h1>
              {item.subText && (
                <p className="text-sm text-grey120">{item.subText}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Button
        text={data.chargingSession.endButtonText}
        lucide_icon={Check}
        route={data.chargingSession.route}
      />
      <CityBackdrop />
    </>
  );
}
