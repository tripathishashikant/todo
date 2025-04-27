# Todo Application

This is a Vue 3-based Todo application built with Vite. The application allows users to manage multiple todo lists, add tasks, mark tasks as completed, and switch between light and dark themes. It also supports user authentication using Firebase.

## Features

- **User Authentication**: Sign up, log in, and log out functionality using Firebase Authentication.
- **Multiple Todo Lists**: Create, delete, and manage multiple todo lists.
- **Task Management**: Add, edit, delete, and mark tasks as completed or pending.
- **Theme Switching**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Horizontal and Vertical Layouts**: Switch between horizontal and vertical layouts for better usability.

## Project Setup

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd todo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

To build the application for production:
```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

To preview the production build:
```bash
npm run preview
```

## Firebase Configuration

The application uses Firebase for authentication and Firestore for data storage. To set up Firebase:

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Replace the Firebase configuration in `src/firebase/index.js` with your project's configuration.

## Project Structure

- **src/**: Contains the source code for the application.
  - **assets/**: Static assets like SCSS files and images.
  - **components/**: Reusable Vue components.
  - **constants/**: Application constants.
  - **firebase/**: Firebase configuration.
  - **mock/**: Mock data for development.
  - **router/**: Vue Router configuration.
  - **store/**: Vuex store modules.
  - **views/**: Vue components for different pages.
- **public/**: Static files served directly.
- **dist/**: Production build output.

## Deployment

The application is configured for deployment on Firebase Hosting. To deploy:

1. Install the Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in the project:
   ```bash
   firebase init
   ```

4. Deploy the application:
   ```bash
   firebase deploy
   ```

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](./LICENSE) file for details.

## Hosted Application

The application is hosted at: [Todo App](https://todo-app-25385.web.app)

## Author

Developed by [tripathishashikant](https://github.com/tripathishashikant).
