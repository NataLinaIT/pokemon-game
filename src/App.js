import "./App.css";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg_image_01 from "./assets/bg1.jpg";
import bg_image_02 from "./assets/bg2.jpg";

function App() {
  return (
    <div className="App">
      <Header title="This is title" descr="This is Description!" />
      <Layout
        id={"layout1"}
        title={"This is title 1"}
        descr={"This is Description 1"}
        urlBg={bg_image_01}
      />
      <Layout
        id={"layout2"}
        title={"This is title 2"}
        descr={"This is Description 1"}
        colorBg={"yellow"}
      />
      <Layout
        id={"layout3"}
        title={"This is title 3"}
        descr={"This is Description 1"}
        urlBg={bg_image_02}
      />

      <Footer />
    </div>
  );
}

export default App;
