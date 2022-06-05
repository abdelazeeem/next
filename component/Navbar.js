import Link from "next/link"
import styles from '../styles/Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.bg}>
            <Link href="/"> Home </Link>
            <Link href="/about"> about </Link>
            <Link href="/contact"> contact </Link>
            <Link href="/posts"> posts </Link>
        </div>
    )
}
export default Navbar