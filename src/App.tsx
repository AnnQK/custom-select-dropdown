import AnimateDiv from "./AnimateDiv";

function App() {
  const testArr = new Array(7).fill({}).map((item) => {
    return { ...item, id: crypto.randomUUID() };
  });

  return (
    <>
      {testArr.map((div) => {
        return <AnimateDiv key={div.id} />;
      })}
    </>
  );
}

export default App;
