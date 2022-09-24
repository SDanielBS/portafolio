import React, { Fragment } from "react"
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { Footer } from '../../components/Footer/Footer';
import './Portafolio.scss';

const Portafolio = () => {
  return(
    <Fragment>
      <Header/>
      <Main />
      <Footer/>
    </Fragment>
  )
}

export { Portafolio }