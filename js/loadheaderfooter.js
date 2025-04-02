
         // Chargement du header
         fetch('includes/header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;
            });

        // Chargement du footer
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            });