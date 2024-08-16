# Firebase Authentication Sign-In, Sign-Up, and Admin Page

This project is a simple authentication system built with React and Next.js, utilizing Firebase for authentication. It provides user interfaces for signing in, signing up, and accessing an admin page.

## Features

- User authentication using Firebase.
- Sign-in and sign-up forms with validation and error handling.
- Admin page accessible after authentication.
- Styled with Tailwind CSS for a clean and modern look.

## Project Structure
root/
│
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.js
│   │   ├── signin/
│   │   │   └── page.js
│   │   ├── signup/
│   │   │   └── page.js
│   │   ├── loading.js
│   │   └── page.js
│   ├── context/
│   │   └── AuthContext.js
│   └── firebase/
│       ├── auth/
│       │   ├── signin.js
│       │   └── signup.js
│       └── config.js
│
├── public/
│   └── favicon.ico
│
├── styles/
│   └── global.css
│
├── .gitignore
├── package.json
├── next.config.js
└── README.md

### File and Directory Descriptions

- `src/app/admin/page.js`: Admin page accessible after successful authentication.
- `src/app/signin/page.js`: Sign-in page for users.
- `src/app/signup/page.js`: Sign-up page for new users.
- `src/app/loading.js`: Loading component displayed during authentication processes.
- `src/context/AuthContext.js`: Provides authentication context for the application.
- `src/firebase/auth/signin.js`: Contains the logic for signing in a user.
- `src/firebase/auth/signup.js`: Contains the logic for signing up a new user.
- `src/firebase/config.js`: Firebase configuration file.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Firebase project set up with Firestore and Authentication enabled.

### Installation

1.  Clone the repository.

2.  Navigate to the project directory.

3.  Install dependencies.

### Configuration

1.  Configure your Firebase credentials in the appropriate environment file (e.g., `.env.local`):

    `NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id`

2.  Update Firebase initialization in `src/firebase/config.js`:

    `import firebase from "firebase/app";
      import "firebase/auth";
    
        const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
        };
    
        if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        }
    
        export default firebase;`

### Usage

1.  Start the development server.

2.  Open your browser and navigate to `http://localhost:3000` to view the sign-in, sign-up, and admin pages.

### Deployment

To deploy the project, follow the Next.js deployment guide for your target platform (e.g., Vercel, Netlify).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
