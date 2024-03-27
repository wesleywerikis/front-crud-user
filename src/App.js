import './App.css';
import UserList from './pages/UserList';

function App() {
  return (
    <body>
      <div className='app-container'>
        <div className='cont-title'>
          <h2 className='title-app-gerenc'>Aplicação de Gerenciamento de Usuários</h2>
        </div>
          <UserList />
      </div>
    </body>
  );
}

export default App;
