# Blog Website

This project is a simple blog website built using Express and EJS. It simulates a blog database and displays blog posts on a web page. The website includes features like a sticky header, responsive design, and a "Back to Top" button.

## Project Structure

```
blog-website 
├── public / css 
│   │ └── styles.css 
├── views 
│   ├── partials 
│   │   ├── header.ejs 
│   │   └── footer.ejs 
│   ├── pages 
│   │   ├── index.ejs 
│   │   ├── about.ejs 
│   │   ├── contact.ejs 
│   │   └── blog.ejs 
├── src 
│   ├── app.js 
│   └── data 
│       └── posts.js 
├── package.json  
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd blog-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to view the blog posts.

## Features

- Displays a list of blog posts with titles, content, and authors.
- Uses EJS for templating and rendering views.
- Includes partials for consistent header and footer across pages.
- Custom styling with CSS.
- Sticky header for easy navigation.
- Responsive design for various screen sizes.
- "Back to Top" button for quick access to the top of the page.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.