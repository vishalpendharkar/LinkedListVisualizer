
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SinglyLinkedList from "./pages/SinglyLinkedList";
import DoublyLinkedLis from "./pages/DoublyLinkedList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CircularSinglyLinkedList from "./pages/CircularSinglyLinkedList";

function App() {
  return (
    <BrowserRouter>
    
     <div className="min-h-screen bg-[#0b1020]">

        <Navbar />

        <div className="flex">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/singly" element={<SinglyLinkedList />} />
            <Route path="/doubly" element={<DoublyLinkedLis />} />
            <Route path="/circular-singly" element={<CircularSinglyLinkedList />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;