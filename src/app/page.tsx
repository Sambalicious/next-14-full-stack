"use client";

import { getGoogleOauthConsentUrl } from "@/actions";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleLogin = async () => {
    const res = await getGoogleOauthConsentUrl();

    if (res.url) {
      window.location.href = res.url;
    }
  };
  return (
    <main className="bg-black-100 items-center text-white-100 py-10 px-20 flex justify-center">
      Hello world
      <Button type="submit" onClick={handleLogin}>
        Sign in with Google{" "}
      </Button>
    </main>
  );
}
