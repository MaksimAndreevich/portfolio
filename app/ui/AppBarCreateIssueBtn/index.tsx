import BugReportIcon from "@mui/icons-material/BugReport";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const AppBarCreateIssueBtn = () => {
  const goToNewIssueGit = () => {
    const newWindow = window.open("https://github.com/MaksimAndreevich/portfolio/issues/new", "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Tooltip disableFocusListener title={"Create issue"}>
      <IconButton sx={{ color: "white" }} onClick={goToNewIssueGit}>
        <BugReportIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AppBarCreateIssueBtn;
