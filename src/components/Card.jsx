export default function Card({src, name, onCardClick, card}){
    return(
      <li>
        <img src={src} alt={name} className="photo-grid__image" data-aos='zoom-in' onClick={() => onCardClick(card)}/>
      </li>
    )
}