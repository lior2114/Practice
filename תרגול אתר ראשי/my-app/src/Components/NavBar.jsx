import { useUser } from "../Contexts/userContext"
import { useNavigate } from 'react-router-dom';
import Styles from "./NavBar.module.css"

export function NavBar(){
    const navigate = useNavigate();
    const { user, logout} = useUser();

    // If no user: Home, About, Login
    // If user_id == 2: Home, About, Logout
    // If user_id == 1: Home, About, UpdateUser, Logout

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
            { label: "Logout", onClick: logout }
        ];
    } else if (user.role_id === 1) {
        buttons = [
            { label: "Home", path: "/" },
            { label: "About", path: "/About" },
            { label: "UpdateUser", path: "/UpdateUser" },
            { label: "Logout", onClick: logout }
        ];
    } else {
        // Fallback when role_id is missing in localStorage after refresh: treat as regular user
        buttons = [
            { label: "Home", path: "/" },
            { label: "About", path: "/About" },
            { label: "Logout", onClick: logout }
        ];
    }

    return (
        <div className={Styles.navBar}>
            {buttons.map((btn) => (
                <button className={Styles.secNavBar}
                    key={btn.label}
                    onClick={
                        btn.onClick
                            ? () => {
                                btn.onClick();
                                navigate("/");
                            }
                            : () => navigate(btn.path)
                    }
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}