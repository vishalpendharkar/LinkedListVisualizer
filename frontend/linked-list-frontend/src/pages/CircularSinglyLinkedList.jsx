
import { useState } from "react";
import {
  Plus,
  Trash2,
  Search,
  RotateCcw,
  ArrowRight,
  RefreshCw,
  CircleDot,
  Play,
} from "lucide-react";

function CircularSinglyLinkedList() {
  const [nodes, setNodes] = useState([10, 20, 30, 40]);
  const [value, setValue] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Insert at beginning
  const insertBeginning = () => {
    if (value === "") return;

    setNodes([Number(value), ...nodes]);
    setMessage(`${value} inserted at beginning successfully`);
    setValue("");
    setSearchResult(null);
  };

  // Insert at end
  const insertEnd = () => {
    if (value === "") return;

    setNodes([...nodes, Number(value)]);
    setMessage(`${value} inserted at end successfully`);
    setValue("");
    setSearchResult(null);
  };

  // Insert at position
  const insertPosition = () => {
    const pos = Number(position);

    if (value === "" || !Number.isInteger(pos) || pos < 1 || pos > nodes.length + 1) {
      setMessage("Enter a valid position and value");
      return;
    }

    const updated = [...nodes];
    updated.splice(pos - 1, 0, Number(value));

    setNodes(updated);
    setMessage(`${value} inserted at position ${pos}`);
    setValue("");
    setPosition("");
    setSearchResult(null);
  };

  // Delete beginning
  const deleteBeginning = () => {
    if (nodes.length === 0) {
      setMessage("List is empty");
      return;
    }

    setNodes(nodes.slice(1));
    setMessage("First node deleted successfully");
    setSearchResult(null);
  };

  // Delete end
  const deleteEnd = () => {
    if (nodes.length === 0) {
      setMessage("List is empty");
      return;
    }

    setNodes(nodes.slice(0, -1));
    setMessage("Last node deleted successfully");
    setSearchResult(null);
  };

  // Delete by value
  const deleteValue = () => {
    if (value === "") return;

    const index = nodes.indexOf(Number(value));

    if (index === -1) {
      setMessage("Node not found");
      return;
    }

    const updated = [...nodes];
    updated.splice(index, 1);

    setNodes(updated);
    setMessage(`${value} deleted successfully`);
    setValue("");
    setSearchResult(null);
  };

  // Search
  const searchNode = () => {
    if (value === "") return;

    const index = nodes.indexOf(Number(value));

    if (index !== -1) {
      setSearchResult(index);
      setMessage(`${value} found at position ${index + 1}`);
    } else {
      setSearchResult(null);
      setMessage(`${value} not found`);
    }
  };

  // Reset
  const resetList = () => {
    setNodes([10, 20, 30, 40]);
    setValue("");
    setPosition("");
    setSearchResult(null);
    setMessage("Circular linked list reset successfully");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <CircleDot size={30} className="text-cyan-400" />

          <h1 className="text-3xl font-bold">
            Circular Singly Linked List
          </h1>
        </div>

        <p className="text-gray-400">
          Visualize and perform operations on a circular singly linked list.
        </p>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Total Nodes</p>
          <h2 className="text-3xl font-bold text-cyan-400 mt-2">
            {nodes.length}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Head Node</p>
          <h2 className="text-3xl font-bold text-green-400 mt-2">
            {nodes.length ? nodes[0] : "NULL"}
          </h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Last Node</p>
          <h2 className="text-3xl font-bold text-purple-400 mt-2">
            {nodes.length ? nodes[nodes.length - 1] : "NULL"}
          </h2>
        </div>

      </div>

      {/* Visualization */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">
            Linked List Visualization
          </h2>

          <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-sm">
            Circular Structure
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 py-8">

          {nodes.length === 0 ? (
            <p className="text-gray-500">List is empty</p>
          ) : (
            nodes.map((node, index) => (
              <div key={index} className="flex items-center gap-3">

                <div
                  className={`rounded-xl border-2 p-4 min-w-20 text-center transition-all ${
                    searchResult === index
                      ? "border-yellow-400 bg-yellow-400/20"
                      : "border-cyan-500 bg-slate-800"
                  }`}
                >
                  <p className="text-xs text-gray-400 mb-1">
                    {index === 0 ? "HEAD" : `NODE ${index + 1}`}
                  </p>

                  <p className="text-2xl font-bold text-cyan-400">
                    {node}
                  </p>

                  <div className="border-t border-gray-600 mt-2 pt-2">
                    <p className="text-xs text-gray-400">
                      NEXT
                    </p>
                  </div>
                </div>

                <ArrowRight className="text-cyan-400" size={22} />

              </div>
            ))
          )}

          {nodes.length > 0 && (
            <div className="border-2 border-purple-500 rounded-xl p-4 bg-purple-500/10 text-center">
              <RefreshCw className="mx-auto text-purple-400 mb-2" size={24} />
              <p className="text-purple-400 font-semibold text-sm">
                HEAD
              </p>
              <p className="text-xs text-gray-400">
                Circular Link
              </p>
            </div>
          )}

        </div>

        {nodes.length > 0 && (
          <div className="text-center mt-4 text-purple-400 text-sm">
            Last Node → First Node (HEAD)
          </div>
        )}

      </div>

      {/* Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Insert */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <Plus className="text-green-400" />
            Insert Operations
          </h2>

          <input
            type="number"
            placeholder="Enter node value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400 mb-4"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <button
              onClick={insertBeginning}
              className="bg-green-600 hover:bg-green-700 p-3 rounded-lg"
            >
              Insert Beginning
            </button>

            <button
              onClick={insertEnd}
              className="bg-green-600 hover:bg-green-700 p-3 rounded-lg"
            >
              Insert End
            </button>

          </div>

          <div className="flex gap-3 mt-4">

            <input
              type="number"
              placeholder="Position (1-based)"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
            />

            <button
              onClick={insertPosition}
              className="bg-cyan-600 hover:bg-cyan-700 px-5 rounded-lg"
            >
              Insert
            </button>

          </div>

        </div>

        {/* Delete */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-5 flex items-center gap-2">
            <Trash2 className="text-red-400" />
            Delete Operations
          </h2>

          <input
            type="number"
            placeholder="Enter value to delete"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none mb-4"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <button
              onClick={deleteBeginning}
              className="bg-red-600 hover:bg-red-700 p-3 rounded-lg"
            >
              Delete Beginning
            </button>

            <button
              onClick={deleteEnd}
              className="bg-red-600 hover:bg-red-700 p-3 rounded-lg"
            >
              Delete End
            </button>

            <button
              onClick={deleteValue}
              className="bg-red-600 hover:bg-red-700 p-3 rounded-lg sm:col-span-2"
            >
              Delete By Value
            </button>

          </div>

        </div>

      </div>

      {/* Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">

        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Search className="text-yellow-400" />
          Search Node
        </h2>

        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="number"
            placeholder="Enter value to search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
          />

          <button
            onClick={searchNode}
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Play size={18} />
            Search
          </button>

        </div>

      </div>

      {/* Message */}
      {message && (
        <div className="bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-xl p-4 mt-6">
          {message}
        </div>
      )}

      {/* Reset */}
      <div className="flex justify-end mt-6">

        <button
          onClick={resetList}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg"
        >
          <RotateCcw size={18} />
          Reset List
        </button>

      </div>

    </div>
  );
}

export default CircularSinglyLinkedList;