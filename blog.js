fetch('blog.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('blog-container');
    container.innerHTML = '';

    posts.forEach(post => {
      const blogCard = `
        <div class="bg-white shadow p-4 rounded">
          <h3 class="text-xl font-bold mb-2">${post.title}</h3>
          <p class="text-sm text-gray-500 mb-2">${post.date}</p>
          <p class="mb-3">${post.excerpt}</p>
          <a href="${post.link}" class="bg-yellow-500 px-4 py-2 rounded text-white hover:bg-yellow-600">Read More</a>
        </div>
      `;
      container.innerHTML += blogCard;
    });
  })
  .catch(err => console.error('Failed to load blog posts:', err));
