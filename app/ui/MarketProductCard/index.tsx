import { Box, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { formatTitleMarketCard } from "../../lib/helpers";
import routes from "../../lib/routes";
import MarketProductCounerBtn from "../MarketProductCounerBtn";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
  count: number;
}

const ProductCard = observer(({ id, title, price, imageUrl, rating, count }: IProductCardProps) => {
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345, height: 400, display: "flex", flexDirection: "column", m: "auto" }}>
      <CardMedia sx={{ height: "auto", maxHeight: 140, flexGrow: 1 }} image={imageUrl} title={title} component="img" />

      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box>
          <Typography gutterBottom variant="h6" sx={{ overflowWrap: "anywhere" }}>
            {title.length > 51 ? formatTitleMarketCard(title) : title}
          </Typography>
          <Rating value={rating} readOnly precision={0.1} />
        </Box>

        <Typography variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>

      <CardActions>
        <MarketProductCounerBtn count={count} id={id} />

        <Button onClick={() => router.push(`${routes.market}/${id}`)}>Learn More</Button>
      </CardActions>
    </Card>
  );
});

export default ProductCard;
