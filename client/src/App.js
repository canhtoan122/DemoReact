import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { GameDetailPage } from './Pages/GameDetailPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { Cart } from './Pages/Cart';

// import logo from './logo.svg';
import './App.css';
// import { render } from '../../api/app';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {apiResponse:""};
//   }
//   callAPI(){
//     fetch("http://localhost:9000/server")
//       .then(res => res.text())
//       .then(res => this.setState({apiResponse: res}));
//   }
//   componentWillMount(){
//     this.callAPI();
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
          
//           <p>{this.state.apiResponse}</p>
//         </header>
//       </div>
//       // <BrowserRouter>
//       //     <Routes>
//       //       <Route path="/" element={<HomePage />} />
//       //       <Route path="/games/:gameId" element={<GameDetailPage />} />
//       //       <Route path="/cart" element={<Cart />} />
//       //       <Route  element={<NotFoundPage />} />
//       //     </Routes>
//       // </BrowserRouter>
//     );
//   }
// }

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:gameId" element={<GameDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route  element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
