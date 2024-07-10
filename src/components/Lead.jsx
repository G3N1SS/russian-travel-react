import video from '../images/video.mp4'

export default function Lead(){
  return(
    <section className="lead">
      <h1 className="lead__title">Путешествия по России</h1>
      <p className="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>
      <figure className="lead__image">
        <video src={video} autoPlay muted loop className='lead__train'></video>
        <figcaption className="lead__caption">ваша полка — верхняя</figcaption>
      </figure>
    </section>
  )
}