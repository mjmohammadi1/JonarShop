import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

import { logout } from "../../redux/slices/user";
import { useDispatch } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Jonar Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://logos.textgiraffe.com/logos/logo-name/Jonar-designstyle-popstar-m.png'
            alt=''
            className='topAvatar'
          />
          <button
            style={{
              marginLeft: 10,
              border: false,
              backgroundColor: "white",
              borderColor: "white",
            }}
            value='logout'
            onClick={handleLogout}
          >
            log out
          </button>
        </div>
      </div>
    </div>
  );
}
