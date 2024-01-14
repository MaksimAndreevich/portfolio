"use client";

import { Grid } from "@mui/material";
import cards from "../AboutThisApp/projectsCards";
import ProjectCard from "../ProjectCard";

const ProjectsCards = () => {
  return (
    <Grid container spacing={2} pt={2} pb={1} justifyContent={"center"} alignItems={"stretch"}>
      {cards.map(({ description, title, linkToPage, linkToGit, image }) => {
        return (
          <Grid item md key={title}>
            <ProjectCard title={title} description={description} linkToPage={linkToPage} linkToGit={linkToGit} image={image} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectsCards;
