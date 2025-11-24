import React from 'react';
import styled from 'styled-components';

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  min-height: 400px;
`;

const EmptyIcon = styled.div`
  font-size: 80px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const EmptyTitle = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 700;
`;

const EmptyDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 400px;
`;

const AddTaskButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface EmptyStateProps {
  onAddTask: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onAddTask }) => {
  return (
    <EmptyContainer>
      <EmptyIcon>📝</EmptyIcon>
      <EmptyTitle>You have no tasks</EmptyTitle>
      <EmptyDescription>
        Get started by creating your first task and stay organized!
      </EmptyDescription>
      <AddTaskButton onClick={onAddTask}>
        + Add New Task
      </AddTaskButton>
    </EmptyContainer>
  );
};
