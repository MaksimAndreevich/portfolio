import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Profile from "../../../ui/Profile";
import routes from "../../../lib/routes";

import { IUser } from "../../../lib/stores/interfaces/accountStore.interface";
import { sql } from "@vercel/postgres";

const ProfilePage = async () => {
  const session = await auth();

  if (!session?.user) redirect(routes.account);

  const user = await sql<IUser>`SELECT * FROM users WHERE email=${session?.user.email}`;

  console.log(user.rows[0], "user object");
  console.log(user.fields, "fields");

  return <Profile user={user.rows[0]} fields={user.fields} />;

};

export default ProfilePage;
