import { NavLink, Outlet } from "react-router";

const ProfileLayout = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex gap-6">
      {/* Sidebar Navigation */}
      <nav className="w-1/4 bg-white p-4 rounded-lg shadow">
        <ul className="space-y-2">
          <li>
            <NavLink
              to=""
              end
              className={({ isActive }) =>
                `block p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Account Info
            </NavLink>
          </li>
          <li>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `block p-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
