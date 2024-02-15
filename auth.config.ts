import type { NextAuthConfig } from "next-auth";
import routes from "./lib/routes";

export const authConfig = {
  pages: {
    signIn: "/account/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAccount = nextUrl.pathname.startsWith("/account/profile");

      if (isOnAccount) {
        if (isLoggedIn) {
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        console.log("redirect to ", new URL(routes.accountProfile, nextUrl));

        return Response.redirect(new URL(routes.accountProfile, nextUrl));
      }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
