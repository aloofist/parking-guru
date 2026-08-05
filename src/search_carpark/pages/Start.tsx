import Header from "../../components/Header";
import ButtonSlider from "../../components/ButtonSlider";
import IconCCS2 from "../../assets/CCS2.svg";
import IconCHAdeMO from "../../assets/CHAdeMO.svg";
import CityBackdrop from "../../components/CityBackdrop";
import { useParkingFlowData } from "../data/mockData";
import { useState } from "react";
import { useNavigate } from "react-router";

const connectorIcons = {
  CCS2: IconCCS2,
  CHAdeMO: IconCHAdeMO,
} as const;

export default function Start() {
  const data = useParkingFlowData();
  const [isCharging] = useState(false);
  const navigate = useNavigate();

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
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="bg-black100 p-4 rounded-lg">
            <h2>收費方式</h2>
            <h1 className="text-4xl text-primary100 font-bold">
              {data.start.pricing}
            </h1>
          </div>

          <div className="flex justify-between [&_h2]:text-sm font-light [&_h1]:font-bold">
            {data.start.stats.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <h2>{item.label}</h2>
                <h1>{item.value}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex [&_div]:w-full [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_div]:items-center gap-4">
            {data.start.connectors.map((connector) => {
              const icon = connectorIcons[connector.iconKey];

              return (
                <div
                  key={connector.name}
                  className="bg-background p-4 rounded-lg border border-black100"
                >
                  <img src={icon} alt={`${connector.name} Icon`} />

                  <h1 className="font-bold">{connector.name}</h1>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center">
            <ButtonSlider onComplete={() => navigate(data.start.route)} />
            <p className="font-light text-base my-4">{data.start.sliderText}</p>
            {/* <Button text={data.start.buttonText} route={data.start.route} /> */}
          </div>
        </div>
      </div>
      <CityBackdrop />
    </>
  );
}
