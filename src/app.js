import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { posts } from './data/posts.js'; // Import the posts data

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Define the route to render the blog posts
app.get('/', (req, res) => {
    res.render('pages/index', { posts}); // Example: Pass an empty posts array
});

// Blog Details Page Route
app.get('/blog/:id', (req, res) => {
    const postId = parseInt(req.params.id); // Get the post ID from the URL
    const post = posts.find(p => p.id === postId); // Find the post by ID

    if (post) {
        res.render('pages/blog', { post }); // Render the blog.ejs file with the post data
    } else {
        res.status(404).send('Post not found'); // Handle invalid post IDs
    }
});

// About Page Route
app.get('/about', (req, res) => {
    res.render('pages/about');
});

// Contact Page Route
app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

// Handle Contact Form Submission (Optional)
app.post('/contact', (req, res) => {
    // Handle form data (e.g., log it or send an email)
    console.log(req.body);
    res.send('Thank you for contacting us!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});