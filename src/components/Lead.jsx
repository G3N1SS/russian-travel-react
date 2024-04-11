import leadImage from '../images/__imagelead.jpg'

export default function Lead(){
  return(
    <section className="lead">
      <h1 className="lead__title">Путешествия по России</h1>
      <p className="lead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>
      <figure className="lead__image">
        <img src={leadImage} alt="train" className="lead__train" />
        <figcaption className="lead__caption">ваша полка — верхняя</figcaption>
      </figure>
    </section>
  )
}