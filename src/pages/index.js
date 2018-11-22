import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Main from '../components/Main'

const HomeIndex = () => (
    <Layout>
        <Helmet
            title="Origin Labs"
            meta={[
                { name: 'description', content: 'Origin Labs' },
                { name: 'keywords', content: 'homepage' },
                { name: 'keywords', content: 'origin' },
                { name: 'keywords', content: 'labs' },
            ]}
        >
        </Helmet>
        <Banner />
        <Main />
    </Layout>
)

export default HomeIndex