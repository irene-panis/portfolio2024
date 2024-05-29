import { Name } from "./Name"
import { Description } from "./Description"
import { Arrow } from "./Arrow"

export const NameDesc = () => {
  return (
    <div className="home-cont flex flex-wrap-reverse">
      <Arrow/>
      <Description/>
      <Name/>
    </div>
  )
}