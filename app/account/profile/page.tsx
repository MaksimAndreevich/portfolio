import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Profile from "../../../ui/Profile";
import routes from "../../../lib/routes";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) redirect(routes.account);

  return <Profile user={session.user} />;
};

export default ProfilePage;
