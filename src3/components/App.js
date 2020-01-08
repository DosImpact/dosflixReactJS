import React from "react";
import Food from "components/Food";
import Message from "components/Message";

function App() {
  return (
    <div>
      <span>HI</span>
      <Message text="can`t found" color="#ff8364"></Message>
      <Food
        name="kimchi"
        img=" https://image.fmkorea.com/files/attach/new/20180511/66955397/110042750/1052066548/612b620383f1bb8d920fb29d8f23abeb.jpg"
      ></Food>
    </div>
  );
}
export default App;
