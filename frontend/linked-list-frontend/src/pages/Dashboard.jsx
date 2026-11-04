import { List, GitBranch, Circle, Network } from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {

const structures = [
{
name: "Singly Linked List",
description: "Each node points to the next node.",
icon: List,
path: "/singly"
},
{
name: "Doubly Linked List",
description: "Each node points to previous and next nodes.",
icon: GitBranch,
path: "/doubly"
},
{
name: "Circular Singly Linked List",
description: "The last node points back to the first node.",
icon: Circle,
path: "/circular-singly"
},
{
name: "Circular Doubly Linked List",
description: "Nodes are connected in both directions circularly.",
icon: Network,
path: "/circular-doubly"
}
];

return ( <main className="flex-1 p-8 text-white">


  <h1 className="text-3xl font-bold mb-2">
    Welcome to Linked List Visualizer
  </h1>

  <p className="text-gray-400 mb-8">
    Learn and visualize linked list operations interactively.
  </p>

  <div className="grid grid-cols-2 gap-6">

    {structures.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition"
        >
          <Icon size={35} className="text-cyan-400 mb-4" />

          <h2 className="text-xl font-semibold mb-2">
            {item.name}
          </h2>

          <p className="text-gray-400 text-sm">
            {item.description}
          </p>

          <Link
            to={item.path}
            className="inline-block mt-5 bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400"
          >
            Explore
          </Link>

        </div>
      );
    })}

  </div>

</main>


);
}

export default Dashboard;
