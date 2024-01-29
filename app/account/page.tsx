import { Box, Button } from "@mui/material";
import Link from "next/link";
import routes from "../../lib/routes";

export default function AccountPage() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Link href={routes.accountLogin}>
        <Button variant="contained" size="large" sx={{ mr: 1 }}>
          login
        </Button>
      </Link>

      <Link href={routes.accountRegister}>
        <Button variant="contained" size="large">
          register
        </Button>
      </Link>
    </Box>
  );
}
