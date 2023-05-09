import React from "react";

export default function Greetings(props) {
  const lang = {
    de: "Hallo",
    en: "Hello",
    es: "Ola",
    fr: "Bonjour",
  };
  return (
    <div>
      <p>
        {lang[props.lang]} {props.children}
      </p>
    </div>
  );
}
