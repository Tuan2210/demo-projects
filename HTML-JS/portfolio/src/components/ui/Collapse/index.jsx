import React, { useState } from "react";

import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Collapse } from 'react-collapse';

import { MainStyle } from "@components/styles";
import classNames from "classnames/bind";
const cx = classNames.bind(MainStyle);

export default function CollapsibleSection({ title, content }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Button
        variant="text"
        sx={{ textTransform: 'none', color: 'cyan', '&:hover': { color: '#06b6d4 ' } }}
        className={cx("tabPanelContent")}
        size="large"
        color="warning"
        startIcon={!isOpened ? <ArrowRightIcon fontSize="medium" /> : <ArrowDropDownIcon fontSize="medium" />}
        onClick={() => setIsOpened(!isOpened)}
      >
        {title}
      </Button>
      <Collapse isOpened={isOpened}>
        <p className={cx(["tabPanelContent", "ml-[2%] text-base"])}>{content}</p>
      </Collapse>
    </div>
  );
};