import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, HomeIcon, Globe, UsersIcon } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-gradient-to-b from-base-200 to-base-300 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-base-300 bg-base-100/40 backdrop-blur">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75"></div>
            <div className="relative bg-base-100 rounded-lg p-1.5">
              <Globe className="size-6 text-primary" />
            </div>
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary tracking-wide">
            MultiLingo
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link
          to="/"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case transition-all ${
            currentPath === "/" ? "btn-primary shadow-md" : "hover:bg-base-300"
          }`}
        >
          <HomeIcon className="size-5" />
          <span className="font-medium">Home</span>
        </Link>

        <Link
          to="/notifications"
          className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case transition-all ${
            currentPath === "/notifications" ? "btn-primary shadow-md" : "hover:bg-base-300"
          }`}
        >
          <BellIcon className="size-5" />
          <span className="font-medium">Notifications</span>
        </Link>
      </nav>

      {/* USER PROFILE SECTION */}
      <div className="p-4 border-t border-base-300 mt-auto bg-base-100/40 backdrop-blur">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-1">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">{authUser?.fullName}</p>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="size-2 rounded-full bg-success inline-block animate-pulse" />
              Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
