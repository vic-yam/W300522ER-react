import './App.css';
// import ChildComp from './sandbox/components/ChildComponent';
// import PageHeader from './components/PageHeader';
// import TypographyComponent from './sandbox/components/TypographyComponent';
// import Card from './cards/components/card/Card';
import Cards from './cards/components/Cards'
import OnClick from './sandbox/events/OnClick';
import RaisingEvents from './sandbox/events/RaisingEvents';

function App() {
  // const hwString = 'Hello World';
  // const name = { firstName: 'John', lastName: 'Doe' };
  return (
    <div className="App"  >
      <OnClick></OnClick>
      <RaisingEvents></RaisingEvents>
    </div>
  );
}

export default App;
