import './App.css';
import Hello from './components/props/Hello';
import Wrapper from './components/props/Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Hello name="리액트" color="red" isSpecial={true} />
        <Hello color="gold" />
      </Wrapper>
    </>
  );
}

export default App;
