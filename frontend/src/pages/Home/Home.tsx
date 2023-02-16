import styles from "./Home.module.css"
import { Pokemon } from "components/Pokemon"
import { Loader } from "components/Loader"
import { useState, useEffect } from "react"

interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
}

const fetchPokemon = async () => {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  return response.json()
}

export const Home = () => {
  const [pokemonList, updatePokemonList] = useState<PokemonInfo[]>([])

  const [isLoading, updateLoadingState] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchPokemon()
      updatePokemonList(res)
      updateLoadingState(false)
    }
    fetchData().catch(console.error)
  }, [])

  const pokedex = pokemonList.map(({ name, id, weight, height }) => {
    return <Pokemon key={id} name={name} idPokemon={id} height={height} weight={weight} />
  })

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>
      <div className={styles.pokedex}>{isLoading ? <Loader /> : pokedex}</div>
    </div>
  )
}
