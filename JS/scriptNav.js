

  document.addEventListener("DOMContentLoaded", function() { // Assicurati che il DOM sia completamente caricato prima di eseguire il codice
    // Inizializza le variabili per la barra laterale e l'icona del menu
    const sidebar = document.getElementById("Sidebar"); // Barra laterale
    const menuToggle = document.getElementById("menu-toggle"); // Icona del menu hamburger
    let sidebarOpen = false; // Variabile per tenere traccia dello stato della barra laterale
  
    function openSidebar() { // Funzione per aprire la barra laterale
      sidebar.style.display = "block"; // Mostra la barra laterale
      menuToggle.src = "img/close.png"; // Usa la tua icona X
      sidebarOpen = true; // Imposta lo stato della barra laterale come aperta
    }
  
    function closeSidebar() { // Funzione per chiudere la barra laterale
      sidebar.style.display = "none"; // Nascondi la barra laterale
      menuToggle.src = "img/hamburger.png"; // Torna all'icona del menu hamburger
      sidebarOpen = false; // Imposta lo stato della barra laterale come chiusa
    }
  
    if (menuToggle) {
      menuToggle.addEventListener("click", function() { // Aggiungi un gestore di eventi per il click sull'icona del menu
        if (sidebarOpen) { // Se la barra laterale è aperta
          closeSidebar();   // Chiudi la barra laterale
        } else { // Se la barra laterale è chiusa
          openSidebar(); // Apri la barra laterale
        } 
      });
    }
  });