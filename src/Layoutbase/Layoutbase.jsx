import { Navbar } from "../Components/Navbar/Navbar";
import "./Layoutbase.css";

/**
 *
 * @param {children: React.ReactNode} properties
 *
 */

export function LayoutBase(properties) {
  const { children } = properties;
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>Made by Joakim Sørenes</footer>
    </div>
  );
}
