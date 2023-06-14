import './App.scss';
import { PageRoute } from './services/PageRoute';

function App() {
  return (
    <div className='App'>
      <PageRoute />
      <footer>
        <span style={{ left : 0, fontSize: "9pt", textAlign: "left", color: "white", display: 'flex', justifyContent: "flexStart", padding: "1rem", bottom: '2px', position: 'fixed' }}>Created using NPX CRA</span>
      </footer>
    </div>
  );
}

export default App;
