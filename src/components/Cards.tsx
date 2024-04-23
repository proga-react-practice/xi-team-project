export interface ICardData {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}

interface CardsProps {
  cards: ICardData[];
}

export default function Cards({ cards }: CardsProps) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <table>
            <tbody>
              <tr>
                <td>Level of AI</td>
                <td>
                  {card.levelOfAI.map((level, levelIndex) => (
                    <span key={levelIndex} className="value-block">
                      {level}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Where AI is used for?</td>
                <td>
                  {card.whereAIIsUsed.map((use, useIndex) => (
                    <span key={useIndex} className="value-block">
                      {use}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Type of AI</td>
                <td>
                  <span className="value-block">{card.TypeOfAI}</span>
                </td>
              </tr>
              <tr>
                <td>Rate AI Intelligence</td>
                <td>{card.rateAIIntelligence}</td>
              </tr>
            </tbody>
          </table>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
