import Header from "../../components/Header";
import camera from "../../assets/camera.svg";
import { useNavigate } from "react-router";

export default function Scan() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/search_carpark/start");
  };
  return (
    <>
      <Header />

      <div className="bg-black150 rounded-xl flex flex-col h-[75%] relative">
        <div className="h-18 w-18 bg-background grid place-items-center rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 scale-[120%]">
          <button
            className="bg-primary100 p-2 rounded-full h-12 w-12 grid place-items-center shadow-[0_0_5px_0] shadow-primary80 cursor-pointer"
            onClick={handleNavigation}
          >
            <img src={camera} alt="camera icon" />
          </button>
        </div>
      </div>
    </>
  );
}
