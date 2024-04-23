import "./App.css";
import Form from "./components/Form/Form";
import Cards from "./components/Cards";
import { useState } from "react";
import { ICardData } from "./components/Cards";

function App() {
  const [formData, setFormData] = useState<ICardData[]>([]);

  const handleDelete = (index: number) => {
    setFormData((prevCards) => prevCards.filter((_, i) => i !== index));
  };
  return (
    <>
      <main>
        <div className="container">
          <section id="content">
            <div className="main-container">
              <Form setFormData={setFormData} />
              <Cards cards={formData} onDelete={handleDelete} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
