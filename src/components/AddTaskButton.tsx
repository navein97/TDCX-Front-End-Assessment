import React from 'react';
import styled from 'styled-components';

const FloatingButton = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 28px;
  font-weight: 300;
  line-height: 1;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
  transition: all ${({ theme }) => theme.transitions.normal};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 6px 30px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: scale(1.05) rotate(90deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 56px;
    height: 56px;
  }
`;

interface AddTaskButtonProps {
  onClick: () => void;
}

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <FloatingButton onClick={onClick} aria-label="Add new task" title="Add new task">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </FloatingButton>
  );
};
