$(document).ready(function () {
  // Initial load based on the current hash or pathname
  loadMainComponent();

  // Event listener for hash changes (if using hashes)
  $(window).on("hashchange", function () {
    loadMainComponent();
  });

  // Event listener for clicks on links with data-component attributes
  $("[data-component]").on("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const componentName = $(this).data("component");
    loadMainComponent(componentName);
  });
  /*
    // Header loading (using jQuery's load method)
    $("#header").load("./components/header.html", function () {
        // After the header is loaded, call loadMainComponent to set the active class on the initial load
        loadMainComponent();
      });
      $("#footer").load("./components/footer.html"); // Load footer (no changes here)
      */
});

function loadMainComponent(componentName = null) {
  let componentToLoad = componentName;

  // If no componentName is provided, determine it from the hash or pathname
  if (!componentToLoad) {
    const hash = window.location.hash;
    if (hash === "#categorias") {
      componentToLoad = "categorias";
    } else if (hash === "#mas-vendidos") {
      componentToLoad = "mas-vendidos";
    } else if (hash === "#promociones") {
      componentToLoad = "promociones";
    } else if (hash === "#facturacion") {
      componentToLoad = "facturacion";
    } else if (hash === "#sucursales") {
      componentToLoad = "sucursales";
    } else if (
      window.location.pathname === "/index.html" ||
      window.location.pathname === "/" ||
      window.location.pathname === "/inicio" ||
      window.location.hash === "#inicio" ||
      window.location.hash === ""
    ) {
      componentToLoad = "inicio";
    }
  }

  // Load the component (with error handling)
  if (componentToLoad) {
    // agregamos la clase active al link seleccionado
    $(`[data-component="${componentToLoad}"]`).addClass("active");
    // eliminamos la clase active de los demas links
    $(
      `[data-component]:not([data-component="${componentToLoad}"])`
    ).removeClass("active");
    $("#main").load(
      `./components/${componentToLoad}.html`,
      function (response, status, xhr) {
        if (status === "error") {
          console.error("Error loading component:", xhr.status, xhr.statusText);
          $("#main").text("Failed to load content");
        }
      }
    );
  }
}