import MarketProductInfo from "../../../ui/MarketProductInfo";

export default async function ProductPage({ params }: { params: { id: string } }) {
  return <MarketProductInfo id={params.id} />;
}
