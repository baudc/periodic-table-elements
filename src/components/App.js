import "./App.css";
import Header from "./Header";
import PeriodicTable from "./PeriodicTable";

const App = () => {
  return (
    <div className="flex-container-vertical">
      <Header />
      <main className="main-width">
        <PeriodicTable />
      </main>
    </div>
  );
};

export default App;
