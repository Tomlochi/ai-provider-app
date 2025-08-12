# AI Provider App

A React-based web application for managing and analyzing AI service providers with severity-based classification and filtering capabilities.

## Features

- **Provider Management**: View and manage AI service providers (ChatGPT, Claude, Gemini, etc.)
- **Severity Classification**: Categorize providers by risk levels (Critical, High, Medium, Low)
- **Advanced Filtering**: Filter providers by severity with interactive dropdown menus
- **Sorting**: Sort providers by severity level or name
- **Internationalization**: Multi-language support with i18next
- **Responsive Design**: design with Tailwind CSS
- **State Management**: Redux Toolkit for global state management

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + RTK Query
- **Routing**: React Router v7
- **Internationalization**: i18next + react-i18next
- **Build Tool**: Vite

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-provider-app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run test suite
- `yarn lint` - Run ESLint

## Project Architecture

### Component Hierarchy

```
App
├── Header (App branding, user info)
├── Layout (Persistent sidebar + content area)
│   ├── Sidebar (Navigation menu)
│   └── Outlet (Dynamic page content)
│       ├── Policies (Main dashboard)
│       │   ├── RightPanel (Provider list)
│       │   └── LeftPanel (Provider details)
│       ├── Overview (Landing page)
│       └── OrganizationSettings (Settings page)
```

### Core Components

#### Layout & Navigation
- **`Layout`**: Main wrapper with persistent sidebar
- **`Sidebar`**: Navigation menu with route links
- **`Header`**: App header with branding and user section

#### Provider Management
- **`ProviderCard`**: Individual provider display card
- **`ProviderList`**: Scrollable list of providers
- **`ProviderDetail`**: Detailed view of selected provider
- **`ProviderIcon`**: Provider-specific SVG icons

#### Severity & Filtering
- **`SeverityBadge`**: Visual severity indicators with icons/dots
- **`SeverityFilterMenu`**: Dropdown filter for severity levels
- **`SortBySeverityButton`**: Toggle sorting by severity

#### Utilities
- **`TooltipComponent`**: Reusable tooltip with positioning
- **`cn`**: Tailwind CSS class merging utility

### State Management

#### Redux Store Structure
```typescript
{
  provider: {
    selectedProviderId: number | null
    severityFilter: Record<Severity, boolean>
    isSorted: boolean
  }
}
```

#### Key Actions
- `setSelectedProviderId`: Select provider for detailed view
- `toggleSeverity`: Toggle severity filter on/off

### Data Flow

1. **API Layer**: RTK Query handles provider data fetching
2. **State Updates**: Redux actions update global state
3. **Component Rendering**: Components subscribe to relevant state slices
4. **User Interactions**: Events dispatch actions to update state

### File Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route-specific page components
├── store/              # Redux store configuration
│   └── slices/         # Redux slices
├── services/           # API services (RTK Query)
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── assets/             # Static assets (icons, logos)
├── i18n.ts            # Internationalization setup
└── __tests__/         # Test files
```

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- ESLint with React-specific rules
- Prettier for code formatting
- Component props interface definitions

### Performance Considerations
- React.memo for expensive components
- useMemo for derived state calculations
- Lazy loading for route components
- Optimized re-renders with proper dependency arrays

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management for modals and dropdowns
