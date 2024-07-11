export default function Footer({isEnglish}){
  return(
    <footer className="footer">
      <nav className="footer__links">
        <a href="#" className="footer__link">{isEnglish ? 'Maps' : 'Карты'}</a>
        <a href="#" className="footer__link">{isEnglish ? 'Weather' : 'Погода'}</a>
        <a href="#" className="footer__link">{isEnglish ? 'Timetable' : 'Расписание'}</a>
        <a href="#" className="footer__link">{isEnglish ? 'Calendar' : 'Календарь'}</a>
        <a href="#" className="footer__link">{isEnglish ? 'Journeys' : 'Путешествия'}</a>
      </nav>
      <p className="footer__copyright">© 2023. {isEnglish ? 'Sarkisyan Areg' : 'Саркисян Арег'}</p>
    </footer>
  )
}