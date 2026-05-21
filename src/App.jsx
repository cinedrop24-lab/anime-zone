import { useState } from "react"

import soloImg from './assets/solo.jpg'
import jjkImg from './assets/jjk.jpg'
import demonImg from './assets/demon.jpg'

function App() {

  const [search, setSearch] = useState("")

  const animeList = [
    {
      title: "Solo Leveling",
      image: soloImg,
      download: "#"
    },

    {
      title: "Jujutsu Kaisen",
      image: jjkImg,
      download: "#"
    },

    {
      title: "Demon Slayer",
      image: demonImg,
      download: "#"
    }
  ]

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1
        style={{
          fontSize: "55px",
          marginBottom: "10px"
        }}
      >
        Anime Zone
      </h1>

      <p
        style={{
          color: "#aaa",
          marginBottom: "30px"
        }}
      >
        Sinhala Subtitle Downloads
      </p>

      <input
        type="text"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "15px",
          width: "320px",
          borderRadius: "12px",
          border: "none",
          marginBottom: "40px",
          fontSize: "16px",
          outline: "none"
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap"
        }}
      >

        {filteredAnime.map((anime, index) => (

          <div
            key={index}
            style={{
              background: "#1a1a1a",
              width: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "0.3s",
              boxShadow: "0px 0px 15px rgba(0,0,0,0.5)"
            }}
          >

            <img
              src={anime.image}
              alt=""
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "20px" }}>

              <h2>{anime.title}</h2>

              <p style={{ color: "#aaa" }}>
                Sinhala Subtitle Download
              </p>

              <a
                href={anime.download}
                target="_blank"
                style={{
                  textDecoration: "none"
                }}
              >
                <button
                  style={{
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginTop: "10px",
                    background: "#ff0055",
                    color: "white",
                    width: "100%"
                  }}
                >
                  Download Subtitle
                </button>
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default App