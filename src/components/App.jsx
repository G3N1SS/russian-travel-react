import { useState, useEffect, useCallback } from 'react'
import Header from './Header'
import Lead from './Lead'
import Intro from './Intro'
import PhotoGrid from './PhotoGrid'
import Popup from './Popup'
import Places from './Places'
import Cover from './Cover'
import Footer from './Footer'
import "aos/dist/aos.css"
import Aos from 'aos';

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopup] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false)

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

  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 40,
      once: true
  })
  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopup(true)
  }

  function handleLanguageChange(){
    if(isEnglish){
      setIsEnglish(false)
      console.log(isEnglish)
    }else{
      setIsEnglish(true)
      console.log(isEnglish)
    }
  }

  console.log(isEnglish)

  return (
    <div className='page'>
      <Header onLanguageChange={handleLanguageChange} isEnglish={isEnglish}/>
      <main>
        <Lead isEnglish={isEnglish}/>
        <Intro isEnglish={isEnglish}/>
        <PhotoGrid onCardClick={handleCardClick}/>
        <Places onCardClick={handleCardClick} isEnglish={isEnglish}/>
        <Cover isEnglish={isEnglish}/>
      </main>
      <Footer isEnglish={isEnglish}/>
      <Popup card={selectedCard} isOpen={isImagePopupOpen} onClose={closePopup}/>
    </div>
  )
}

export default App
