import { notFound, redirect } from "next/navigation";
import { auth } from "../../../auth";
import Profile from "../../../ui/Profile";
import routes from "../../../lib/routes";
import { getUser } from "../../../lib/services/serverActions";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) redirect(routes.account);

  const userData = await getUser(session.user.email);

  if (!userData) {
    notFound();
  } else {
    return <Profile user={userData} />;
  }
};

export default ProfilePage;
