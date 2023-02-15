import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import React, { useState, useEffect } from "react"

interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

export const Home = () => {
  const [pokemonFilterValue, setFilterValue] = useState("")

  const [pokemonList, updatePokemonList] = useState<PokemonInfo[]>([])

  function fetchPokemons() {
    return fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } }).then(response =>
      response.json(),
    )
  }

  useEffect(() => {
    fetchPokemons().then(updatePokemonList)
  }, [])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  function filterPokemonsByNameorId(pokemons: PokemonInfo[], filter: string) {
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
