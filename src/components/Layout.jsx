/* eslint-disable react/prop-types */
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* navbar */}
      <Navbar logo="Neuversity" />

      {/* main content */}
      <main>{children}</main>

      {/* ganti dengan component footer */}
      <p>ini footer</p>
    </>
  );
}
