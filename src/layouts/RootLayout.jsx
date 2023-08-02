import UserBar from "../components/UserBar";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
