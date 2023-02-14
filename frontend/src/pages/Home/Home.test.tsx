import { render, screen } from "@testing-library/react"
import { Home } from "./index"

describe("<Home />", () => {
  it("should display Carapuce", () => {
    render(<Home />)
    const carapuce = screen.getByText("Name: Carapuce")
    expect(carapuce).toBeInTheDocument()
  })

  it("should display Carabaffe", () => {
    render(<Home />)
    const carapuce = screen.getByText("Name: Carabaffe")
    expect(carapuce).toBeInTheDocument()
  })

  it("should display Tortank", () => {
    render(<Home />)
    const carapuce = screen.getByText("Name: Tortank")
    expect(carapuce).toBeInTheDocument()
  })
})
