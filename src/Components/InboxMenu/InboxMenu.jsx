import React from "react";
import "./InboxMenu.css";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";

export default function InboxMenu() {
  return (
    <div className="InboxMenu">
      <div className="InboxMenu__Header">
        <span className="InboxMenu__Header__Left">Inbox</span>
        <span className="InboxMenu__Header__Right">
          <PersonAddRoundedIcon />
        </span>
      </div>
      <div className="InboxMenu__Content">
        <div className="InboxMenu__Content__Group">
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">
              All Message
            </span>
            <span className="InboxMenu__Content__Group__ListRight">102</span>
          </div>
          <div className="InboxMenu__Content__Group__List InboxMenu__Content__Group__List__Active">
            <span className="InboxMenu__Content__Group__ListLeft">Unread</span>
            <span className="InboxMenu__Content__Group__ListRight">34</span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">
              Important
            </span>
            <span className="InboxMenu__Content__Group__ListRight">6</span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">Draft</span>
            <span className="InboxMenu__Content__Group__ListRight">27</span>
          </div>
        </div>
        <div className="InboxMenu__Content__Group">
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">Teams</span>
            <span className="InboxMenu__Content__Group__ListRight">4</span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">Groups</span>
            <span className="InboxMenu__Content__Group__ListRight">3</span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">
              Channels
            </span>
            <span className="InboxMenu__Content__Group__ListRight">6</span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">
              Location
            </span>
            <span className="InboxMenu__Content__Group__ListRight"></span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">Media</span>
            <span className="InboxMenu__Content__Group__ListRight">124</span>
          </div>
        </div>
        <div className="InboxMenu__Content__Group">
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">Setting</span>
            <span className="InboxMenu__Content__Group__ListRight"></span>
          </div>
          <div className="InboxMenu__Content__Group__List">
            <span className="InboxMenu__Content__Group__ListLeft">Help</span>
            <span className="InboxMenu__Content__Group__ListRight"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
