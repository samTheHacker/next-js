import Link from "next/link";

const styles = {
  display: "flex",
  background: "grey",
  justifyContent: "space-between",
  padding: "1rem"
};
const Navbar = () => (
  <div style={styles}>
    <Link href="/">
      <a>Home page</a>
    </Link>
    <Link href="/about">
      <a>About page</a>
    </Link>
    <Link href="/contact">
      <a>Contact page</a>
    </Link>
  </div>
);

export default Navbar;
