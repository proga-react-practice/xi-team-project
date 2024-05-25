import React from "react";
import { AICard } from "../../context/AICardsContextProvider";
import { INPUT_DATA_ASSETS, RANGE_OPTIONS } from "../inputDataAssets";
import { CardInfoMix } from "../../Cards/CardsInfoMix";
import { ModalCardBox } from "../../Cards/ModalCardBox";

interface AICardComponentProps {
  card: AICard;
}

export const AICardComponent: React.FC<AICardComponentProps> = ({ card }) => {
  return (
    <ModalCardBox>
      <CardInfoMix title={INPUT_DATA_ASSETS[0].label} info={card.levelOfAI} />
      <CardInfoMix
        title={INPUT_DATA_ASSETS[1].label}
        info={card.whereAIIsUsed}
      />
      <CardInfoMix title={INPUT_DATA_ASSETS[2].label} info={card.TypeOfAI} />
      <CardInfoMix
        title={RANGE_OPTIONS[0].label}
        info={card.rateAIIntelligence.toString()}
      />
    </ModalCardBox>
  );
};
