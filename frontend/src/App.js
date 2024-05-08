
import './App.css';

import NavbarMain from './Components/NavbarMain';
import UserTable from './Components/UserTable';

function App() {
  return (

    <div className="App">
      <NavbarMain />
      <div style={{margin:22}}>
        <h2>Users</h2>
      </div>
      <UserTable />
       
    </div>
  );
}

export default App;
