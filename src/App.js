import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], // 나중에 사용할 수 있는 default 값을 먼저 선언 해줌(필수는 아니지만 선언해주는것은 좋은 습관이다.)
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, isTest: "'isTest'" }); // isEdit: true 은 선언한 state에 없지만 여기서도 추가할 수 있다.
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    const { isTest } = this.state;
    return <div>{isLoading ? "Loading..." : `state is update ${isTest}`}</div>;
  }
}

export default App;
