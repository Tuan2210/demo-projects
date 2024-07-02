import React, { useState } from "react";

import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { Collapse } from 'react-collapse';

export default function CollapsibleSection({ title, content }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Button
        variant="text"
        sx={{ textTransform: 'none' }}
        size="large"
        color="warning"
        className="hover:text-[cyan]"
        onClick={() => setIsOpened(!isOpened)}
      >
        {!isOpened ? <ArrowRightIcon fontSize="medium" /> : <ArrowDropDownIcon fontSize="medium" />}
        {title}
      </Button>
      <Collapse isOpened={isOpened}>
        <p className="ml-[2%] text-base">{content}</p>
      </Collapse>
    </div>
  );
};