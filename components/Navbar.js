import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image></Image>
      </div>
      <Link href="/">Home</Link>
      <Link href="/campuses">Campuses</Link>
      <Link href="/students">Students</Link>
    </nav>
  );
};

export default Navbar;
