# React Portfolio Project

A responsive and modern portfolio website built with React and TypeScript, showcasing projects, skills, and professional information.

## Project Structure

The application is structured as follows:

```
src/
├── components/         # Reusable UI components
├── pages/              # Main page components
├── screens/            # Additional screen components
├── styles/             # Global styles and animations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and constants
├── App.tsx             # Main application component
└── index.tsx           # Entry point
```

## Features

- Fully responsive design that works well on desktop, tablet, and mobile devices
- TypeScript integration with full type safety
- React Router for navigation between sections
- Animations for enhanced user experience
- Project showcase with case study details
- Skills and experience display
- Contact form
- 404 Page handling

## Technologies Used

- React 18
- TypeScript 4.9+
- React Router v6
- CSS with custom properties for theming
- CSS Animations

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm 6.0 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm start
```

The application will open in your browser at `http://localhost:3000/my-portfolio`.

## TypeScript Integration

This project has been fully converted to TypeScript, providing:

- Type definitions for all components and props
- Interface definitions for data structures
- Type safety for function parameters and returns
- Module declarations for importing non-TS assets

## Routing

The application uses React Router v6 for navigation:

- `/` - Home page
- `/about` - About Me page
- `/projects` - Projects list
- `/case-study/:id` - Individual project case study
- `/skills` - Skills page
- `/resume` - Resume page
- `/contact` - Contact page
- `*` - 404 Not Found page

## Building and Deployment

To build the application for production:

```bash
npm run build
```

This creates optimized files in the `build` folder that are ready for deployment.

## Future Enhancements

- Dark/Light theme toggle
- Internationalization support
- Blog section
- Backend integration for the contact form
- Unit tests for components

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
