import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Main from '../components/Main'

const HomeIndex = () => (
    <Layout>
        <Helmet
            title="Gatsby Starter - Forty"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        >
        </Helmet>
        <Banner />
        <Main />
    </Layout>
)

export default HomeIndex