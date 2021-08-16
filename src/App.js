import { Timer, SortingMachine } from "./component";
import "./App.css";
import { Layout } from "./style/Layout";

function App() {
  return (
    <Layout>
      <Timer />
      <SortingMachine />
      <Timer />
    </Layout>
  );
}

export default App;
