import React from 'react'
import { useContext } from 'react'
import AppContext from '../../AppContext'
import { Wrapper, Header, Li } from '../../components/ui/style'


const ContactPage = () => {
    const value = useContext(AppContext);
    let { emailLabel, phoneLabel } = value.state.languages;

    return (
        <Wrapper>
            <Header>{value.state.languages.contactTitle}</Header>
            <Li>{`${emailLabel}: hi@example.com`}</Li>
            <Li>{`${phoneLabel}: +010112345`}</Li>
        </Wrapper>
    )
}

export default ContactPage