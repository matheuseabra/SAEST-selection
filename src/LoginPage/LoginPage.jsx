import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import NewsTable from './../_components/NewsTable/NewsTable';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reseta o status de login
        this.props.dispatch(userActions.logout());

        //Estado inicial do componente
        this.state = {
            cpf: '',
            password: '',
            submitted: false
        };
        //Faz o vínculo das funções
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Escuta evento de mudanças e atualiza estado de acordo 
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    //Função para lidar com a submissão do formulário de login
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { cpf, password } = this.state;
        const { dispatch } = this.props;
        if (cpf && password) {
            dispatch(userActions.login(cpf, password));
        }
    }

    render() {
        // Traz props e estado pro render()
        const { loggingIn } = this.props;
        const { cpf, password, submitted } = this.state;
        return (
            <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <h2>Realize seu login</h2>
                        <hr/>
                        <form name="card form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !cpf ? ' has-error' : '')}>
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" className="form-control" placeholder="Seu CPF" name="cpf" value={cpf} onChange={this.handleChange} />
                                {submitted && !cpf &&
                                    <div className="help-block">CPF é obrigatório</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Senha</label>
                                <input type="password" className="form-control" placeholder="Sua senha" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Senha é obrigatório</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btn-primary">Entrar</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </div>
                        </form>
                        <h3>Crie sua conta</h3>
                        <Link to="/register" className="btn btn-default">Ainda não possui cadastro? Registrar</Link>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <NewsTable />
                    </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 