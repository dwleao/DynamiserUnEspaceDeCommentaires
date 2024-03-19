let myForm = document.getElementById('myForm')
myForm.addEventListener('submit', function(event) {
   
   // Empêche la soumission du formulaire par défaut
   event.preventDefault();

   // Récupération des valeurs du formulaire
   let firstName = document.getElementById('first-name').value;
   let lastName = document.getElementById('last-name').value;
   let message = document.getElementById('message').value;
      
   if (firstName && lastName && message) {
          // Effacer le message d'erreur
          let myError = document.getElementById('error-message');
          myError.style.display = "none";
          // Création du nouvel élément de commentaire
          let commentElement = document.createElement('div');
          commentElement.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
          commentElement.innerHTML = `
              <div class="flex-1 py-10 ">
                  <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                  <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                      <p>${message}</p>
                  </div>
              </div>
          `;
          
          // Ajout du nouvel élément à la liste des commentaires
          document.getElementById('comment-list').appendChild(commentElement);
          
          // Effacer les champs du formulaire après l'envoi
          document.getElementById('first-name').value = '';
          document.getElementById('last-name').value = '';
          document.getElementById('message').value = '';
      } 
      
      else {
          // Afficher un message d'erreur si tous les champs ne sont pas remplis
          document.getElementById('error-message').style.display = 'block';
      }
  });

