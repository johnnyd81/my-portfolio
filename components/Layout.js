import Navbar from "./Navbar";
//the Layout component defines how the layout of the application will be. In my case the navbar will be present on every page
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />{" "}
      {/*since the navbar is above the children it appears on every page */}
      {children}
    </div>
  );
};

export default Layout;
