import "./App.css";
import Form from "./components/Form/Form";
import Cards from "./components/Cards";
// import { dummyData } from "././dummydata";
import { useState } from "react";
import { ICardData } from "./components/Cards";

function App() {
  const [formData, setFormData] = useState<ICardData>({
    levelOfAI: [],
    whereAIIsUsed: [],
    TypeOfAI: "",
    rateAIIntelligence: 0,
  });
  return (
    <>
      <main>
        <div className="container">
          <section id="content">
            <div className="main-container">
              <Form setFormData={setFormData} />
              {/* <Cards cards={formData} /> */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
