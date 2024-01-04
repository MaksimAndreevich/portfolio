import { Box, Tab, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box maxHeight={"100%"} role="tabpanel" hidden={value !== index} id={`market-tabpanel-${index}`} aria-labelledby={`market-tab-${index}`} {...other}>
      {value === index && <Box height={"100%"}>{children}</Box>}
    </Box>
  );
}
