import { useUser } from "../Contexts/userContext";
import { useNavigate } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { useState, useEffect } from "react";

export function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [darkmode, setDarkmode] = useState(false);

  // Apply dark mode class to <body>
  useEffect(() => {
    document.body.classList.toggle("darkmode", darkmode);
    document.body.classList.toggle("whitemode", !darkmode);
  }, [darkmode]);

  const handleDarkMode = () => {
    setDarkmode((prev) => !prev);
  };

  let buttons = [];
  if (!user) {
    buttons = [
      { label: "Home", path: "/" },
      { label: "About", path: "/About" },
      { label: "Login", path: "/Login" },
    ];
  } else if (user.role_id === 2) {
    buttons = [
      { label: "Home", path: "/" },
      { label: "About", path: "/About" },
      { label: "Logout", onClick: logout },
    ];
  } else if (user.role_id === 1) {
    buttons = [
      { label: "Home", path: "/" },
      { label: "About", path: "/About" },
      { label: "UpdateUser", path: "/UpdateUser" },
      { label: "Logout", onClick: logout },
    ];
  } else {
    // Fallback for missing/unknown role_id
    buttons = [
      { label: "Home", path: "/" },
      { label: "About", path: "/About" },
      { label: "Logout", onClick: logout },
    ];
  }

  // Add dark mode toggle as last button for everyone using push
  buttons.push({
    label: darkmode ? "☀️" : "🌙",
    onClick: handleDarkMode,
  });

  return (
    <div className={Styles.navBar}>
      {buttons.map((btn) => (
        <button
          className={Styles.secNavBar}
          key={btn.label}
          type="button"
          onClick={
            btn.onClick
              ? () => {
                  btn.onClick();
                  if (btn.label === "Logout") {
                    navigate("/");
                  }
                }
              : btn.path
              ? () => navigate(btn.path)
              : undefined
          }
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
