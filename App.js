
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider, { CalcContext } from './context/CalcContext';
import { Typography } from '@material-ui/core';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
  ["Varun"]

];

function App() {
  return (
    
      <CalcProvider>
        <h1 align="center">
          Varun Calculator
        </h1>
      <Wrapper>

      <Screen />
      <ButtonBox>
        {btnValues.flat().map((btn, i) =>  (
          <Button
            value={btn}
            key={i}
            />
        ))}
        

      </ButtonBox>

      </Wrapper>

      </CalcProvider>
    
      
     
    
  );
}

export default App;
