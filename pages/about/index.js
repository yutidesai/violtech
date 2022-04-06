import { Fragment } from 'react'
import Section_01 from '../../components/pages/aboutpage/section_01'
import Section_02 from '../../components/pages/aboutpage/section_02'
import Section_03 from '../../components/pages/aboutpage/section_03'
import Contact from '../../components/global/contact'
import Head from 'next/head';


export default function Aboutpage() {
  return (
    <Fragment>
        <Head>
        <title>Viol | About</title>
        <meta name="description" content="We’re India-based, a global digital agency. Design, deploy development solutions universally over all platforms and digital marketing." />
      </Head>   
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Contact />
    </Fragment>
  )
}
