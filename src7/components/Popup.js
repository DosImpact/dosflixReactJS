import React from "react";
import NewWindow from "react-new-window";

export const Demo = () => (
  <NewWindow>
    <h1>Hi 👋</h1>
  </NewWindow>
);

export const GetTistoryAT = ({ url }) => <NewWindow url={url}></NewWindow>;
