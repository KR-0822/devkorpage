import UserItem from "./UserItem";

const UserList = (props) => {
    if(props.items.length === 0){
        return (
            <h1>User Not Found</h1>
        );
    }
    return (
        <ul>
            {props.items.map((user)=>(
                <UserItem key={user.id} name={user.name} />
            ))}
        </ul>
    );
}

export default UserList;