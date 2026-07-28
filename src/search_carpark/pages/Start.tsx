import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonSlider from "../../components/ButtonSlider";
import IconCCS2 from "../../assets/CCS2.svg"
import IconCHAdeMO from "../../assets/CHAdeMO.svg"

const stats = [
  { label: "充電速度", value: "60kWh" },
  { label: "充電規格", value: "DC" },
  { label: "電樁狀態", value: "待機中" },
];

export default function Start() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <div className="bg-black100 p-4 rounded-lg">
            <h2>收費方式</h2>
            <h1 className="text-4xl text-primary100 font-bold">HK$ 3.5/kWh</h1>
          </div>

          <div className="flex justify-between [&_h2]:text-sm font-light [&_h1]:font-bold">
            {stats.map((item) => (
              <div className="flex flex-col gap-2">
                <h2>{item.label}</h2>
                <h1>{item.value}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex [&_div]:w-full [&_div]:flex [&_div]:flex-col [&_div]:gap-2 [&_div]:items-center gap-4">
            <div className="bg-background p-4 rounded-lg border border-black100">
              <img src={IconCCS2} alt="CCS2 Icon" />

              <h1 className="font-bold">CCS2</h1>
            </div>

            <div className="bg-background p-4 rounded-lg border border-black100">
              <img src={IconCHAdeMO} alt="CHAdeMO Icon" />

              <h1 className="font-bold">CHAdeMO</h1>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <ButtonSlider />
            <p className="font-light text-base mt-4">滑動以開始充電</p>
            <Button
              text="next"
              route="/search_carpark/charging_session"
            />
          </div>
        </div>
      </div>
    </>
  );
}


