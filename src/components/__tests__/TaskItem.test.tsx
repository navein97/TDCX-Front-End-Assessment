import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { TaskItem } from '../TaskItem';
import { TaskProvider } from '../../contexts/TaskContext';

const mockTask = {
  id: '1',
  name: 'Test Task',
  completed: false,
  createdAt: Date.now(),
};

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <TaskProvider>
        {component}
      </TaskProvider>
    </ThemeProvider>
  );
};

describe('TaskItem', () => {
  it('renders task name', () => {
    renderWithProviders(
      <TaskItem task={mockTask} onEdit={() => {}} />
    );
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('shows checkbox as unchecked for incomplete task', () => {
    renderWithProviders(
      <TaskItem task={mockTask} onEdit={() => {}} />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('shows checkbox as checked for completed task', () => {
    const completedTask = { ...mockTask, completed: true };
    renderWithProviders(
      <TaskItem task={completedTask} onEdit={() => {}} />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('calls onEdit when edit button is clicked', () => {
    const onEdit = vi.fn();
    renderWithProviders(
      <TaskItem task={mockTask} onEdit={onEdit} />
    );
    const editButton = screen.getByLabelText(/edit/i);
    fireEvent.click(editButton);
    expect(onEdit).toHaveBeenCalledWith(mockTask.id, mockTask.name);
  });
});
