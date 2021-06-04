import "./App.css";
import Header from "./Header/Header";
import PeriodicTable from "./PeriodicTable/PeriodicTable";

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
