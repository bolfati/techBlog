document.addEventListener('click', async function(event) {
  if (event.target.classList.contains('delete-button')) {
    const postId = event.target.dataset.postId;
    try {
      const response = await fetch(`/post/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Handle successful deletion
        // For example, remove the deleted post from the DOM
        event.target.closest('.post').remove();
      } else {
        // Handle error response
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
});