import { Navbar } from "../Components/Navbar/Navbar";

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

      <footer>By Joakim S</footer>
    </div>
  );
}
