import React, { useState } from "react";

// https://mui.com/material-ui/react-menu
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import IMAGES from "@constants/imgUrl";

import { HeaderStyle } from "@components/styles";
import classNames from "classnames/bind";

const cx = classNames.bind(HeaderStyle);

export default function Header() {

  // menu list
  const menuList = ['Home', 'About', 'Projects', 'Contact']

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
    <header className={cx(["header", "grid grid-cols-2 items-center"])}>
      <img src={IMAGES.vnFlag} alt="VN" width={150} className={cx(["vnFlag", "col-span-1"])} />
      <div className={cx(["menuHeader", "col-span-1 text-right flex justify-around"])}>
        {menuList.map((item, index) => (
          <button
            key={index}
            id="basic-button"
            // aria-controls={open ? 'basic-menu' : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? 'true' : undefined}
            className={cx(["menuItem", "text-[cyan] text-lg outline-0"])}
            onClick={handleClick}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  )
}