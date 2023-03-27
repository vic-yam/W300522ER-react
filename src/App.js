import './App.css';
// import ChildComp from './sandbox/components/ChildComponent';
// import PageHeader from './components/PageHeader';
// import TypographyComponent from './sandbox/components/TypographyComponent';
import Cards from './cards/components/Cards'
import CardsPage from './cards/pages/CardsPage';
import Layout from './layout/Layout';


function App() {

  return (
    <div className="App"  >
        <Layout>
          <CardsPage />
        </Layout>
    </div>
  );
}

export default App;
