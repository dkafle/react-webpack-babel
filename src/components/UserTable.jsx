import React from 'react';

const UserTable = (props) => {
    return(<div>
        {props.users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>);
};

export default UserTable;
