
const commentForm = document.querySelector('#comment');
const commentButton = document.querySelector('.btn-primary');
const commentContainer = document.querySelector('.col-12 > h4 + div');

commentButton.addEventListener('click', () => {
    const comment = commentForm.value.trim();
    if (comment) {
        const newComment = document.createElement('div');
        newComment.classList.add('card', 'mb-3');
        newComment.innerHTML = `
                    <div class="card-body d-flex">
                        <img src="assets/1.jpg" alt="Profile Picture" class="rounded-circle me-3" style="width: 50px; height: 50px; object-fit: cover; cursor: zoom-in;">
                        <p>${comment}</p>
                    </div>
                `;
        commentContainer.appendChild(newComment);
        commentForm.value = '';
    }
});