import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Prismic from 'prismic-javascript'
import { Date, RichText } from 'prismic-reactjs'

const apiEndpoint = 'https://salka.cdn.prismic.io/api/v2'
const accessToken = '' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })


const Home = () => {
  const [doc, setDocData] = React.useState(null)


  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'page')
      )
      if (response) {
        setDocData(response.results[0])
      }
    }
    fetchData()
  }, [])

  const linkResolver = (doc) => {
    // Pretty URLs for known types
    if (doc.type === 'blog') return `/post/${doc.uid}`
    if (doc.type === 'page') return `/${doc.uid}`
    // Fallback for other types, in case new custom types get created
    return `/doc/${doc.id}`
  }

  return (
    <React.Fragment>
      {
        doc ? (
          <div>
            <h1>{RichText.asText(doc.data.title)}</h1>
            <RichText render={doc.data.description} linkResolver={linkResolver} />
            <img alt='cover' src={doc.data.image.url} />
          </div>
        ) : <div>No content</div>
      }
    </React.Fragment>
  )
}

export default Home
