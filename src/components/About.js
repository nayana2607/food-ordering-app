import { Component } from "react";

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser},Check us out</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"amrit"} location={"vadodara"} contact={"naynuz_99"} />
      </div>
    );
  }
}

export default About;

// LIFE CYCLE Method
/*
 *  -Parent Constructor
 *  -Parent Render
 * 
 *      - First child Constructor
 *      - First child Render
 * 
 *      - Second child Constructor
 *      - Second child Render
 * 
 * <DOM updated in single batch>
 *      - First child did Mount
 *      - Second child did Mount
  
 
 */
