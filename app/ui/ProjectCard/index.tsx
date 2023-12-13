import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { IProjectCard } from "../../lib/interfaces";

const ProjectCard = ({
  title,
  discription,
  linkToPage,
  linkToGit,
  image,
}: IProjectCard) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} component={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {discription}
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
