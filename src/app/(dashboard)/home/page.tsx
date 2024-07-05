"use client";

import { logOut } from "@/actions";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <p>This is home page</p>{" "}
      <Button onClick={() => logOut()}>Log out </Button>
    </div>
  );
}
