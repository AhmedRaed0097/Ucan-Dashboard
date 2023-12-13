export default defineNuxtRouteMiddleware((to, from) => {
    // Check if the route path has changed (prevents unnecessary scrolling)
    if (to.path !== from.path && process.client) {
      // Use window.scrollTo to scroll the page to the top (0, 0)
      window.scrollTo(0, 0);
    }
  });
  