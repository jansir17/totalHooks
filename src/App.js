import UseStateHook from "./Hooks/useStateHook";
import MyUseEffectHook from "./Hooks/useEffectHook";
import MyUseMemo from "./Hooks/useMemoHook";

function App() {
  return (
    <>
    <UseStateHook startingValue={40} initialTheme='red'/>
    <MyUseEffectHook/>
    <MyUseMemo/>
    </>
    );

}
export default App;
