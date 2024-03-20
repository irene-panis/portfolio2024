import { Name } from "./Name"
import { Description } from "./Description"
import { Arrow } from "./Arrow"

export const NameDesc = () => {
  return (
    <div className="home-cont flex justify-evenly items-end">
      <Arrow/>
      <Description/>
      <Name/>
    </div>
  )
}