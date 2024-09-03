import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/index";
import PropTypes from "prop-types";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/task-manager-with-auth/",
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
