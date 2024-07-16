import React from "react";
import { Button } from "@mui/material";

export default function GeneralButton({ startIcon, endIcon, type, onClick, children }) {
    return (
        <Button
            variant="outlined"
            startIcon={startIcon}
            endIcon={endIcon}
            sx={{
                width: 'fit-content',
                padding: '0.5rem 2rem',
                textTransform: 'none',
                color: 'cyan',
                borderColor: 'cyan',
                borderRadius: 2,
                '&:hover': { color: 'black', backgroundColor: 'cyan' }
            }}
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}