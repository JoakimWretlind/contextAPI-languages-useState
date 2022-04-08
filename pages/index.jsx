import Head from 'next/head'
import { useContext } from 'react'
import AppContext from '../AppContext'
import { Wrapper, Header, P } from '../components/ui/style'

export default function Home() {
  const value = useContext(AppContext);
  let { homeTitle, homeContent } = value.state.languages;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Header>{homeTitle}</Header>
        <P>{homeContent}</P>
      </Wrapper>
    </>
  )
}
