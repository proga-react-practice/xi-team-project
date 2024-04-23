import "./App.css";
import Form from "./components/Form/Form";
import Cards from "./components/Cards";
import { dummyData } from "././dummydata";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <section id="content">
            <div className="main-container">
              <Form></Form>
              <Cards cards={dummyData} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
