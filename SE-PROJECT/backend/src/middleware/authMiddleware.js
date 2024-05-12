// middleware/authMiddleware.js

const authMiddleware = (req, res, next) => {
    console.log('Headers:', req.headers); // Add this line to see headers
    // Get the user ID from the headers
    const userId = req.headers['user-id'];
    console.log('UserID:', userId); // Add this line to see the user ID
  
    // Check if user ID is present
    if (!userId) {
      console.log('Unauthorized: No user ID');
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Attach the user ID to the request object for further use in route handlers
    req.userId = userId;
  
    // Call next middleware
    next();
  };
  
  export default authMiddleware
  