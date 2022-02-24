import "./app.scss";

function App() {
  return (
    <div className="bodyHome">
      <div className="firstBlock">
        <div className="profileContainer">
          <img src="../../public/profile.jpeg" alt="profile image" />
          <h3>Luccas Lombardi</h3>
          <p>Frontend Developer</p>
        </div>
      </div>

      <div className="secondBlock">
        <h1>Coming Soon</h1>
        <div className="spacer" />
        <p>
          I'm a self-taugh student full stack web development 💻 from São Paulo
          - Brazil. I was a Computer Science student at Universidade São Judas
          Tadeu in São Paulo and I participated in several Frontend and Backend
          Development events, almost always performed by Rocketseat 🚀.
          Currently my main hobby is to create autonomous projects using ReactJs
          and NodeJs, always keep learning about new technologies and good
          programming practices. I also always seek to improve myself in the
          technologies that I already know and improve my knowledge about tools.
        </p>
      </div>
    </div>
  );
}

export default App;
