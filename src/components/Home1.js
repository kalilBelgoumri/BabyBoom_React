/* eslint-disable no-undef */
import { Layout } from 'antd'
import { useState } from 'react'
import AlgoliaPlaces from 'algolia-places-react'

function Home1() {
  const { Header, Footer, Content } = Layout
  const [url, setUrl] = useState('')
  const uniqid = require('uniqid')

  const checkKeyPress = (e) => {
    const { key, keyCode } = e
    if (keyCode === 13) {
      // router.push(`/listBaby/?Resultat=lyon`)
    }
  }

  // Card city
  const city = [
    {
      id: 1,
      title: 'paris',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 2,
      title: 'lyon',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 3,
      title: 'marseille',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 4,
      title: 'marseille',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 3,
      title: 'marseille',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 4,
      title: 'marseille',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 3,
      title: 'marseille',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
    {
      id: 4,
      title: 'marseille',
      image: 'https://i.ibb.co/TWnKkmL/11098467.jpg',
    },
  ]

  return (
    <div id="background__home">
      <Header className="flex flex-col h-screen">
        <h1>nav</h1>

        <div className="flex justify-center">
          <div className="absolute z-50 mt-10 w-[80%] md:w-[70%] ">
            <div className="rounded-xl">
              <AlgoliaPlaces
                className="rounded-full"
                onKeyDown={checkKeyPress}
                placeholder="Chercher votre nounou partous en France ..."
                onChange={({ suggestion }) =>
                  setUrl(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.latlng.lat}&lon=${suggestion.latlng.lng}&appid=${process.env.NEXT_PUBLIC_APP_ID_API_KEY}&units=metric`
                  )
                }
                options={{
                  appid: process.env.NEXT_PUBLIC_APP_ID_API_KEY,
                  apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
                  apiKeyAlgolia: process.env.NEXT_PUBLIC_API_KEY_ALGOLIA,
                  aroundLatLngViaIP: false,
                }}
              />
            </div>
          </div>
        </div>
      </Header>
      <Content className="flex flex-grow-1">
        <ul className="flex w-full gap-2 overflow-x-auto mt-10 mb-10 snap-x">
          {city.map((citys) => {
            return (
              <div
                key={uniqid()}
                className="flex flex-shrink-0 relative ml-3 snap-center"
              >
                <img
                  className="rounded-lg cursor-pointer hover:transition-opacity delay-300 object-cover object-bottom w-48 h-26
                    md:w-56 md:h-56 lg:w-60 lg:h-60"
                  src={citys.image}
                  title="Paris"
                  alt="paris"
                  Layout="responsive"
                  width={200}
                  height={200}
                />
              </div>
            )
          })}
        </ul>
      </Content>
      <Footer className="bg-black h-10 w-full">
        <h1>Footer</h1>
      </Footer>
    </div>
  )
}

export default Home1
