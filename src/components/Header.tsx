import help2 from "../assets/help2.svg";
import evV2 from "../assets/evV2.svg";

interface HeaderProps {
  parking_lot_name?: string;
  show_charge_details?: boolean;
  charging?: boolean;
  charging_location?: string;
}

export default function Header({
  parking_lot_name,
  show_charge_details,
  charging,
  charging_location,
}: HeaderProps) {
  return (
    <div className="parking-info flex justify-between items-center">
      <span>
        <h1>停車場名稱</h1>
        {parking_lot_name && <h2 className="text-sm">{parking_lot_name}</h2>}
      </span>

      <div className="flex gap-4">
        
        {show_charge_details && 
        <div className="bg-black100 [&_p]:text-sm [&_p]:z-10 relative rounded-lg px-2 py-1.5 w-25">
            <p className={charging ? "text-primary100" : "text-grey100"}>{charging ? "充電中" : "閒置中"}</p>
            <p className={charging ? "text-primary100" : "text-grey100"}>{charging_location}</p>
          <img
            src={evV2}
            alt="charging icon"
            className="absolute bottom-0 right-0 h-4/5 object-contain pointer-events-none z-0"
            />
        </div>
        }

        <button className="cursor-pointer">
            <img src={help2} alt="help icon" />
        </button>
      </div>
    </div>
  );
}
