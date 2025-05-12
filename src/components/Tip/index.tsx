import styles from "./styles.module.css"
import tipIcon from "../../assets/tip.svg"
type Props = {
  tip: string
  category: string
}

export function Tip({ tip, category }: Props) {
  return <div  className= {styles.tip}>
    <img src={tipIcon} alt="Icone de dica" />

    <div>
      <h3>Dica</h3>
      <p><strong>Tema:</strong>{category}</p>
      <p>{tip}</p>
    </div>
  </div>
}