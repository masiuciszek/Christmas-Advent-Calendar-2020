import React from "react"
import styled from "styled-components"
import GlobalStyles from "../../styles/global-styles"
import Nav from "./nav"

type Theme = "dark" | "light"

const Main = styled.main``

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>("light")

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  const handleTheme = (): void => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
  }

  return (
    <>
      <GlobalStyles />
      <Nav className="layout-main-nav" handleTheme={handleTheme} theme={theme} />
      {/* <button onClick={() => setTheme(nextTheme)}>Toggle Theme</button> */}
      <Main>{children}</Main>
    </>
  )
}
export default Layout
