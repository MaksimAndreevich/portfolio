import { Button, ButtonProps, styled } from "@mui/material";
import { orange, grey, blueGrey } from "@mui/material/colors";

interface ICaclButton {
  content: string;
  color?: "orange" | "grey" | "blueGrey";
}

const colors = {
  orange: { main: orange[500], hover: orange[700] },
  grey: { main: grey[500], hover: grey[700] },
  blueGrey: { main: blueGrey[500], hover: blueGrey[700] },
};

const CalcButton = ({ content, color = "blueGrey" }: ICaclButton) => {
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: colors[color].main,
    "&:hover": {
      backgroundColor: colors[color].hover,
    },
  }));

  return (
    <ColorButton size="large" variant="contained">
      {content}
    </ColorButton>
  );
};

export default CalcButton;
