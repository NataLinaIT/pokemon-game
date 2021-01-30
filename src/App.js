import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg_image_01 from "./assets/bg1.jpg";
import bg_image_02 from "./assets/bg2.jpg";
import pokemons from "./pokemons.json";
import PockemonCard from "./components/PockemonCard/PockemonCard";

function App() {
  return (
    <div className="App">
      <Header title="This is title" descr="This is Description!" />
      <Layout id={"layout1"} title={"This is title 1"} urlBg={bg_image_01}>
        In the game two players face off against one another, one side playing
        as "blue", the other as "red" on a 3x3 grid. Each player has five cards
        in a hand and the aim is to capture the opponent's cards by turning them
        into the player's own color of red or blue.
      </Layout>
      <Layout id={"layout2"} title={"This is title 2"} colorBg={"yellow"}>
        <div className="flex">
          {pokemons.map(item => (
            <PockemonCard
              values={item.values}
              img={item.img}
              name={item.name}
              id={item.id}
              type={item.type}
              key={item.id}
            />
          ))}
        </div>
      </Layout>
      <Layout id={"layout3"} title={"This is title 3"} urlBg={bg_image_02}>
        In the game two players face off against one another, one side playing
        as "blue", the other as "red" on a 3x3 grid. Each player has five cards
        in a hand and the aim is to capture the opponent's cards by turning them
        into the player's own color of red or blue. To win, a majority of the
        total ten cards played (including the one card that is not placed on the
        board) must be of the player's card color. To do this, the player must
        capture cards by placing a card adjacent to an opponent's card whereupon
        the 'ranks' of the sides where the two cards touch will be compared. If
        the rank of the opponent's card is higher than the player's card, the
        player's card will be captured and turned into the opponent's color. If
        the player's rank is higher, the opponent's card will be captured and
        changed into the player's color instead.
      </Layout>

      <Footer />
    </div>
  );
}

export default App;
