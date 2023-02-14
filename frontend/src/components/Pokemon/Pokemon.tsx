interface Props {
  name: string
  idPokemon: string
}

export const Pokemon = ({ name, idPokemon }: Props) => {
  return (
    <div>
      <img
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + idPokemon + ".png"}
        alt={name}
      />
      <p>Name: {name}</p>
      <p>Number: {idPokemon}</p>
    </div>
  )
}
