import AppBar from "./AppBar"
const Layout = ({ children }: any) => {
  return (
    <>
      <AppBar />
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout