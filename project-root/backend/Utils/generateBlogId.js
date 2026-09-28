function generateBlogId() {
    // Generate a timestamp to ensure uniqueness
    const timestamp = new Date().getTime();

    // Generate a random number to further ensure uniqueness
    const randomNumber = Math.floor(Math.random() * 1000000);

    // Concatenate timestamp and random number to create the blogId
    const blogId = `${timestamp}${randomNumber}`;

    return blogId;
}

module.exports = generateBlogId;