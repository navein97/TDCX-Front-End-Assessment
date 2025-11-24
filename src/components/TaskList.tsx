import React from 'react';
import styled from 'styled-components';
import { useTasks } from '../contexts/TaskContext';
import { TaskItem } from './TaskItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 16px;
`;

interface TaskListProps {
  onEditTask: (id: string, name: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ onEditTask }) => {
  const { filteredTasks, searchQuery } = useTasks();

  if (filteredTasks.length === 0 && searchQuery) {
    return <NoResults>No tasks found matching "{searchQuery}"</NoResults>;
  }

  return (
    <ListContainer>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={onEditTask} />
      ))}
    </ListContainer>
  );
};
