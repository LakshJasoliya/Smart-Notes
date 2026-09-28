document.addEventListener('DOMContentLoaded', () => {
    // Fetch blog details from the backend using POST request
    fetch('/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const { blogs, userRole } = data;
        const mainElement = document.querySelector('main');
        console.log("blogs = ", blogs);
        blogs.forEach(blog => {
            const createdAt = new Date(blog.createdAt);
            const formattedDate = `${getMonthName(createdAt.getMonth())} ${createdAt.getDate()}, ${createdAt.getFullYear()}`;
            const blogLink = `/blog/${blog.blogId}`;
            const article = document.createElement('article');
            article.innerHTML = `
                <h2 style="color: #174C7E;">${blog.title}</h2>
                <p>${formattedDate} posted by ${blog.author.username}</p>
                <a href="${blogLink}">Read more</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ${userRole === 'admin' ? `<button class="delete-btn" data-id="${blog.blogId}">Delete</button>` : ''}
            `;
            mainElement.appendChild(article);
        });

        // Attach event listener to delete buttons
        if (userRole === 'admin') {
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', async (e) => {
                    const blogId = e.target.getAttribute('data-id');
                    try {
                        const response = await fetch(`/deleteBlog/${blogId}`, {
                            method: 'DELETE'
                        });
                        const result = await response.json();
                        if (result.success) {
                            alert('Blog deleted successfully');
                            // Optionally remove the blog element from the DOM
                            e.target.closest('article').remove();
                        } else {
                            console.error('Error deleting blog:', result.message);
                        }
                    } catch (error) {
                        console.error('Error deleting blog:', error);
                    }
                });
            });
        }
    })
    .catch(error => console.error('Error fetching blog details:', error));
});

// Function to get month name from month index
function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}
