import React, { useState } from 'react'
import Flashcard from './Flashcard'

const App = () => {
  const [cards] = useState([
    { id:1, question: 'What is the supreme law of the land?', answer: 'The Constitution' },
    { id:2, question: 'What does the Constitution do?', answer: 'Sets up the government, defines the government, protects basic rights' },
    { id:3, question: 'The idea of self-government is in the first three words of the Constitution. What are these words?', answer: 'We the People' },
    { id:4, question: 'What is an amendment?', answer: 'A change or addition to the Constitution' },
    { id:5, question: 'What do we call the first ten amendments to the Constitution?', answer: 'The Bill of Rights' },
    { id:6, question: 'What is one right or freedom from the First Amendment?', answer: 'Speech, religion, assembly, press, petition the government' },
    { id:7, question: 'How many amendments does the Constitution have?', answer: '27' },
    { id:8, question: 'What did the Declaration of Independence do?', answer: 'Declared our independence from Great Britain' },
    { id:9, question: 'What are two rights in the Declaration of Independence?', answer: 'Life, liberty, and the pursuit of happiness' },
    { id:10, question: 'What is freedom of religion?', answer: 'You can practice any religion, or not practice a religion' } 
  ])


  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
  };

  const handleFlipCard = () => {
    setShowAnswer(!showAnswer)
  };

  return (
    <div className="app">
       <h2>Naturalization Quiz Test</h2>
      <h4>The 10 questions and answers for the N400 test 
        for preparation are listed below. Test your knowledge here!</h4>
      <h5>Number of cards:10</h5>
      <Flashcard 
        card={cards[currentCardIndex]} 
        showAnswer={showAnswer} 
        onFlip={handleFlipCard}
      />
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  )
}

export default App
