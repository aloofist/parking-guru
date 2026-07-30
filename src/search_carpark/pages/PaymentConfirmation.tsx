import Header from "../../components/Header";
import CityBackdrop from "../../components/CityBackdrop";
import paymentSuccess from "../../assets/paymentSuccess.svg";
import { CircleAlert } from "lucide-react";
import Button from "../../components/Button";
import { Download } from "lucide-react";
import longArrow from "../../assets/longArrow.svg";

const stats = [
  {
    label: "收費",
    value: "$3.5/kWh",
  },
  {
    label: "充電量",
    value: "60.00kWh",
  },
  {
    label: "充電時數",
    value: "00:21:30",
  },
];

export default function PaymentDetails() {
  return (
    <>
      <Header
        parking_lot_name="B1023"
        show_charge_details={true}
        charging={false}
        charging_location="B1-A23"
      />

      <div className="flex flex-col bg-black100 rounded-lg">
        <div className="bg-black100 p-4 rounded-lg flex flex-col gap-4 z-10">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2>付款成功</h2>
              <h1 className="text-4xl text-primary100 font-bold">HK$ 210</h1>
            </div>
            <div className="flex flex-col items-end gap-4">
              <h2 className="text-grey120">電池電量</h2>
              <h1 className="text-2xl font-bold">60%</h1>
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
            <h1 className="font-bold text-primary100">18:30</h1>
            <h2 className="text-sm mb-2">2026年4月15日</h2>
          </div>
          <img src={longArrow} alt="long arrow icon" className="w-25" />
          <div>
            <h1 className="font-bold text-right text-primary100">19:30</h1>
            <h2 className="text-sm mb-2">2026年4月15日</h2>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {stats.map((item) => (
            <div className="flex justify-between">
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
          <p className="text-sm">非充電時停泊充電車位每分鐘將收取3元。</p>
        </div>
      </div>
      <Button
        text="下載收據"
        lucide_icon={Download}
        route="/"
      />
      <CityBackdrop />
    </>
  );
}
