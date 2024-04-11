import Card from "./Card";
import photogrid from "../utils/constants";

export default function PhotoGrid({onCardClick}){
  return(
    <section className="photo-grid">
      <ul className="photo-grid__list">
        {photogrid.map(data => {
          return (
            <Card
              name={data.name}
              src={data.link}
              card={data}
              key={data.name}
              onCardClick={onCardClick}
            />
            )
        })}
      </ul>
    </section>
  )
}