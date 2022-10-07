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
        <h2>Itunes Search App</h2>
        <p>
          This application allows a user to search for items on the Itunes-Apple
          store. A user has a choice of narrowing down a search by clicking on a
          dropdown menu that gives the user a choice of Movies, Music, TV-Show,
          podcast etc. The search results are rendered on the page and a user
          can add items to a Favourites page. A link is provided to the
          Favourites page and favourite items can also be deleted from here. The
          app is a fullstack application comprising of a React.js frontend and a
          Node.js/Express.js backend. A live demo of the application can be
          viewed{" "}
          <Link href="https://pure-temple-70555.herokuapp.com">
            <a>here</a>
          </Link>{" "}
          and the source code is available{" "}
          <Link href="https://github.com/johnnyd81/my-itunes-app">
            <a>here.</a>
          </Link>
        </p>
      </div>
      <div className="project-item">
        <h2>Todo-List app with user authentication</h2>
        <p>
          This application allows a user to create a todo list, as well as
          delete todos from the list. Each user is only allowed to add or remove
          todos from their specific list. This is made possible by
          authenticating each user, before they can use the application. The
          todos for each user is saved in a database. A live demo can be viewed{" "}
          <Link href="https://floating-sierra-91844.herokuapp.com">
            <a>here.</a>
          </Link>
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
