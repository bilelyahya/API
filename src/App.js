import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navigation';
import Usercard from './Component/Usercard';
import { Route, Switch } from 'react-router-dom';
import Userlist from './Component/Userlist';
import UserListAxios from './Component/UserListAxios';
import Profil from './Component/Profil';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      {/* <Route path='/' component={Userlist}
      /> */}
      <Route path='/' component={UserListAxios}
      />
      <Route exact path='/Profil/:id' render={(props)=><Profil {...props} />
      }
      />

      </Switch>
      
    </div>
  );
}

export default App;
