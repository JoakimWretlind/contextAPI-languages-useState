import { Nav, NavUL, NavA, LanguageContainer, Item } from "./style"
import Link from "next/link"
import { useContext } from "react"
import AppContext from '../../AppContext'

export const Navbar = () => {
    const value = useContext(AppContext);
    let { navbarAboutLink, navbarContactLink } = value.state.languages;

    return (
        <Nav>
            <Link href="/" passHref>
                <NavA>Next Context API</NavA>
            </Link>
            <NavUL>
                <Link href="/about" passHref>
                    <NavA>{navbarAboutLink}</NavA>
                </Link>
                <Link href="/contact" passHref>
                    <NavA>{navbarContactLink}</NavA>
                </Link>
            </NavUL>

            <LanguageContainer>
                <Item onClick={() => value.setLanguageSelected("en")}>English</Item>
                <Item onClick={() => value.setLanguageSelected("es")}>Spanish</Item>
            </LanguageContainer>
        </Nav>
    )
}
