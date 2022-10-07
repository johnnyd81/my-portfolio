import Link from "next/link"; //link has to be imported where it needs to used

const Navbar = () => {
  //the navbar component has links that navigates around the application
  return (
    <div className="navbar">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>{" "}
      {/* the style jsx tag contains all the styling declarations for the navbar component i.e. background, padding etc.*/}
      <style jsx>{`
        .navbar {
          background: teal;
        }
        nav {
          padding: 10px 0;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          border-bottom: 1px solid #ddd;
        }
        nav a {
          margin-left: 12px;
          margin-right: 10px;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
