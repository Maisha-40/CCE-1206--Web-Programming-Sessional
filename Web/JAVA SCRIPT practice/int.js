var addCommentBtn = document.getElementById("add-comment-btn");
var commentInput = document.getElementById("comment-input");
var commentsContainer = document.getElementById("comments-container");
addCommentBtn.addEventListener("click", function () {
  var commentText = commentInput.value;
  if (commentText !== "") {
    var newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerText = commentText;
    commentsContainer.appendChild(newComment);
    commentInput.value = "";
  }
});
