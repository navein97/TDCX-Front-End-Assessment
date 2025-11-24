import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';
import { ViewModeProvider, ViewModeContext } from './contexts/ViewModeContext';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { theme as defaultTheme } from './styles/theme';

const ThemedApp = () => {
  const { themed } = useContext(ViewModeContext);
  return (
    <ThemeProvider theme={themed || defaultTheme}>
      <GlobalStyles />
      <AuthProvider>
        <TaskProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Router>
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ViewModeProvider>
      <ThemedApp />
    </ViewModeProvider>
  );
}

export default App;
