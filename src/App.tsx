import GlobalStyle from './global';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
    </>
  );
}

export default App;