const express = require('express');
const router = express.Router();

// Sample API endpoints

// Get all posts
router.get('/posts', (req, res) => {
    res.json({ message: 'All posts' });
});

// Create a new post
router.post('/posts', (req, res) => {
    res.json({ message: 'Post created' });
});

// Get all users
router.get('/users', (req, res) => {
    res.json({ message: 'All users' });
});

module.exports = router;
