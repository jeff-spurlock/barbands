import { FC, useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import { AccountDialogContent, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { AccountCarousel } from "./AccountCarousel";
import { useForm } from "react-hook-form";
import { signOut, useSession } from "@/lib/auth-client";
import { Link } from "@tanstack/react-router";

const UserControls: FC = () => {
  const { data } = useSession();
  const evaluateSession = () => {
    if (data?.session?.expiresAt) { return data.session.expiresAt.getTime() > Date.now() } else { return false }
  }
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(evaluateSession());
  
  useEffect(() => {
    setIsLoggedIn(evaluateSession());
  }, [data]);
  return (
    <Dialog open={showLogin} onOpenChange={setShowLogin}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="ghost"><User className="size-6" /></Button></DropdownMenuTrigger>
        <DropdownMenuContent>
         
            {isLoggedIn ? (
              <>
                <DropdownMenuItem asChild>
                  <Link to="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <button onClick={() => signOut()}>Log Out</button>
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem asChild>
                <DialogTrigger onClick={() => setShowLogin(true)}>Log In</DialogTrigger>
              </DropdownMenuItem>
            )}
          <DropdownMenuSeparator />
          <DropdownMenuItem>My Bands</DropdownMenuItem>
          <DropdownMenuItem>My Venues</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AccountDialogContent>
        <DialogHeader>
          <span className="sr-only"><DialogTitle>Your Account</DialogTitle></span>
        </DialogHeader>
        <AccountCarousel />
      </AccountDialogContent>
    </Dialog>
  );
};

export { UserControls };
