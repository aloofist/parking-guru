import Header from "../../components/Header";
import Button from "../../components/Button";
import arrow from "../../assets/arrow.svg"

export default function Welcome() {
  return (
    <>
      <Header />
      <div className="details-container h-2/3 flex flex-col justify-center">
        <h1 className="text-4xl text-primary100 font-medium">歡迎使用</h1>
        <h2>自助充電系統</h2>
      </div>

      <Button text="歡迎使用" route="/scan" />
      <img
      src={arrow}
      alt="background arrow"
      className="absolute -z-10 w-full left-0 top-0"
    />
    </>
  );
}
