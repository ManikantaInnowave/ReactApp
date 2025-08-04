# React App with Functionality

A modern React application built with TypeScript that demonstrates various React concepts and functionality.

## Features

This React app includes several functional components:

### 1. Todo List
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Persistent storage using localStorage
- Responsive design

### 2. Counter
- Increment and decrement functionality
- Reset button
- State management with React hooks
- Visual feedback

### 3. User Registration Form
- Form validation (name, email, age)
- Real-time error feedback
- User data collection and display
- Responsive form design

### 4. Weather Widget
- Simulated weather data
- Auto-refresh every 30 seconds
- Loading states
- Weather icons and details
- Mock API simulation

## Technologies Used

- **React 18** - Latest version with modern features
- **TypeScript** - Type safety and better development experience
- **CSS3** - Modern styling with gradients and animations
- **React Hooks** - useState, useEffect for state management
- **Local Storage** - Data persistence for todos

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone or download the project** to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd ReactApp
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

To start the development server:

```bash
npm start
```

This will:
- Start the development server on `http://localhost:3000`
- Open your default browser automatically
- Enable hot reloading (changes will automatically refresh the page)

### Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Testing

To run tests:

```bash
npm test
```

### Eject (Advanced)

To eject from Create React App (not recommended unless necessary):

```bash
npm run eject
```

## Project Structure

```
ReactApp/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── TodoList.tsx    # Todo list component
│   │   ├── Counter.tsx     # Counter component
│   │   ├── UserForm.tsx    # User registration form
│   │   ├── WeatherWidget.tsx # Weather widget
│   │   └── components.css  # Component styles
│   ├── App.tsx             # Main App component
│   ├── App.css             # App styles
│   ├── index.tsx           # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Browser Support

The application is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

1. **Port 3000 is already in use**
   - The development server will automatically try to use the next available port
   - You can also manually specify a port: `PORT=3001 npm start`

2. **Dependencies not installing**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and package-lock.json, then run `npm install`

3. **TypeScript errors**
   - Make sure you have the correct TypeScript version
   - Check that all type definitions are properly installed

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are properly installed
3. Verify Node.js and npm versions are compatible

## Customization

You can easily customize this application by:

- Modifying the CSS styles in the respective `.css` files
- Adding new components in the `src/components/` directory
- Updating the main App component to include new features
- Changing the color scheme in `src/index.css`

## Contributing

Feel free to:
- Add new features
- Improve existing functionality
- Fix bugs
- Enhance the UI/UX

## License

This project is open source and available under the MIT License. 