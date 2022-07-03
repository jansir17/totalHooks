import UseStateHook from "./Hooks/useStateHook";
import MyUseEffectHook from "./Hooks/useEffectHook";

function App() {
  return (
    <>
    <UseStateHook startingValue={40} initialTheme='red'/>
    <MyUseEffectHook/>
    </>
    );

}
export default App;
