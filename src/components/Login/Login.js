import React from "react"


class Login extends React.Component{

    constructor() {
        super();
        this.state = {
          username: "",
          password: ""
        };

       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
      }


      onSubmit(e) {
      /*  e.preventDefault();
        const LoginRequest = {
          username: this.state.username,
          password: this.state.password
        };*/
    if((this.state.username==="admin1@gmail.com" && this.state.password==="admin1")||
    (this.state.username==="admin2@gmail.com" && this.state.password==="admin2")
    ){
        this.props.history.push("/dashbord");
    }
    if((this.state.username==="bo1@gmail.com" && this.state.password==="bo1")||
    (this.state.username==="bo2@gmail.com" && this.state.password==="bo2")
    ){
        this.props.history.push("/Listabonnebo");
    }
       // this.props.login(LoginRequest,this.props.history);
      }
     
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }


    
    render(){
        return( 
            
            <div class="sufee-login d-flex align-content-center flex-wrap">
            <div class="container">
                <div class="login-content">
                    <div class="login-logo">
                        <a href="index.html">
                            <img class="align-content" src="images/logo.png" alt=""></img>
                        </a>
                    </div>
                    <div class="login-form">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label> Email</label>
                                <input type="email" class="form-control" placeholder="Email"
                                  name="username"
                                  value={this.state.username}
                                  onChange={this.onChange} 
                                ></input>
                            </div>
                                <div class="form-group">
                                    <label>Mot de passe</label>
                                    <input type="password" class="form-control" placeholder="Mot de passe"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange} 
                                    ></input>
                            </div>
                                    <div class="checkbox">
                              
                               
                                    </div>
                                    <button type="submit"  class="btn  ">Se connecter</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}




export default Login;
  