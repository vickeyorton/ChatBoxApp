import React from "react";
import "./AppMenu.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export default function AppMenu() {
  return (
    <div className="AppMenu">
      <div className="AppMenu__Header">
        <IconButton aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </div>
      <div className="AppMenu__List">
        <div className="AppMenu__Icon">
          <IconButton aria-label="Whatsapp">
            <img
              alt="Whatsapp"
              className="AppMenu__List__Icon"
              src="https://www.freepnglogos.com/uploads/whatsapp-logo-image-8.png"
            />
          </IconButton>
        </div>
        <div className="AppMenu__Icon AppMenu__Icon__Active">
          <IconButton aria-label="Messanger">
            <img
              alt="Messanger"
              className="AppMenu__List__Icon"
              src="https://www.freeiconspng.com/uploads/facebook-chat-logo-png-19.png"
            />
          </IconButton>
        </div>
        <div className="AppMenu__Icon">
          <IconButton aria-label="Skype">
            <img
              alt="Skype"
              className="AppMenu__List__Icon"
              src="https://www.transparentpng.com/thumb/skype/DpWTMQ-blue-logo-skype-free-png.png"
            />
          </IconButton>
        </div>
        <div className="AppMenu__Icon">
          <IconButton aria-label="Viber">
            <img
              alt="Viber"
              className="AppMenu__List__Icon"
              src="https://pngimg.com/uploads/viber/viber_PNG11.png"
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
