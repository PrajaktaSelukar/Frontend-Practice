# Mega Blog

## Installations
1. npm install @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form

## Notes
- Environment variable declaration is different in React(starts with REACT_APP_) and Vite(starts with VITE_)
- Access them through in React(process.env.VARIABLE) and Vite(import.meta.env.VARIABLE)
- Add your TinyMCE Cloud key as `VITE_TINYMCE_API_KEY` in `.env` before starting Vite.

## Steps
1. Create Vite App
2. Install dependencies
    i) Install Redux Toolkit
    ii) Install React Redux
    ii) Install React Router Dom
    ii) Install appwrite
    ii) Install tinyMCE
    ii) install html-react-parser
    ii) Install React hook form
3. Test Server (npm run dev)
4. Setup Environment Variables 
5. git ignore for .env file
6. Initialize  Environment Variables (appWrite)
    a) Create Project
    b) Create DataBase
    c) Create Collection
    d) Create Attributes (title, content, featuredImage, status, userID)
    e) Create Index (status)
    f) Create Bucket / Storage (Images)
7. Configure Environment Varibales