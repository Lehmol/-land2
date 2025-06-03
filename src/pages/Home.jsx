import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="homePage">
        <div className="navContainer">
          <nav className="navBar">
            <a href="#">Hem</a>
            <a href="#">Nyheter</a>
            <a href="#">Dokument</a>
            <a href="#">Kontakt</a>
          </nav>
        </div>
        <div className="mainContainer">
          <main>
            <h1>Välkommen till Brf Öland 2</h1>
            <img className="mainImage" src="./src/images/brf.jpg" />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
