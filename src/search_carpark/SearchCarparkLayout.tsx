import { Outlet } from "react-router"

export default function SearchCarparkLayout() {
  return (
    <div className="h-screen w-full flex flex-col p-8 text-xl gap-8">
        <Outlet/>
    </div>
  )
}
