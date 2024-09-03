import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/index";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/task-manager-with-auth/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/task-manager-with-auth/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
