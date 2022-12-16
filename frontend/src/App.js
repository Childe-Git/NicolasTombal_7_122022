import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/Router";
import styled from "styled-components";

const DivApp = styled.div`
  margin: 60px auto;
  max-width: 1340px;
  width: 100%;
  font-family: "Montserrat";
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: -10px;
  .content {
    flex: 1 0 auto;
    padding: 20px;
  }
`;

function App() {
  return (
    <DivApp>
      <div className="content">
        <Header />
        <Router />
      </div>
      <Footer />
    </DivApp>
  );
}

export default App;
