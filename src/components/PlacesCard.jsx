export default function PlacesCard({data, onCardClick}){
  return(
    <li className="place">
      <h3 className="place__title">{data.name}</h3>
      <img src={data.link} alt="Карелия" className="place__image" onClick={() => onCardClick(data)}/>
      <div className="place__website">
        <p className="place__url-heading">URL</p>
        <a className="place__link" href={data.url} target="_blank">{data.linkName}</a>
      </div>
      <div>
        <p className="place__paragraph">{data.firstParagraph}</p>
        {data.secondParagraph && <p className="place__paragraph">{data.secondParagraph}</p>}
      </div>
    </li>
  )
}