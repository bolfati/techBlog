
document.getElementById('card-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    
    var postId = event.target.dataset.id;
    
    
    fetch('/api/blogs/' + postId, {
      method: 'DELETE'
    })
      .then(function(response) {
        if (response.ok) {
          var cardElement = event.target.closest('.card');
          cardElement.remove();
        } else {
          
          console.error('Failed to delete blog post');
        }
      })
      .catch(function(error) {
        
        console.error('Network error', error);
      });
  }
});