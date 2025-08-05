# UserHub – React + Vite + Tailwind CSS CRUD UI

This is a simple 4-page React + Vite application using Tailwind CSS for styling. It demonstrates basic UI routing, user authentication (mocked), data display from an external API, and CRUD operations for user data.

## 🔧 Stack

- **React** (with Vite)
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **Dummy JSON API** ([https://dummyjson.com/users](https://dummyjson.com/users))

## 📄 Pages

### 1. Authentication Page
- Simple login screen with username & password (mock).
- Only allows login with:
  - **Username**: `admin`
  - **Password**: `admin123`

### 2. Home Page
- Navigation bar with 2 links:
  - View Data
  - Input Data (CRUD)

### 3. Display Data Page
- Fetches and displays users from `https://dummyjson.com/users`.
- Shows:
  - User's full name
  - Email
  - Profile image

### 4. Input Data (CRUD) Page
- Add, edit, and delete user entries.
- Locally managed state (no backend persistence).
- Allows editing names, emails, and more.

## 🏁 Getting Started

### Install Dependencies

 - npm install
