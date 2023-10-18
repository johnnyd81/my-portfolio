export default function About() {
  return (
    <div className="about">
      <p className="about-item">
        Seeing life from many diverse perspectives is one of the driving forces
        of my life. A constant desire for improvement has always been a
        recurring theme in my life. The ever-changing advances in technology and
        the digitisation of many day-to-day tasks led me to try my hand at
        coding as a hobby. The feeling of excitement after writing my first line
        of HTML code and seeing it rendered in the browser was a turning point
        in my career since up until that point my career was very computer
        hardware and sales dominant. Online educational platforms like Udemy,
        freeCodeCamp and the Odin project further served as very helpful
        learning tools in my initial coding journey.
      </p>
      <p className="about-item">
        The tricky part about coding, at least for me, was that I always wanted
        to know where I stood in terms of proficiency. This led me to enroll in
        a Fullstack Web Developer bootcamp at Hyperiondev. The way the course is
        structured allowed me to fill gaps in my knowledge, and being able to
        interact with industry professionals was also priceless. Through this
        bootcamp I learnt frontend technologies like HTML, CSS, bootstrap,
        React.js, Next.js and the coding language javaScript. The backend
        technologies covered were Node.js and Express.js as well as MongoDb for
        database interactions.
      </p>
      <p className="about-item">
        The tools provided by coding has been an immense game-changer in my life
        as it opens up so much doors to those who have the courage to apply
        themselves diligently. When I'm not coding I love to spend time playing
        soccer and basketball, composing music on the piano and the guitar, as
        well as doing a bit of foreign language learning i.e. German.
      </p>
      {/*the background image is stored in the public folder and it's path makes it easy to utilize in the application */}
      <style jsx>
        {`
          .about {
            background: url("/piano.jpeg");
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: fixed;
            min-height: 100vh;
            padding: 10px;
          }
          .about-item {
            background: lightblue;
            padding: 10px;
            margin: 30px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 1.1rem;
          }
        `}
      </style>
    </div>
  );
}
