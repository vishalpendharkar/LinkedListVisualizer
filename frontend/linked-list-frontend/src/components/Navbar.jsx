import { Code2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="h-16 bg-[#111827] border-b border-gray-800 flex items-center justify-between px-8">

      <div className="flex items-center gap-3">
        <Code2 size={28} className="text-cyan-400" />

        <h1 className="text-xl font-bold text-white">
          LinkedList<span className="text-cyan-400">Visualizer</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-sm">
          Data Structures Learning Platform
        </span>

        
      </div>

    </nav>
  );
}

export default Navbar;