import './App.css';
// import ChildComp from './sandbox/components/ChildComponent';
// import PageHeader from './components/PageHeader';
// import TypographyComponent from './sandbox/components/TypographyComponent';
import Cards from './cards/components/Cards'
import OnClick from './sandbox/events/OnClick';

function App() {
  // const hwString = 'Hello World';
  // const name = { firstName: 'John', lastName: 'Doe' };
  return (
    <div className="App"  >
      {/* <PageHeader /> */}
      {/* <TypographyComponent /> */}
      {/* <ChildComp firstName={name.firstName} lastName={name.lastName}  /> */}
      <Cards></Cards>
      <OnClick></OnClick>
    </div>
  );
}

export default App;
