export default function PlacesCard({data, onCardClick, isEnglish}){
  return(
    <li className="place">
      <h3 className="place__title">{isEnglish ? data.nameEng : data.name}</h3>
      <img src={data.link} alt="Карелия" className="place__image" onClick={() => onCardClick(data)}/>
      <div className="place__website">
        <p className="place__url-heading">URL</p>
        <a className="place__link" href={data.url} target="_blank">{data.linkName}</a>
      </div>
      <div>
        <p className="place__paragraph">{isEnglish ? data.firstParagraphEng : data.firstParagraph}</p>
        {data.secondParagraph && <p className="place__paragraph">{isEnglish ? data.secondParagraphEng : data.secondParagraph}</p>}
      </div>
    </li>
  )
}