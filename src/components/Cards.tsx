import { CHECK_AND_RADIO, RANGE } from "../data";

export interface ICardData {
  levelOfAI: string[];
  whereAIIsUsed: string[];
  TypeOfAI: string;
  rateAIIntelligence: number;
}

interface ICardsProps {
  cards: ICardData[];
  onDelete: (index: number) => void;
}

export default function Cards({ cards, onDelete }: ICardsProps) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <table>
            <tbody>
              <tr>
                <td>{CHECK_AND_RADIO[0].label}</td>
                <td>
                  {card.levelOfAI.map((level, levelIndex) => (
                    <span key={levelIndex} className="value-block">
                      {level}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td>{CHECK_AND_RADIO[1].label}</td>
                <td>
                  {card.whereAIIsUsed.map((use, useIndex) => (
                    <span key={useIndex} className="value-block">
                      {use}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <td>{CHECK_AND_RADIO[2].label}</td>
                <td>
                  <span className="value-block">{card.TypeOfAI}</span>
                </td>
              </tr>
              <tr>
                <td>{RANGE[0].label}</td>
                <td>{card.rateAIIntelligence}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
