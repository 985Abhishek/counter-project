import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import "./App.css";
function App() {
  return (
    <>
      <Container>
        <Header />
       <Controls />
      </Container>
    </>
  );
}

export default App;
