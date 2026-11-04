import {
LayoutDashboard,
List,
GitBranch,
Circle,
Network
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

const menuItems = [
{ name: "Dashboard", icon: LayoutDashboard, path: "/" },
{ name: "Singly Linked List", icon: List, path: "/singly" },
{ name: "Doubly Linked List", icon: GitBranch, path: "/doubly" },
{ name: "Circular Singly", icon: Circle, path: "/circular-singly" },
{ name: "Circular Doubly", icon: Network, path: "/circular-doubly" }
];

return ( <aside className="w-64 min-h-screen bg-[#111827] border-r border-gray-800 p-5">

  <h2 className="text-gray-500 text-xs font-bold mb-5">
    DATA STRUCTURES
  </h2>

  {menuItems.map((item) => {
    const Icon = item.icon;

    return (
      <NavLink
        key={item.path}
        to={item.path}
        end={item.path === "/"}
        className={({ isActive }) =>
          `flex items-center gap-3 p-3 mb-2 rounded-lg transition-all
          ${isActive
            ? "bg-cyan-500/10 text-cyan-400"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
          }`
        }
      >
        <Icon size={20} />
        <span className="text-sm">{item.name}</span>
      </NavLink>
    );
  })}

</aside>


);
}

export default Sidebar;
