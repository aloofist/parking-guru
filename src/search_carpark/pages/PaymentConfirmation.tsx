import Header from "../../components/Header";
import CityBackdrop from "../../components/CityBackdrop";
import paymentSuccess from "../../assets/paymentSuccess.svg";
import { CircleAlert } from "lucide-react";
import Button from "../../components/Button";
import { Download } from "lucide-react";
import longArrow from "../../assets/longArrow.svg";
import { useParkingFlowData } from "../data/mockData";
import { useState } from "react";

export default function PaymentConfirmation() {
  const data = useParkingFlowData();
  const [isCharging] = useState(false);

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
              <h2>付款成功</h2>
              <h1 className="text-4xl text-primary100 font-bold">
                {data.paymentConfirmation.amountPaid}
              </h1>
            </div>
            <div className="flex flex-col items-end gap-4">
              <h2 className="text-grey120">電池電量</h2>
              <h1 className="text-2xl font-bold">
                {data.paymentConfirmation.batteryLevel}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-10">
        <img src={paymentSuccess} alt="payment icon" />
      </div>

      <div className="flex flex-col z-10">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-primary100">
              {data.paymentConfirmation.timeRange.startTime}
            </h1>
            <h2 className="text-sm mb-2">
              {data.paymentConfirmation.timeRange.startDate}
            </h2>
          </div>
          <img src={longArrow} alt="long arrow icon" className="w-25" />
          <div>
            <h1 className="font-bold text-right text-primary100">
              {data.paymentConfirmation.timeRange.endTime}
            </h1>
            <h2 className="text-sm mb-2">
              {data.paymentConfirmation.timeRange.endDate}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {data.paymentConfirmation.summary.map((item) => (
            <div key={item.label} className="flex justify-between">
              <p className="text-sm text-grey120">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col items-center rounded-lg"
        style={{
          background:
            "repeating-linear-gradient( #15f8da, #15f8da 10px, #2a2d2a 10px, #2a2d2a 20px)",
        }}
      >
        <div className="bg-black100 w-[90%] flex items-center justify-center py-4 gap-2">
          <CircleAlert color="#e9cc3d" />
          <p className="text-sm">{data.paymentConfirmation.notice}</p>
        </div>
      </div>
      <Button
        text={data.paymentConfirmation.receiptButtonText}
        lucide_icon={Download}
        route={data.paymentConfirmation.route}
      />
      <CityBackdrop />
    </>
  );
}
