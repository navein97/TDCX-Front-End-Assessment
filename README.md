# TDCX Frontend Assessment - Task Management Application

A modern, responsive task management application built with React, TypeScript, and styled-components. This project demonstrates a complete single-page application with authentication, CRUD operations, and a beautiful user interface.

![TDCX Task Manager](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)

## 🚀 Features

### ✅ Core Functionality
- **User Authentication** - Login/logout with session persistence
- **Task Management** - Create, read, update, and delete tasks
- **Task Completion** - Mark tasks as complete/incomplete with visual feedback
- **Search Functionality** - Real-time task filtering by name
- **Data Persistence** - Tasks saved to localStorage, session to sessionStorage
- **Responsive Design** - Mobile-first approach, works on all devices

### 🎨 Design Highlights
- **Modern UI** - Clean, gradient-based design with smooth animations
- **Micro-interactions** - Hover effects, transitions, and floating animations
- **Empty States** - Engaging empty state with call-to-action
- **Statistics Dashboard** - Real-time task statistics with completion rate
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML

### 🛠️ Technical Stack
- **Framework**: React 18.2 with TypeScript
- **Build Tool**: Vite 5.0
- **Styling**: styled-components (CSS-in-JS)
- **Routing**: React Router v6
- **State Management**: React Context API with hooks
- **Testing**: Vitest + React Testing Library
- **Storage**: localStorage (tasks) + sessionStorage (auth)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Modern web browser

### Setup Instructions

1. **Clone or download the repository**
   ```bash
   cd "TDCX-Front End Assessment"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - You should see the login page

## 🎯 Usage Guide

### Logging In
1. Enter any username and password (validation is basic for demo purposes)
2. Click "Sign In" to access the dashboard

### Managing Tasks
- **Add Task**: Click the floating "+" button or "Add New Task" button
- **Complete Task**: Click the checkbox next to a task
- **Edit Task**: Click the pencil (✏️) icon
- **Delete Task**: Click the trash (🗑️) icon and confirm
- **Search Tasks**: Type in the search bar to filter tasks

### Dashboard Features
- **Total Tasks**: Shows the count of all tasks
- **Completed**: Displays completed tasks and completion percentage
- **Latest Task**: Shows the most recently created task

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## 🏗️ Project Structure

```
TDCX-Front End Assessment/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AddTaskButton.tsx
│   │   ├── DashboardHeader.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── SearchBar.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskModal.tsx
│   │   ├── TaskStats.tsx
│   │   └── __tests__/       # Component tests
│   ├── contexts/            # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── TaskContext.tsx
│   ├── pages/               # Page components
│   │   ├── DashboardPage.tsx
│   │   └── LoginPage.tsx
│   ├── styles/              # Global styles and theme
│   │   ├── GlobalStyles.ts
│   │   └── theme.ts
│   ├── types/               # TypeScript type definitions
│   │   └── task.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── setupTests.ts        # Test configuration
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Linear gradient (#667eea → #764ba2)
- **Success**: #7ED321 (completed tasks)
- **Danger**: #D0021B (delete actions)
- **Background**: #F8F9FA (page background)
- **Text**: #333333 (primary text)

### Responsive Breakpoints
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1200px+

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deployment Platforms
This app can be deployed to:
- **Vercel** (Recommended) - Zero configuration
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Static hosting
- **Any static hosting service**

#### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Implementation Notes

### Authentication
- Simple client-side authentication for demonstration
- Session persists in `sessionStorage`
- In production, implement proper backend authentication

### Data Persistence
- Tasks stored in `localStorage` with JSON serialization
- Automatic save on every task modification
- Data persists across browser sessions

### Performance Optimizations
- React.StrictMode for development checks
- Efficient re-renders with proper state management
- CSS-in-JS with styled-components for scoped styles
- Lazy loading ready (can be added for routes)

### Accessibility Features
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |

## 🐛 Known Issues & Future Enhancements

### Potential Improvements
- [ ] Add task priorities (high, medium, low)
- [ ] Implement task categories/tags
- [ ] Add due dates and reminders
- [ ] Implement drag-and-drop task reordering
- [ ] Add dark mode toggle
- [ ] Implement backend API integration
- [ ] Add user registration
- [ ] Export tasks to CSV/JSON
- [ ] Add task filtering by completion status

## 📄 License

This project is created for the TDCX Frontend Assessment.

## 👨‍💻 Development

Built with ❤️ using modern web technologies and best practices.

### Key Technologies
- **React 18** - Latest React features
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **styled-components** - CSS-in-JS styling
- **React Router** - Client-side routing
- **Vitest** - Fast unit testing

---

**Note**: This is a demonstration project for the TDCX Frontend Assessment. For production use, implement proper backend authentication, API integration, and security measures.
