import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Image from './Components/Image';
import Info from './Components/Info';
import Data from './data/data';

function App() {
  const allCards = Data.map(card =>
     <Card
        key = {card.key}
        {...card}
      />)
  return (
    <div className="App">
      <Header />
      <Image />
      <Info />
      <div className='cards'>
        {allCards}
      </div>
    </div>
  );
}

export default App;
