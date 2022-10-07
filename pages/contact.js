import Image from "next/image";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        I can be contacted via these channels:
        <ul>
          <li>Via email at jonathandjohnson81@gmail.com</li>
          <li>Telephonically at 0637523456</li>
        </ul>
      </p>
      <div className="laptop-pic">
        {" "}
        {/*I wrapped the Image in a div to adjust it's position easier on the page */}
        <Image
          src="/laptop-open.jpeg"
          alt="an open laptop"
          height="300"
          width="300"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <style jsx>
        {`
          .contact {
            background: lightgray;
            min-height: 100vh;
            padding: 10px;
            font-weight: 600;
            font-size: 1.1rem;
          }
          p {
            background: lightblue;
            padding: 10px;
            border-radius: 5px;
          }
          p li {
            background: white;
            padding: 5px;
            margin: 4px;
            border-radius: 5px;
          }
          .laptop-pic {
            margin-left: 39%;
            margin-top: 25px;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
