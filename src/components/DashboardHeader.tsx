import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { ViewModeContext } from '../contexts/ViewModeContext';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const WelcomeText = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.875rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const ToggleButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const DashboardHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const { mode, toggleMode } = useContext(ViewModeContext);

  return (
    <HeaderContainer>
      <Logo>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#6B46C1" />
          <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        TDCX
      </Logo>
      
      <UserSection>
        <WelcomeText>Welcome, {user?.username}</WelcomeText>
        <ButtonGroup>
          <ToggleButton onClick={toggleMode}>
            {mode === 'mobile' ? 'Desktop View' : 'Mobile View'}
          </ToggleButton>
          <ActionButton onClick={logout}>Logout</ActionButton>
        </ButtonGroup>
      </UserSection>
    </HeaderContainer>
  );
};
