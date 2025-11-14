import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div className=" flex flex-col">
      <Header />
      <main>{children}</main>
      {/* <Outlet /> */}
    </div>
  );
}
