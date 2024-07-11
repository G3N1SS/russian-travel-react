export default function Cover({isEnglish}){
  return(
    <section className="cover">
      <a className="cover__background" href="https://stampsy.com/na-elektrichkakh-do-baikala" target="_blank">
        <h2 className="cover__title">{isEnglish ? 'To Baikal «on dogs»' :'До Байкала «на собаках»'}</h2>
        <p className="cover__subtitle">{isEnglish ? 'Based on the educational topic o Transsib - travelling from the capital to Baikal by electric trains.' :'Пo мотивам учебной темы o Транссибе - путешествие от столицы до Байкала на электричках.'}
        </p>
      </a>
    </section>
  )
}