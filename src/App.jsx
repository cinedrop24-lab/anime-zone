import soloImg from './assets/solo.jpg'
import jjkImg from './assets/jjk.jpg'
import demonImg from './assets/demon.jpg'

function App() {
  return (
    <div
      style={{
        background: "#111",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        Anime Zone
      </h1>

      <input
        type="text"
        placeholder="Search anime..."
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "10px",
          border: "none",
          marginBottom: "40px"
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        {/* Solo Leveling */}
        <div
          style={{
            background: "#222",
            width: "320px",
            borderRadius: "20px",
            overflow: "hidden"
          }}
        >
          <img
            src={soloImg}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover"
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2>Solo Leveling</h2>

            <p>Sinhala Subtitle Download</p>

            <button
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Download
            </button>
          </div>
        </div>

        {/* Jujutsu Kaisen */}
        <div
          style={{
            background: "#222",
            width: "320px",
            borderRadius: "20px",
            overflow: "hidden"
          }}
        >
          <img
            src={jjkImg}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover"
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2>Jujutsu Kaisen</h2>

            <p>Sinhala Subtitle Download</p>

            <button
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Download
            </button>
          </div>
        </div>

        {/* Demon Slayer */}
        <div
          style={{
            background: "#222",
            width: "320px",
            borderRadius: "20px",
            overflow: "hidden"
          }}
        >
          <img
            src={demonImg}
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover"
            }}
          />

          <div style={{ padding: "20px" }}>
            <h2>Demon Slayer</h2>

            <p>Sinhala Subtitle Download</p>

            <button
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Download
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App