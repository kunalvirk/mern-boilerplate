import React, {Component} from 'react';
import InputBox from '../utils/InputBox';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            errors : ''
        }

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(e) {
        e.preventDefault();
        console.log("Change handler invoked");
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return (
            <div className="container">
                <div className="z-depth-2 grey lighten-4 row">
                    <form action="" className="col s12">
                        <div className="row">
                            <InputBox
                                type="text"
                                label="Email Address"
                                value={this.state.email}
                                onChange={this.inputChangeHandler}
                                name="email"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;