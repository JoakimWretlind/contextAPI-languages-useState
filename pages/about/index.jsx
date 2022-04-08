import React from 'react'
import { useContext } from 'react'
import AppContext from '../../AppContext'
import { Wrapper, Header, P } from '../../components/ui/style'


const AboutPage = () => {
    const value = useContext(AppContext);
    let { aboutTitle, aboutContent } = value.state.languages;

    return (
        <Wrapper>
            <Header>{aboutTitle}</Header>
            <P>{aboutContent}</P>
        </Wrapper>
    )
}

export default AboutPage