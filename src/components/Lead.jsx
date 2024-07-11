import video from '../images/video.mp4'

export default function Lead({isEnglish}){
  return(
    <section className="lead">
      <h1 className="lead__title">{isEnglish ? 'Russian Travel' :'Путешествия по России' }</h1>
      <p className="lead__subtitle">{isEnglish ? "The real country isn't in the newscasts, it's here." :'Настоящая страна не в выпусках новостей, а здесь.'}</p>
      <figure className="lead__image">
        <video src={video} autoPlay muted loop className='lead__train'></video>
        <figcaption className="lead__caption">{isEnglish ? 'your shelf is top shelf' : 'ваша полка — верхняя'}</figcaption>
      </figure>
    </section>
  )
}