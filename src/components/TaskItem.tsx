import React from 'react';
import styled from 'styled-components';
import { Task } from '../types/task';
import { useTasks } from '../contexts/TaskContext';

const TaskItemContainer = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateX(4px);
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.success};
`;

const TaskName = styled.span<{ completed: boolean }>`
  flex: 1;
  font-size: 16px;
  color: ${({ theme, completed }) => completed ? theme.colors.textMuted : theme.colors.text};
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
  transition: all ${({ theme }) => theme.transitions.fast};
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ theme }) => theme.colors.backgroundGray};

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.border};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const EditButton = styled(ActionButton)`
  &:hover {
    background: rgba(74, 144, 226, 0.1);
  }
`;

const DeleteButton = styled(ActionButton)`
  &:hover {
    background: rgba(208, 2, 27, 0.1);
  }
`;

interface TaskItemProps {
  task: Task;
  onEdit: (id: string, name: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const { toggleTaskComplete, deleteTask } = useTasks();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${task.name}"?`)) {
      deleteTask(task.id);
    }
  };

  return (
    <TaskItemContainer>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskComplete(task.id)}
        aria-label={`Mark "${task.name}" as ${task.completed ? 'incomplete' : 'complete'}`}
      />
      <TaskName completed={task.completed}>{task.name}</TaskName>
      <EditButton
        onClick={() => onEdit(task.id, task.name)}
        aria-label={`Edit "${task.name}"`}
        title="Edit task"
      >
        ✏️
      </EditButton>
      <DeleteButton
        onClick={handleDelete}
        aria-label={`Delete "${task.name}"`}
        title="Delete task"
      >
        🗑️
      </DeleteButton>
    </TaskItemContainer>
  );
};
