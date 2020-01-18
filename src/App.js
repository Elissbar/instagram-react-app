import React, { Component } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const ContextName = React.createContext();

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      username: 'John'
    };
  }

  render() {
    return (
      <div className="App" >
        <Router>
          <Header />
          <ContextName.Provider value={this.state.username}>
            <Route path="/" component={Feed} exact />
            <Route path="/profile" component={Profile} exact />
          </ContextName.Provider>
        </Router>
      </div >
    )
  }

}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayed_form: '',
//       logged_in: localStorage.getItem('token') ? true : false,
//       username: ''
//     };
//   }

//   componentDidMount() {
//     if (this.state.logged_in) {
//       fetch('http://localhost:8000/core/current_user/', {
//         headers: {
//           Authorization: `JWT ${localStorage.getItem('token')}`
//         }
//       })
//         .then(res => res.json())
//         .then(json => {
//           this.setState({ username: json.username });
//         });
//     }
//   }

//   handle_login = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/token-auth/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.user.username
//         });
//       });
//   };

//   handle_signup = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/core/users/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username
//         });
//       });
//   };

//   handle_logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ logged_in: false, username: '' });
//   };

//   display_form = form => {
//     this.setState({
//       displayed_form: form
//     });
//   };

//   render() {
//     let form;
//     switch (this.state.displayed_form) {
//       case 'login':
//         form = <LoginForm handle_login={this.handle_login} />;
//         break;
//       case 'signup':
//         form = <SignupForm handle_signup={this.handle_signup} />;
//         break;
//       default:
//         form = null;
//     }

//     return (
//       <div className="App">
//         <Router>
//           <Header />
//           <div id="toggle" className='hide'>
//             <h3>
//               {this.state.logged_in
//                 ? `${this.state.username}`
//                 : 'Пожалуйста авторизируйтесь'}
//             </h3>
//             <Nav
//               logged_in={this.state.logged_in}
//               display_form={this.display_form}
//               handle_logout={this.handle_logout}
//             />
//             {form}
//           </div>
//           <ContextName.Provider value={this.state.username}>
//             <Route path="/" component={Feed} exact />
//             <Route path="/profile" component={Profile} exact />
//           </ContextName.Provider>
//           {/* <Route path="/" render={() => <Feed name={this.state.username} />} exact /> */}
//           {/* <Route path="/profile" render={() => <Profile name={this.state.username} />} exact /> */}
//           <Route path="/admin/" component={Admin} exact />
//         </Router>
//       </div>
//     );
//   }
// }

export default App;
