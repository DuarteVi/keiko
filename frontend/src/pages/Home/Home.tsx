import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React from "react"

interface Pokemon {
  name: string
  id: number
}

export const Home = () => {
  const [pokemonFilterValue, setFilterValue] = React.useState("")

  console.log(setFilterValue)

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  const pokemonList = [
    {
      name: "Carapuce",
      id: 7,
    },
    {
      name: "Carabaffe",
      id: 8,
    },
    {
      name: "Tortank",
      id: 9,
    },
  ]

  function filterPokemonsByNameorId(pokemons: Pokemon[], filter: string) {
    return pokemonList.map(({ name, id }) => {
      if (name.toUpperCase().startsWith(filter.toUpperCase()) || id.toString().startsWith(filter))
        return <Pokemon key={id} name={name} idPokemon={id} />
    })
  }

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <label htmlFor="pokemonFilter">
        Enter name or id :
        <input
          className={styles.input}
          onChange={onInputChange}
          value={pokemonFilterValue}
          id="pokemonFilter"
          placeholder="squirtle or 7"
        />
      </label>
      {filterPokemonsByNameorId(pokemonList, pokemonFilterValue)}
    </div>
  )
}
