import { getRandomPhotos } from "../../lib/services/serverRequests";
import MemoGame from "../../ui/MemoGame";

export default async function MemoPage() {
  const photos = await getRandomPhotos(16);

  return <MemoGame photos={photos} />;
}
