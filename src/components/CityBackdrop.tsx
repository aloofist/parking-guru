import cityBackdrop from "../assets/cityBackdrop.svg"

export default function CityBackdrop() {
  return (
    <img
      src={cityBackdrop}
      alt="city backdrop"
      className="absolute -z-10 w-full left-0 translate-y-[50%]"
    />
  );
}
