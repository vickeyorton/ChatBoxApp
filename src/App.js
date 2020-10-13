import React from "react";
import "./styles.css";
import AppMenu from "./Components/AppMenu/AppMenu";
import InboxMenu from "./Components/InboxMenu/InboxMenu";
import ChatList from "./Components/ChatList/ChatList";
import ChatBoard from "./Components/ChatBoard/ChatBoard";
import User from "./Components/User/User";
import "fontsource-roboto";

export default function App() {
  return (
    <div className="App">
      <AppMenu />
      <InboxMenu />
      <ChatList />
      <ChatBoard />
      <User />
    </div>
  );
}
