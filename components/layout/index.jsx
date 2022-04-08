import { Navbar } from '../navbar'

export const Layout = (props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    )
}

