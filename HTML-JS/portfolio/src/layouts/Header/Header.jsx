import React, { useState } from "react";

// https://mui.com/material-ui/react-menu
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { HeaderStyle } from "../../components/styles";
import classNames from "classnames/bind";

const cx = classNames.bind(HeaderStyle);

export default function Header() {

  // menu list
  const menuList = ['Home', 'About', 'Services', 'Contact']

  // menu items
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="flex justify-around gap-[40%] p-2 mb-4 flex-grow">
      <div className={cx(["tuanTitle", "text-[cyan] text-5xl"])}>
        T
        <span className="text-white text-3xl">uan</span>
      </div>
      <div className={cx(["menuHeader", "flex gap-16"])}>
        {menuList.map((item, index) => (
          <button
            key={index}
            id="basic-button"
            // aria-controls={open ? 'basic-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            className={cx(["menuItem", "text-[cyan] text-lg"])}
            onClick={handleClick}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  )
}