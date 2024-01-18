import { Button, SxProps, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { useState } from "react";

interface EaxpandableTextProps {
  text: string;
  maxLength: number;
  typographyVariant?: Variant;
  sxTypography?: SxProps;
}

const ExpandableText = ({ text, maxLength, typographyVariant, sxTypography }: EaxpandableTextProps) => {
  const [expanded, setExpanded] = useState(text.length <= maxLength);

  const truncatedText = expanded ? text : `${text.slice(0, maxLength)}...`;

  return (
    <Typography variant={typographyVariant} sx={{ ...sxTypography }}>
      {truncatedText}
      {!expanded && text.length > maxLength && (
        <Button
          size="small"
          onClick={() => setExpanded(true)}
          sx={{
            justifyContent: "flex-start",
            textDecoration: "underline",
            color: "inherit",
            p: 0,
            pl: 1,
            verticalAlign: "inherit",
            textTransform: "none",
            fontSize: 14,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          disableRipple
          disableFocusRipple
          disableElevation
          disableTouchRipple
        >
          more
        </Button>
      )}
    </Typography>
  );
};

export default ExpandableText;
