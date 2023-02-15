import { render, screen } from "@testing-library/react"
import { Home } from "./index"

describe("<Home />", () => {
  it("should display Carapuce", () => {
    render(<Home />)
    const carapuce = screen.getByText(/squirtle$/)
    expect(carapuce).toBeInTheDocument()
  })

  it("should display Carabaffe", () => {
    render(<Home />)
    const carapuce = screen.getByText(/Carabaffe$/)
    expect(carapuce).toBeInTheDocument()
  })

  it("should display Tortank", () => {
    render(<Home />)
    const carapuce = screen.getByText(/Tortank$/)
    expect(carapuce).toBeInTheDocument()
  })
})
