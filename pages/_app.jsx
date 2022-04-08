import { useState } from 'react'
import AppContext from '../AppContext'
import { GlobalStyle } from '../styles/globalStyle'
import { Layout } from '../components/layout'
import languagesObject from '../languagesObject'

function MyApp({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = languagesObject;

  return (
    <>
      <AppContext.Provider
        value={{
          state: {
            languages: languageObject[languageSelected],
            languageSelected: languageSelected,
          },
          setLanguageSelected: setLanguageSelected,
        }}
      >
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </>
  )
}

export default MyApp
