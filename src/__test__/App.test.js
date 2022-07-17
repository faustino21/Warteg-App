import { cleanup, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainRouters from "../routes/Main.Routers"

describe('App', () => {
    beforeEach(cleanup())

    it("should navigate to login screen successfully", ()=> {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MainRouters />
            </MemoryRouter>
        )

        expect(screen.getByText(/Login Page//1))
    })
 })