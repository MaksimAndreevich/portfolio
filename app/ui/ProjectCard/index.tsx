"use client";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { IProjectCard } from "../../lib/interfaces";

const ProjectCard = ({ title, description, linkToPage, linkToGit, image }: IProjectCard) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 190 }} title={title}>
        {image}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.push(linkToPage)}>
          To Page
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
