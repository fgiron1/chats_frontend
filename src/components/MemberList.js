import {useMembers} from "../service/hooks"
import MemberView from "./MemberView"
import { useState } from "react";

function MemberList(props) {


    const [mockMemberList, setMockMemberLit] = useState([{
        id: 1,
        member_name: "John Doe",
        member_picture: "Picture.jpg"
    },
    {
        id: 2,
        member_name: "Doja Cat",
        member_picture: "Picture.jpg"
    },
    {
        id: 3,
        member_name: "Pepe Porras",
        member_picture: "Picture.jpg"
    },
    {
        id: 4,
        member_name: "Camilo Hudson",
        member_picture: "Picture.jpg"
    },
    {
        id: 5,
        member_name: "Eduardo Rivera",
        member_picture: "Picture.jpg"
    }])

    const {
        members,
        errorMember,
        fetchNextMember,
        hasNextMember,
        isFetchingMember,
        isFetchingNextMember,
        statusMember
    } = useMembers(props.roomID, props.memberID);

    return (

        <div className="content is-flex is-centered">
            <ol>
                {mockMemberList.map(  member  => (
                    <MemberView key = {member.id}
                    id = {member.id}
                    member_name = {member.member_name}
                    member_picture = {member.member_picture}></MemberView>
                ))}
            </ol>
        </div>
    );

}


export default MemberList;