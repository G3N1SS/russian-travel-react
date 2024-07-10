import { place } from "../utils/constants"
import PlacesCard from "./PlacesCard"

export default function Places({onCardClick}){
  return(
    <section>
      <ul className="places">
        {place.map((data) => <PlacesCard data={data} key={data.name} onCardClick={onCardClick}/>)}
      </ul>
    </section>
  )
}