document.addEventListener("DOMContentLoaded", function() {

window.onload = function() {

    var cancelarBtn = document.getElementById("cancelBtn");
		cancelarBtn.addEventListener("click", function() {
			console.log("cancel clicked");
			window.location.href = "index.html";
		});



	var iniciarSesionBtn = document.getElementById("submitBtn");

		iniciarSesionBtn.addEventListener("click", function(event) {
			event.preventDefault(); 

			var user = document.getElementById("userField").value;
			var password = document.getElementById("passField").value;

			verificarCredenciales(user, password);
		});

        function verificarCredenciales(user, password) {
            var credentials = {
                "user": "annaPsico",
                "password": "Anna99"
            };
    
            if (user === credentials.user && password === credentials.password) {
                sessionStorage.setItem("IsLogged", "true");
                //window.sharedData.buttonContent = "Admin Out";
                redirectToIndex();
            } else {
                // ...
            }
        }
    
        // Función para redirigir a la página de inicio (index.html)
        function redirectToIndex() {
            window.location.href = "index.html";
        }
};
});
