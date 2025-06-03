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
        <main className="mainContent">
          <h1>Välkommen till Brf Öland 2</h1>
          <div className="contentRow">
            <div className="leftSide">
              <p> Den bästa bostadsrättföreningen någonsin</p>
            </div>
            <div className="rightSide">
              <img className="rightImg" src="./src/images/brf2.png" />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
