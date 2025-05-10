import { FC, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { LogInOrSignUpForm } from "./log-in-form";
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            <LogInOrSignUpForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { UserControls };
