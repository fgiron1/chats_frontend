import {useMembers} from "../service/hooks"

function MemberList(props) {

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

        <div className="columns is-flex is-centered">
            
        </div>

    );
}

export default MemberList;