import React from "react";
import "./User.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";

export default function User() {
  return (
    <div className="User">
      <div className="UserHeader">
        <div className="UserHeader__Notification">
          <NotificationsIcon />
        </div>
        <div className="UserHeader__Name">Dwayne Johnson</div>
      </div>
      <div className="UserApp">
        <div className="UserApp__Icon">
          <img
            alt="Messanger"
            className="UserApp__Icon__Position"
            src="https://www.freeiconspng.com/uploads/facebook-chat-logo-png-19.png"
          />
        </div>
        <div className="UserApp__DotIcon">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="UserInfo">
        <div className="UserInfo__Pro">
          <Avatar
            className="UserInfo__ProImage"
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg"
          />
          {/* <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/cc/2e/c7/cc2ec7995c93eee63d7c2f1e5ecab101.jpg" className=UserInfo_ProImage />
           */}
        </div>
        <div className="UserInfo__ProName">Kirsten Mckeller</div>
        <div className="UserInfo__ProArea">Cape Town,RSA</div>
        <div className="UserInfo__ProFlex">
          <div className="UserInfo__ProLeft">Nickname</div>
          <div className="UserInfo__ProRight">Killa Kella</div>
        </div>
        <div className="UserInfo__ProFlex">
          <div className="UserInfo__ProLeft">Tel</div>
          <div className="UserInfo__ProRight">072 143 9920</div>
        </div>
        <div className="UserInfo__ProFlex">
          <div className="UserInfo__ProLeft">Date of Birth</div>
          <div className="UserInfo__ProRight">July 12 1988</div>
        </div>
        <div className="UserInfo__ProFlex">
          <div className="UserInfo__ProLeft">Gender</div>
          <div className="UserInfo__ProRight">Female</div>
        </div>
        <div className="UserInfo__ProFlex">
          <div className="UserInfo__ProLeft">Language</div>
          <div className="UserInfo__ProRight">English</div>
        </div>
      </div>
    </div>
  );
}
