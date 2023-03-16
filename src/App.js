import './App.css';
import ChildComp from './components/ChildComponent';
import PageHeader from './components/PageHeader';
import TypographyComponent from './components/TypographyComponent';

function App() {
  const hwString = 'Hello World';
  const name = { firstName: 'John', lastName: 'Doe' };
  return (
    <div className="App"  >
      <PageHeader />
      {/* <TypographyComponent /> */}
      <ChildComp name={name} />
    </div>
  );
}

export default App;
