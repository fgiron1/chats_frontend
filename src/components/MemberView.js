import { Component } from "react";

class MemberView extends Component{

    constructor(props){
        super(props);
        this.id = props.id;
        this.member_name = props.member_name;
        this.member_picture = props.member_picture;
    }

    render(){
        return (
            <span className="tag is-link is-light is-medium">
                {this.member_name}
            </span>
        )
    }

}

export default MemberView;