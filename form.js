import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css'
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            usrname: 'KeepItUnique...',
            usernameErr: '',
            passwordErr: '',
            genderErr: '',
            formValidUsrn: false,
            formValidPass: false,
            formValidGen: false,
            successMsg: '',
            initialOptValue: 'K'
        }
    }
    displayText = (event) => {
        console.log(event.target.value)
        const username = event.target.value
        if (username.length >= 6) {
            this.setState({ usrname: username, usernameErr: <p className="text-success">Username is valid</p>, formValidUsrn: true })

        } else {
            this.setState({ usrname: username, usernameErr: <p className="text-danger">Username must be >= 6</p>, formValidUsrn: false })
        }
    }
    displayPass = (event) => {
        console.log(event.target.value)
        const password = event.target.value
        if (password.length >= 6) {
            this.setState({ passwordErr: <p className="text-success">Password is valid</p>, formValidPass: true })

        } else {
            this.setState({ passwordErr: <p className="text-danger">Password must be >= 6</p>, formValidPass: false })
        }
    }

    displayGen = (event) => {
        console.log(event.target.value)
        if (event.target.value === "M" || event.target.value === "F") {
            this.setState({ formValidGen: true })
        } else {
            this.setState({ formValidGen: false, genderErr: <p className="text-danger"> Enter Your Gender!</p> })
        }
    }

    displayOpt = (event) => {
        console.log(event.target.value)
        const option = event.target.value
        if (option === 'K' || option === 'D' || option === 'M') {
            this.setState({ initialOptValue: option })
        }
    }

    displayDate=(event)=>{
        console.log(event.target.value)
    }


    loginSuccess = (event) => {
        event.preventDefault();
        this.setState({ successMsg: "Successfully Logged In!" })
    }

    disabler() {
        if (this.state.formValidUsrn && this.state.formValidPass && this.state.formValidGen) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row m-5 ">
                    <div className="col-md-7  border ">
                        <h4 className="title  text-center text-secondary">Login Form</h4>
                        <form onSubmit={this.loginSuccess}>
                            <div className="form-group">
                                Username: <input value={this.state.usrname} onChange={this.displayText} className="form-control" />
                                <div>
                                    {this.state.usernameErr}
                                </div>
                            </div>
                            <div className="form-group">
                                Password: <input type="password" onChange={this.displayPass} className="form-control" />
                                <div>
                                    {this.state.passwordErr}
                                </div>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label"> Gender:</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="gender" value="M" onClick={this.displayGen} />Male
                                </label>
                            </div>
                            <div className="form-check form-group form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="gender" value="F" onClick={this.displayGen} />Female
                                </label>
                            </div>
                            <div className="form-row align-items-center">
                                <div className="form-group col-md-6 ">
                                    <label>City:</label>
                                    <select value={this.state.initialOptValue} name="" id="" className="form-control" onChange={this.displayOpt}>
                                        <option value="K">Kanpur</option>
                                        <option value="D">Delhi</option>
                                        <option value="M">Mumbai</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6 ">
                                    <label >Date Of Birth: </label>
                                    <input type="date" id="" name="" className="form-control" onChange={this.displayDate} />
                                </div>

                            </div>

                            <div>
                                <button type="submit" disabled={!this.disabler()} className="btn btn-primary mt-2 form-group">Login</button>
                            </div>
                            <div>
                                <p className="text-success form-group">{this.state.successMsg}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Login />, document.getElementById('root'));



