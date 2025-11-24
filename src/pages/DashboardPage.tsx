import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DashboardHeader } from '../components/DashboardHeader';
import { TaskStats } from '../components/TaskStats';
import { TaskList } from '../components/TaskList';
import { EmptyState } from '../components/EmptyState';
import { SearchBar } from '../components/SearchBar';
import { AddTaskButton } from '../components/AddTaskButton';
import { TaskModal } from '../components/TaskModal';
import { useTasks } from '../contexts/TaskContext';
import { Task } from '../types/task';
import { Skeleton } from '../components/Skeleton';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const DashboardPage: React.FC = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  // Simulate async data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAddTask = (name: string) => {
    addTask(name);
    setIsModalOpen(false);
  };

  const handleEditTask = (id: string, _name: string) => {
    // We need the full task object, but TaskList only passes id and name.
    // We can find the task from the tasks array.
    const task = tasks.find(t => t.id === id);
    if (task) {
      setEditingTask(task);
      setIsModalOpen(true);
    }
  };

  const handleUpdateTask = (name: string) => {
    if (editingTask) {
      updateTask(editingTask.id, name);
      setIsModalOpen(false);
      setEditingTask(undefined);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(undefined);
  };

  return (
    <PageContainer>
      <DashboardHeader />
      <MainContent>
        {loading ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <Skeleton height="120px" />
              <Skeleton height="120px" />
              <Skeleton height="120px" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <Skeleton width="200px" height="40px" />
              <Skeleton width="300px" height="40px" />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <Skeleton height="80px" margin="0 0 1rem 0" />
              <Skeleton height="80px" margin="0 0 1rem 0" />
              <Skeleton height="80px" margin="0 0 1rem 0" />
            </div>
          </>
        ) : (
          <>
            {tasks.length > 0 && (
              <>
                <TaskStats />
                <ContentHeader>
                  <Title>Tasks</Title>
                  <SearchBar />
                </ContentHeader>
              </>
            )}

            {tasks.length === 0 ? (
              <EmptyState onAddTask={() => setIsModalOpen(true)} />
            ) : (
              <TaskList onEditTask={handleEditTask} />
            )}

            <AddTaskButton onClick={() => setIsModalOpen(true)} />

            <TaskModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={editingTask ? handleUpdateTask : handleAddTask}
              initialValue={editingTask?.name}
              mode={editingTask ? 'edit' : 'create'}
            />
          </>
        )}
      </MainContent>
    </PageContainer>
  );
};
