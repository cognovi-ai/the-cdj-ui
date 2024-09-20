import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{props.children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
