import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import Modal from "./Authentication/authModal/AuthModal.tsx";
import { AuthDropdown } from "./AuthDropdown/AuthDropdown";
import { useSelector } from "react-redux";

export const MobileNav = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isAuthenticated } = useSelector((state: any) => state.user);
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span></span>
        </SheetTitle>
        <SheetDescription className="flex py-4">
          {!isAuthenticated ? (
            <>
              <Button
                className="flex-1 text-white  font-bold "
                onClick={() => setShowModal(true)}
              >
                Sign In
              </Button>
              <Modal
                isVisible={showModal}
                handleClose={() => setShowModal(false)}
              />
            </>
          ) : (
            <AuthDropdown  />
          )}

          <Modal
            isVisible={showModal}
            handleClose={() => setShowModal(false)}
          />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
