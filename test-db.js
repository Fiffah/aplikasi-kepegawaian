const bcrypt = require('bcryptjs');
const password = 'admin123';
const hash = '$2y$10$Y29QW.8jsFJ5E0JfwQ7JWuRzENJ6LJekz3MjZq5bWe0MG4lbpUbjG'; // ganti dengan hash dari database

const isMatch = bcrypt.compareSync(password, hash);
console.log('Password match:', isMatch);
