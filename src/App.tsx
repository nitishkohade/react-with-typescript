import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { RandomNumber } from "./components/restriction/RandomNumber";


function App() {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event)
  }

  return (
    <div>
        <Greet name="nitish" />
        <Heading>this is a header</Heading>
        <Oscar>
          <Heading>this is a header</Heading>
        </Oscar>
        <Button handleClick={handleClick} />
        <Container styles={{padding: '1'}} />
        <List
          items={["Batman"]}
          onClick={(item) => console.log(item)}
        />
        <List
          items={[1]}
          onClick={(item) => console.log(item)}
        />
        <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
