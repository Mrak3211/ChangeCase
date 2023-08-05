import React from "react";

export default function About(props: { title: string; mode: string }) {
  document.title = props.title;
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "dark" ? "#185088" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>About Convert Case</h1>
      <p>
        TextUtils is designed to be a free to use online text manipulator that
        you can use for efficiency and productivity gains (and in some cases
        just a bit of fun as well). Whether you have mistakenly written all your
        text in capital or you want to quickly align the correct capitalisation
        structure for titles. Convert Case allows you to quickly fix any errors
        as well as produce an array of outcomes from the tools above. There are
        also a range of converters to explore as well such as the binary code
        and morse code translators that will allow you to write up standard text
        and have it translated into the necessary code. You can also use the
        text manipulators to allow your text to stand out. Whether that’s for
        social media purposes or you want to bring some attention to an
        advertisement, these tools are a great solution for fixing those issues
        too. Explore the full set of tools. Of course, if you have any
        suggestions over new tools that should be added and created that could
        help benefit, then by all means, please get in touch with us and we will
        be more than happy to help you.
      </p>
    </div>
  );
}
