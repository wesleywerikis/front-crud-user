import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    };

    const handleNewUser = () => {
        // Lógica para cadastrar um novo usuário
        console.log('Cadastrar novo usuário');
    };

    const handleDeleteUser = () => {
        // Lógica para excluir um usuário
        console.log('Excluir usuário');
    };

    const handleSearchUser = () => {
        // Lógica para pesquisar um usuário
        console.log('Pesquisar usuário');
    };

    return (
        <body>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <h2>Lista de <b>Usuários</b></h2>
                                    <div>
                                        <button onClick={handleNewUser} className='register-button' >Cadastrar</button>
                                        <button onClick={handleDeleteUser} className='delete-button' >Excluir</button>
                                        <button onClick={handleSearchUser} className='search-button' >Pesquisar</button>
                                    </div>
                                </div>
                                <table className='user-table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Username</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};


export default UserList;
