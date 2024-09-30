import React from 'react'
import './Flashcard.css'
const Flashcard = ({ card, showAnswer, onFlip }) => {
  return (
    <div className="flashcard" onClick={onFlip}>
      <div className="card-content">
        {showAnswer ? <p>{card.answer}</p> : <p>{card.question}</p>}
      </div>
    </div>
  )
}

export default Flashcard
