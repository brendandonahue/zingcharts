import Head from 'next/head'
import Dynamic from '../components/Dynamic'
import Events from '../components/Events'
import License from '../components/License'
import Methods from '../components/Methods'
import Layout from '../components/layout'
import ModuleChart from '../components/ModuleChart'
import ModuleDrag from '../components/ModuleDrag'
import Simple from '../components/Simple'
import React, {useState} from 'react'

export default function Index() {
  return (
    <div className="w-full h-full py-12">
      <Head>
        <title>Magic Charts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Dynamic />
        <Events />
        <License />
        <Methods />
        <ModuleChart />
        <ModuleDrag />
        <Simple />
      </Layout>
    </div>
  )
}
