import { Component } from "react";

class ContactUsClass extends Component{
    constructor(props){
        super(props)
        console.log("constructor of constact us is called")
    }

    componentDidMount(){
        console.log("did mount of contact us")
    }

    render(){
        console.log("contact us render")
        return (
            <h1> Contact us on 8347773045</h1>
        )
    }
}

export default ContactUsClass