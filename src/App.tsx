import "./App.css";
import { Tabs } from "./components/Tab";
import { Table, tableInfo } from "./components/Table";

function App() {
  return (
    <div>
      <Tabs />
      <Table tableInfo={tableInfo} />
    </div>
  );
}

export default App;
