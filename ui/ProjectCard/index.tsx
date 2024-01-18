"use client";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { IProjectCard } from "../../lib/interfaces";
import ExpandableText from "../ExpandableText";

const ProjectCard = ({ title, description, linkToPage, linkToGit, image }: IProjectCard) => {
  const router = useRouter();

  const goToGit = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card sx={{ maxWidth: 345 }} elevation={8}>
      <CardMedia sx={{ height: 220 }} title={title}>
        {image}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <ExpandableText text={description} typographyVariant="body2" maxLength={155} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.push(linkToPage)}>
          To Page
        </Button>
        <Button size="small" onClick={() => goToGit(linkToGit)}>
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
