import React from 'react';
import styled from 'styled-components';
import { useTasks } from '../contexts/TaskContext';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StatCard = styled.div<{ color: string }>`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-left: 4px solid ${({ color }) => color};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatDescription = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TaskStats: React.FC = () => {
  const { getTaskStats } = useTasks();
  const stats = getTaskStats();

  return (
    <StatsContainer>
      <StatCard color="#667eea">
        <StatLabel>Total Tasks</StatLabel>
        <StatValue>{stats.total}</StatValue>
        <StatDescription>All tasks in your list</StatDescription>
      </StatCard>

      <StatCard color="#7ED321">
        <StatLabel>Completed</StatLabel>
        <StatValue>{stats.completed}</StatValue>
        <StatDescription>
          {stats.total > 0
            ? `${Math.round((stats.completed / stats.total) * 100)}% completion rate`
            : 'No tasks completed yet'}
        </StatDescription>
      </StatCard>

      <StatCard color="#F5A623">
        <StatLabel>Latest Task</StatLabel>
        <StatValue style={{ 
          fontSize: '18px', 
          lineHeight: '1.4',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {stats.latestTask}
        </StatValue>
        <StatDescription>Most recently created</StatDescription>
      </StatCard>
    </StatsContainer>
  );
};
