import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import ContactUsClass from "./ContactUsClass";

class About extends Component {
  constructor(props) {
    super(props);
  
  }
  componentDidMount() {
   
  }

  render() {
 
    return (
      <div>

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
