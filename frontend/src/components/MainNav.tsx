import { useState } from "react";
import Modal from "./Authentication/authModal/AuthModal.tsx";
import { Button } from "./ui/button";
import { AuthDropdown } from "./AuthDropdown/AuthDropdown";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export const MainNav = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isAuthenticated } = useSelector((state: any) => state.user);
  return (
    <>
      {!isAuthenticated ? (
        <div className="flex">
          {(location.pathname === "/discover" ||
            location.pathname === "/search") && (
            <Link to="/search">
              <button
                className={`md:flex  hidden font-bold pt-1  pe-6 gap-2  hover:text-orange-500 ${
                  location.pathname === "/search"
                    ? "text-orange-500"
                    : "text-black"
                } `}
              >
                <Search width={15} />
                Search
              </button>
            </Link>
          )}
          <Button className="font-bold " onClick={() => setShowModal(true)}>
            Sign In
          </Button>
          <Modal
            isVisible={showModal}
            handleClose={() => setShowModal(false)}
          />
        </div>
      ) : (
        <AuthDropdown />
      )}
    </>
  );
};
