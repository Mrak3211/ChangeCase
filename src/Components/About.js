import React from "react";

export default function About(props) {
  document.title = props.title;
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#185088" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1 style={{textAlign:"center"}}>About Convert Case</h1>
      <p>
        <h1 style={{textAlign:"center"}}>Welcome to Change Case App!</h1>

        <p>
          At Change Case App, we understand the importance of clear and
          consistent text formatting. Our app is designed to help you
          effortlessly transform your text into different case styles, allowing
          you to enhance readability and make a lasting impression. Whether you
          need to convert your text to uppercase, lowercase, sentence case, or
          even capitalize every word, our app has got you covered!
        </p>

        <p>
          With our user-friendly interface and powerful functionality, changing
          the case of your text has never been easier. Simply paste your text
          into the designated input field, select the desired case style, and
          let our app do the rest. In an instant, your text will be transformed
          according to your specifications.
        </p>

        <h5>Key Features:</h5>
        <p>
          1. Uppercase: Convert your text to uppercase, perfect for emphasizing
          important messages or headlines.
        </p>
        <p>
          2. Lowercase: Change your text to lowercase, ideal for creating a more
          casual or subtle tone.
        </p>
        <p>
          3. Sentence Case: Transform your text to sentence case, capitalizing
          the first letter of each sentence while keeping the rest lowercase.
          This is useful for ensuring proper grammar and style in your written
          communication.
        </p>
        <p>
          4. Capitalize Every Word: Capitalize the first letter of every word in
          your text, great for titles or headings where each word should be
          emphasized.
        </p>

        <p>
          We value your privacy and security. Rest assured that all the text you
          input into our app is processed locally and is never stored or
          transmitted to our servers. Your data remains private and
          confidential.
        </p>

        <p>
          Change Case App is designed to be accessible and convenient. You can
          use it on any device with an internet connection, including desktop
          computers, laptops, tablets, and smartphones. It's perfect for
          students, writers, professionals, and anyone who needs to manipulate
          the case of their text quickly and easily.
        </p>

        <p>
          We hope that Change Case App becomes your go-to tool for transforming
          text case and enhancing your written content. Start using our app
          today and experience the convenience of effortless case conversion!
        </p>

        <p>
          <b>Note:</b> Change Case App is not responsible for any inaccuracies
          or errors that may occur during the case conversion process. Please
          proofread and review your text after applying the desired case style.
        </p>

        <p>
          If you have any questions, feedback, or suggestions, please don't
          hesitate to contact our support team. We're here to assist you and
          continuously improve our app to meet your needs.
        </p>

        <h4 style={{textAlign:"center"}}>Thank you for choosing Change Case App!</h4>
      </p>
      <h3 style={{textAlign:"center"}}>Made With &hearts; By Ayush Chodvadiya</h3>
    </div>
  );
}
