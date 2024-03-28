import { TopBar } from "./components/TopBar";
import { SideBar } from "./components/SideBar";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <TopBar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
