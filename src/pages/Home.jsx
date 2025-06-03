import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <main className="mainContent">
        <aside className="leftSide">
          <h1>Välkommen till Brf Öland 2</h1>
          <br />
          <p> - Ett tryggt boende med närhet till både stad och natur</p>
        </aside>
        <aside className="rightSide">
          <img src="./src/images/6268.jpg" />
        </aside>
      </main>
    </>
  );
}

export default Home;
