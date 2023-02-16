import styles from "./Pokemon.module.css"
interface Props {
  name: string
  idPokemon: number
  height: number
  weight: number
}

export const Pokemon = ({ name, idPokemon, weight, height }: Props) => {
  return (
    <div className={styles.pokemon}>
      <p>{name}</p>
      <img
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + idPokemon + ".png"}
        alt=""
      />
      <p>Id: {idPokemon}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  )
}
