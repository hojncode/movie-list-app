function Food({ fav }) {
  // {fav}는 props.fav 와 같다 = es6 문법.비구조화 할당
  return (
    <>
      <h1>{fav}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <Food fav="chicken" />
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
