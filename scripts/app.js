let myForm = document.getElementById('myForm');

     
myForm.addEventListener('submit', function(verifyEmptySpaces) {

     let prenom = document.getElementById('first-name');     
     let nom = document.getElementById('last-name');
     let message = document.getElementById('message');
 
     if (prenom.value.trim() == "") {
         let myError = document.getElementById('error-message');
         myError.style.display = "block";
         verifyEmptySpaces.preventDefault();
     }
     else if (nom.value.trim() == "") {
        let myError = document.getElementById('error-message');
        myError.style.display = "block";
        verifyEmptySpaces.preventDefault();
     }
     else if (message.value.trim() == "") {
        let myError = document.getElementById('error-message');
        myError.style.display = "block";
        verifyEmptySpaces.preventDefault();
     }
     else {
        let div = document.createElement("div");
        let commentList = document.getElementById('comment-list');
        commentList.appendChild(div);
        let commentAuthor = document.createTextNode(prenom.value + " " + nom.value);
        div.appendChild(commentAuthor);

        let p = document.createElement("p");
        let messageContent = document.createTextNode(message.value)
        p.appendChild(messageContent);
        div.appendChild(p);

        verifyEmptySpaces.preventDefault();
     }
    })



    /*else {
        let myComment = document.createElement("div");
        let myCommentDiv = document.createElement("div");
        let commentAuthor = document.createTextNode(prenom.value + "" + nom.value);
        let commentContent = document.createTextNode(message.value);
          document.body.appendChild(div);
        myCommentDiv.appendChild(commentAuthor);
        commentList.appendChild(myComment);
        commentList.appendChild(commentContent);
        let myError = document.getElementById('error-message');
        myError.style.display = "none";
        verifyEmptySpaces.preventDefault();
    }*/



     


