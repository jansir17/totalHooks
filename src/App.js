import UseStateHook from "./Hooks/useStateHook";
import MyUseEffectHook from "./Hooks/useEffectHook";
import MyUseMemo from "./Hooks/useMemoHook";
import MyUseRef from "./Hooks/useRefHook";

function App() {
  return (
    <>
    <UseStateHook startingValue={40} initialTheme='red'/>
    <MyUseEffectHook/>
    <MyUseMemo/>
    <MyUseRef/>
    </>
    );

}
export default App;
