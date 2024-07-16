import React from "react";
import { TextFieldElement } from "react-hook-form-mui";

export default function TextField({ name, label, type, sx, onChange, control }) {
  return (
    <TextFieldElement
      name={name}
      label={label}
      type={type}
      sx={sx}
      onChange={onChange}
      control={control}
      variant="filled"
      size="small"
      className="rounded-lg"
      fullWidth
    />
  )
}
