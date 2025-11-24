import React, { useState } from 'react';
import styled from 'styled-components';
import { DashboardHeader } from '../components/DashboardHeader';
import { TaskStats } from '../components/TaskStats';
import { SearchBar } from '../components/SearchBar';
import { TaskList } from '../components/TaskList';
import { EmptyState } from '../components/EmptyState';
import { TaskModal } from '../components/TaskModal';
import { AddTaskButton } from '../components/AddTaskButton';
import { useTasks } from '../contexts/TaskContext';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundGray};
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const TaskSection = styled.section`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const DashboardPage: React.FC = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<{ id: string; name: string } | null>(null);

  const handleAddTask = (taskName: string) => {
    addTask(taskName);
  };

  const handleEditTask = (id: string, name: string) => {
    setEditingTask({ id, name });
    setIsModalOpen(true);
  };

  const handleUpdateTask = (taskName: string) => {
    if (editingTask) {
      updateTask(editingTask.id, taskName);
      setEditingTask(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleOpenNewTaskModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  return (
    <DashboardContainer>
      <DashboardHeader />
      
      <MainContent>
        <TaskStats />

        {tasks.length === 0 ? (
          <EmptyState onAddTask={handleOpenNewTaskModal} />
        ) : (
          <TaskSection>
            <SearchBar />
            <TaskList onEditTask={handleEditTask} />
          </TaskSection>
        )}
      </MainContent>

      <AddTaskButton onClick={handleOpenNewTaskModal} />

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
        initialValue={editingTask?.name || ''}
        mode={editingTask ? 'edit' : 'create'}
      />
    </DashboardContainer>
  );
};
