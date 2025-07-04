import React from 'react';
import Card from '../Services/Card';
import styles from './Services.module.css';

type CardItem = {
  title: string;
  description: string;
  imageUrl: string;
};  

type CardListProps = {
  cards: CardItem[];
  limit?: number;
};



const CardList: React.FC<CardListProps> = ({ cards, limit }) => {

  const cardsArray = Object.values(cards);


  const cardsToShow = limit ? cardsArray.slice(0, limit) : cardsArray;

  return (
    <div className={styles.cardList}>
      {cardsToShow.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
    
  );
};

export default CardList;
