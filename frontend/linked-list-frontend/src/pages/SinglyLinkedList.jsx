import { useState } from "react";
import { ArrowRight, RotateCcw, Search, Plus, Trash2 } from "lucide-react";

function SinglyLinkedList() {

const [nodes, setNodes] = useState([10, 20, 30]);
const [value, setValue] = useState("");
const [position, setPosition] = useState("");
const [searchValue, setSearchValue] = useState("");
const [message, setMessage] = useState("");

// Insert at Beginning
const insertBeginning = () => {
if (value === "") return;

setNodes([Number(value), ...nodes]);
setMessage(`${value} inserted at beginning.`);
setValue("");

};

// Insert at End
const insertEnd = () => {
if (value === "") return;

setNodes([...nodes, Number(value)]);
setMessage(`${value} inserted at end.`);
setValue("");


};

// Insert at Position (1-based)
const insertPosition = () => {
if (value === "" || position === "") return;


const pos = Number(position);

if (!Number.isInteger(pos) || pos < 1 || pos > nodes.length + 1) {
  setMessage("Invalid position!");
  return;
}

const updated = [...nodes];
updated.splice(pos - 1, 0, Number(value));

setNodes(updated);
setMessage(`${value} inserted at position ${pos}.`);

setValue("");
setPosition("");


};

// Delete from Beginning
const deleteBeginning = () => {
if (nodes.length === 0) {
setMessage("Linked list is empty!");
return;
}


setNodes(nodes.slice(1));
setMessage("First node deleted.");


};

// Delete from End
const deleteEnd = () => {
if (nodes.length === 0) {
setMessage("Linked list is empty!");
return;
}


setNodes(nodes.slice(0, -1));
setMessage("Last node deleted.");


};

// Delete at Position
const deletePosition = () => {
const pos = Number(position);


if (!Number.isInteger(pos) || pos < 1 || pos > nodes.length) {
  setMessage("Invalid position!");
  return;
}

const updated = [...nodes];
updated.splice(pos - 1, 1);

setNodes(updated);
setMessage(`Node at position ${pos} deleted.`);
setPosition("");


};

// Search
const searchElement = () => {
if (searchValue === "") return;


const index = nodes.indexOf(Number(searchValue));

if (index !== -1) {
  setMessage(`${searchValue} found at position ${index + 1}.`);
} else {
  setMessage(`${searchValue} not found.`);
}


};

// Reverse
const reverseList = () => {
setNodes([...nodes].reverse());
setMessage("Linked list reversed successfully.");
};

// Reset
const resetList = () => {
setNodes([10, 20, 30]);
setMessage("Linked list reset.");
};

return ( <main className="flex-1 p-8 text-white">

```
  <h1 className="text-3xl font-bold mb-2">
    Singly Linked List
  </h1>

  <p className="text-gray-400 mb-8">
    Perform linked list operations and visualize how nodes are connected.
  </p>

  {/* Statistics */}
  <div className="grid grid-cols-3 gap-4 mb-8">

    <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
      <p className="text-gray-400 text-sm">Total Nodes</p>
      <h2 className="text-2xl font-bold text-cyan-400">
        {nodes.length}
      </h2>
    </div>

    <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
      <p className="text-gray-400 text-sm">Head</p>
      <h2 className="text-2xl font-bold text-cyan-400">
        {nodes.length > 0 ? nodes[0] : "NULL"}
      </h2>
    </div>

    <div className="bg-[#111827] p-5 rounded-xl border border-gray-800">
      <p className="text-gray-400 text-sm">Tail</p>
      <h2 className="text-2xl font-bold text-cyan-400">
        {nodes.length > 0 ? nodes[nodes.length - 1] : "NULL"}
      </h2>
    </div>

  </div>

  {/* Visualization */}
  <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 mb-8">

    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl font-semibold">
        Linked List Visualization
      </h2>

      <button
        onClick={resetList}
        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
      >
        <RotateCcw size={17} />
        Reset
      </button>
    </div>

    <div className="flex items-center gap-3 flex-wrap min-h-24">

      <span className="text-cyan-400 font-bold">HEAD</span>

      {nodes.map((node, index) => (

        <div key={index} className="flex items-center gap-3">

          <div className="bg-cyan-500 text-black px-6 py-4 rounded-lg font-bold text-lg">
            {node}
          </div>

          <ArrowRight className="text-cyan-400" size={25} />

        </div>

      ))}

      <span className="text-yellow-400 font-bold">NULL</span>

    </div>

    {nodes.length === 0 && (
      <p className="text-gray-500 mt-3">
        Linked List is empty.
      </p>
    )}

  </div>

  {/* Operations */}
  <div className="grid grid-cols-2 gap-6">

    {/* Insert */}
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5 text-cyan-400">
        <Plus className="inline mr-2" size={20} />
        Insert Operations
      </h2>

      <input
        type="number"
        placeholder="Enter node value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 mb-4 rounded-lg bg-[#0b1020] border border-gray-700 outline-none"
      />

      <button
        onClick={insertBeginning}
        className="w-full bg-cyan-500 text-black p-3 rounded-lg font-semibold mb-3"
      >
        Insert at Beginning
      </button>

      <button
        onClick={insertEnd}
        className="w-full bg-cyan-500 text-black p-3 rounded-lg font-semibold mb-3"
      >
        Insert at End
      </button>

      <input
        type="number"
        placeholder="Enter position (1-based)"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-[#0b1020] border border-gray-700 outline-none"
      />

      <button
        onClick={insertPosition}
        className="w-full bg-cyan-500 text-black p-3 rounded-lg font-semibold"
      >
        Insert at Position
      </button>

    </div>

    {/* Delete and Search */}
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold mb-5 text-red-400">
        <Trash2 className="inline mr-2" size={20} />
        Delete Operations
      </h2>

      <button
        onClick={deleteBeginning}
        className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold mb-3"
      >
        Delete from Beginning
      </button>

      <button
        onClick={deleteEnd}
        className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold mb-3"
      >
        Delete from End
      </button>

      <button
        onClick={deletePosition}
        className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold mb-6"
      >
        Delete at Position
      </button>

      <h2 className="text-lg font-semibold mb-3 text-yellow-400">
        <Search className="inline mr-2" size={20} />
        Search Element
      </h2>

      <input
        type="number"
        placeholder="Enter value to search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full p-3 mb-3 rounded-lg bg-[#0b1020] border border-gray-700 outline-none"
      />

      <button
        onClick={searchElement}
        className="w-full bg-yellow-500 text-black p-3 rounded-lg font-semibold"
      >
        Search
      </button>

    </div>

  </div>

  {/* Message */}
  {message && (
    <div className="mt-6 bg-[#111827] border border-gray-700 rounded-lg p-4 text-cyan-400">
      {message}
    </div>
  )}

</main>

);
}

export default SinglyLinkedList;
