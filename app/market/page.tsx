import { fetchProducts } from "../../lib/services/serverRequests";
import Market from "../../ui/Market";

export default async function MarketPage() {
  const products = await fetchProducts();

  return products && <Market products={products} />;
}
