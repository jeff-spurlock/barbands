import { FC, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import { AccountDialogContent, Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { AccountCarousel } from "./AccountCarousel";
import { useForm } from "react-hook-form";

const UserControls: FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const form = useForm();
  return (
    <Dialog open={showLogin} onOpenChange={setShowLogin}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="ghost"><User className="size-6" /></Button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild><DialogTrigger onClick={() => setShowLogin(true)}>Log In</DialogTrigger></DropdownMenuItem>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
