export default defineNuxtRouteMiddleware((to) => {
  const { setHeadTitle } = useTranslateRoutePath();
  setHeadTitle(to.name);
});
