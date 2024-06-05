import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from '../redux/actions/userActions';

const CrudUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default CrudUser;
