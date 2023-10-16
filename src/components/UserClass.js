// Life Cycle method diagram :https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //defining state
    this.state = {
      //count: 0,
      userInfo: {
        name: "",
        created_at: "",
        img_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nayana2607");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  //   handleClick() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }

  render() {
    // const { name, location, contact } = this.props
    return (
      <div className="user-card">
        {/* using state */}
        {/* <div>
          <h1>{this.state.count}</h1>
          <button onClick={() => this.handleClick()}>Increment</button>
        </div> */}
        <h2>Name: {this.state?.userInfo?.login}</h2>
        <h3>Joined at: {this.state?.userInfo?.created_at}</h3>
        <img src={this.state?.userInfo?.avatar_url} />
      </div>
    );
  }
}

export default UserClass;
