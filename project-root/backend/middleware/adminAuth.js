function isAdmin(req, res, next) {
    if (req.isAuthenticated && req.user.role === 'admin') {
        // User is authenticated and has an admin role
        return next();
    } else {
        // User is not an admin
        return res.status(403).json({ success: false, message: 'Access denied: Admins only' });
    }
}

module.exports = isAdmin;