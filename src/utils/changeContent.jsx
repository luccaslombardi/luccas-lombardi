import data from "../../data.json";

function changeContent() {
  return data.map((data) => {
    return (
      <section className="secondBlock" key={data.id}>
        <h1>{data.title}</h1>
        <div className="spacer" />
        <p>{data.description}</p>
      </section>
    );
  });
}

export default changeContent;
