import { useState } from "react"

import soloImg from "./assets/solo.jpg"
import jjkImg from "./assets/jjk.jpg"
import demonImg from "./assets/demon.jpg"

function App() {

  const [search, setSearch] = useState("")

  const animeList = [

    {
      title: "Solo Leveling",
      image: soloImg
    },

    {
      title: "Jujutsu Kaisen",
      image: jjkImg
    },

    {
      title: "Demon Slayer",
      image: demonImg
    }

  ]

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div style={{
      background: "#111",
      minHeight: "100vh",
      padding: "40px",
      color: "white",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        textAlign: "center",
        fontSize: "50px",
        marginBottom: "30px"
      }}>
        Anime Zone
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px"
      }}>

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
            outline: "none",
            fontSize: "16px"
          }}
        />

      </div>

      <div style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>

        {filteredAnime.map((anime, index) => (

          <div
            key={index}
            style={{
              background: "#222",
              width: "300px",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "0.3s",
              transform: "scale(1)",
              cursor: "pointer"
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

              <p>Sinhala Subtitle Download</p>

              <button style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}>
                Download Subtitle
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}

export default App