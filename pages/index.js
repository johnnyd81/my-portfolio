export default function Welcome() {
  return (
    <div className="home">
      <div className="header">
        <h1>Developer Portfolio</h1>
        <h2>Jonathan Johnson</h2>
      </div>
      {/* the style jsx tag sets a background image and contains the declaration that animates the header div */}
      <style jsx>
        {`
          .home {
            background: url("/diff-devices.jpeg");
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: fixed;
            min-height: 100vh;
            padding: 10px;
          }
          .header {
            text-align: center;
            background: lightblue;
            padding: 2px;
            width: 80%;
            margin-left: 9%;
            border-radius: 5px;
            text-shadow: 2px 2px 2px silver;
            animation: fadeInAnimation ease 5s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
          @keyframes fadeInAnimation {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
