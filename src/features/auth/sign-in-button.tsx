"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signInAction } from "../actions/auth.action";

export const SignInButton = () => {
  return (
    <Button onClick={() => signInAction()} size="sm">
      <LogIn size={16} className="mr-2" />
      Sign In
    </Button>
  );
};
