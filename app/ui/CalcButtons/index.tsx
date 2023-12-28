import { Grid } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import CalcButton from "../CalcButton";
import buttons from "./buttons";

const CalcButtons = () => {
  const calcStore = useStore("calcStore");

  const handleClick = (value: string | number, role: string, content: string) => {
    calcStore.buttonClickHandler(value, role, content);
  };

  return (
    <Grid container spacing={2} p={1}>
      {buttons.map(({ content, color, value, role }) => {
        return (
          <Grid item xs={value === "reset" || value === "=" ? 6 : 3} key={content}>
            <CalcButton action={() => handleClick(value, role, content)} content={content} color={color} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CalcButtons;
