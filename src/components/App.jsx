import { useState, useEffect, useCallback } from 'react'
import Header from './Header'
import Lead from './Lead'
import Intro from './Intro'
import PhotoGrid from './PhotoGrid'
import Popup from './Popup'

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopup] = useState(false);

  const setStateForClosePopup = () => {
    setImagePopup(false)
  }

  const closePopupByEsc = useCallback((evt) => {
    if (evt.key === 'Escape') {
      setStateForClosePopup()
      document.removeEventListener('keydown', closePopupByEsc)
    }
  }, [setStateForClosePopup])

  const closePopup = useCallback(() => {
    setStateForClosePopup()
    document.removeEventListener('keydown', closePopupByEsc)
  }, [setStateForClosePopup, closePopupByEsc])

  useEffect(() => {
    function closePopupByEsc(evt) {
      if (evt.key === 'Escape') {
        closePopup()
      }
    }
    if (isImagePopupOpen) {
      document.addEventListener('keydown', closePopupByEsc)
      return () => {
        document.removeEventListener('keydown', closePopupByEsc)
      }
    }
  }, [isImagePopupOpen, closePopup])

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopup(true)
  }

  return (
    <div className='page'>
      <Header/>
      <main>
        <Lead/>
        <Intro/>
        <PhotoGrid onCardClick={handleCardClick}/>
      </main>
      <Popup card={selectedCard} isOpen={isImagePopupOpen} onClose={closePopup}/>
    </div>
  )
}

export default App
