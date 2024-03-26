import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/UserList.css'

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

    return (
        <body>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="">
                            <div className="col-sm-6">
                                <h2>Lista de <b>Usuários</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <div className="button-container">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                                        <i className="mdi mdi-account-plus"></i> <span>Novo Usuário</span>
                                    </a>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal">
                                        <i className="mdi mdi-delete"></i> <span>Deletar</span>
                                    </a>
                                </div>
                            </div>
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
        </body>
    );
};

export default UserList;
