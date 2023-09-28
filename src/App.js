import Costs from './components/Costs';

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99,
    },
    {
      date: new Date(2021, 6, 25),
      description: 'Macbook',
      amount: 1799.99,
    },
    {
      date: new Date(2021, 8, 1),
      description: 'Джинсы',
      amount: 47.99,
    },
  ];
  return (
    <div>
      <h1>React Bookkeeper</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
