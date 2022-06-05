import Navbar from "./Navbar"

function Layout({children}){
    return(
        < >
            <Navbar/>
            <h1>layout </h1>
            {children}
            <footer> footer </footer>
        </>
    )
}
export default Layout