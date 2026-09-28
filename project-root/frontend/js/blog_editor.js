var domainName = "http://127.0.0.1:3000";

console.log("js here");

function submitBlog() {
    var blog_Content = tinymce.get("myTextarea").getContent();
    console.log(blog_Content);

    const blog_Title = document.getElementById('blogTitle').value;
    console.log("blog_Title = " + blog_Title);

    fetch(domainName + '/submitBlog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ blogContent: blog_Content, blogTitle: blog_Title })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('Blog submitted successfully');
                window.location.href = `/blog/${data.blogId}`; // Update to use blogId instead of blogTitle
            } else {
                alert('Failed to submit blog');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the blog');
        });
}
