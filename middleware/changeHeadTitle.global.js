export default defineNuxtRouteMiddleware((to, from) => {
  const { setHeadTitle } = useTranslateRoutePath();
  setHeadTitle(to.name);
});
