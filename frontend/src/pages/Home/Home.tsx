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

  async function fetchPokemons() {
    const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
    return response.json()
  }

  useEffect(() => {
    fetchPokemons().then(updatePokemonList)
  }, [])

  const pokedex = pokemonList.map(({ name, id, weight, height }) => {
    return <Pokemon key={id} name={name} idPokemon={id} height={height} weight={weight} />
  })

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.pokedex}>{pokedex}</div>
    </div>
  )
}
