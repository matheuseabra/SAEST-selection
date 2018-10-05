import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div id="wrapper">            
                    <div className="dashboard">
                        <h1>Bem vindo ao SIGAEST, {user.firstName}!</h1>
                        <p>Utilize o menu abaixo para realizar suas ações dentro do sistema</p>
                        <p>
                            <Link className="btn btn-default" to="/login"><i class="fas fa-sign-out-alt"></i> Sair</Link>
                        </p>
                    </div>
                    <div className="row menu-admin">
                        <div className="col-lg-4 col-md-4 col-sm-12">                           
                            <div className="card blue-bg">
                                <i class="fas fa-hands-helping"></i>
                                <h3>Editais</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card blue-bg">
                            <i class="far fa-file-alt"></i>
                                <h3>Questionários</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card blue-bg">
                                <i class="fas fa-user-graduate"></i>
                                <h3>Alunos</h3>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card blue-bg">
                                <i class="fab fa-font-awesome-flag"></i>
                                <h3>Recursos</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card blue-bg">
                                <i class="fas fa-hands-helping"></i>
                                <h3>Estatísticas</h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="card blue-bg">
                                <i class="fas fa-database"></i>
                                <h3>Banco de Dados</h3>
                            </div>
                        </div>
                    </div>                         
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Usuários cadastrados:</h3>
                        {users.loading && <em>Carregando usuários</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                            <ul className="list-group">
                                {users.items.map((user, index) =>
                                    <li className="list-group-item" key={user.id}>
                                        {user.firstName + ' ' + user.lastName}
                                        {
                                            user.deleting ? <em> - Excluindo...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Excluir</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                    
               
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };