import "./app.scss";
import data from "../../data.json";

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

      {data.map((data) => {
        return (
          <div className="secondBlock" key={data.id}>
            <h1>{data.tittle}</h1>
            <div className="spacer" />
            <p>{data.description}</p>
          </div>
        );
      })}

      <div key={data.id}></div>
    </div>
  );
}

export default App;
