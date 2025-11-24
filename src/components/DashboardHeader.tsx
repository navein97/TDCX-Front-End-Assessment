import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

const Header = styled.header`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Username = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline;
  }
`;

const LogoutButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.danger};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 14px;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.dangerHover};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DashboardHeader: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Header>
      <Logo>TDCX</Logo>
      <UserSection>
        {user && <Username>Welcome, {user.username}</Username>}
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </UserSection>
    </Header>
  );
};
