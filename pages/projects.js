import Link from "next/link"; //in order to link to external resources I had to import 'next/link'

export default function Projects() {
  //the projects I selected are all rendered in a div with the classname of projects
  return (
    <div className="projects">
      <div className="project-item">
        <h2>Medieval Memory Card Game</h2>
        <p>
          A card match-up game that allows a user to improve their recall
          ability. The game is built entirely using React.js and custom styled
          with CSS. A live demo of the game can be viewed{" "}
          <Link href="https://react-capstone-new.vercel.app/">
            <a>here</a>
          </Link>{" "}
          and the source code is available{" "}
          <Link href="https://github.com/johnnyd81/react-capstone">
            <a>here.</a>
          </Link>
        </p>
      </div>
      <div className="project-item">
        <h2>Health store</h2>
        <p>
          This application simulates the experience a user would have on an
          online store. A user has the option of viewing products and adding
          them to a shopping cart. A cart page allows modifications to be made
          to the cart items that reflects in real time in the user interface. A
          live demo of the application can be viewed{" "}
          <Link href="https://health-shop-three.vercel.app/index.html">
            <a>here</a>
          </Link>{" "}
          and the source code is available{" "}
          <Link href="https://github.com/johnnyd81/health-shop">
            <a>here</a>
          </Link>{" "}
        </p>
      </div>
      <div className="project-item">
        <h2>Rick and Morty Character List</h2>
        <p>
          This application fetches data from an api and populates a cartoon
          character gallery. The application is built using a react framework
          called next.js. A live demo is available{" "}
          <Link href="https://rickmorty-gallery.vercel.app/">
            <a>here</a>
          </Link>{" "}
          and the source code can be found{" "}
          <Link href="https://github.com/johnnyd81/rickmorty-gallery">
            <a>here.</a>
          </Link>
        </p>
      </div>
      <div className="project-item">
        <h2>Hotel-booking app</h2>
        <p>
          This application simulates a booking app that allows a user to book
          accomodation in three cities in South Africa. The application is built
          using react.js as the frontend and node/express.js as the backend. A
          live demo is available{" "}
          <Link href="https://hotel-frontend-alpha.vercel.app/login">
            <a>here</a>
          </Link>{" "}
          , the frontend source code can be found{" "}
          <Link href="https://github.com/johnnyd81/hotel-frontend">
            <a>here</a>
          </Link>{" "}
          and the backend can be found{" "}
          <Link href="https://github.com/johnnyd81/hotel-backend">
            <a>here.</a>
          </Link>
        </p>
      </div>
      {/*the style jsx tag contains styling that sets a background image, styles each project item and positions all the items */}
      <style jsx>
        {`
          .projects {
            background: url("/three-pcs.jpeg");
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: fixed;
            min-height: 100vh;
            padding: 10px;
          }

          .project-item {
            background: lightblue;
            padding: 7px;
            margin: 30px;
            border-radius: 10px;
            font-weight: 700;
          }

          .project-item p {
            background: white;
            padding: 5px;
            border-radius: 5px;
            font-size: 1.1rem;
          }
        `}
      </style>
    </div>
  );
}
