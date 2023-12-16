import useValidate from '@vuelidate/core';

export default function useCustomVulidate (rules, form, errors, scope) {
  const v$ = useValidate(rules, form, {
    $stopPropagation: true,
    $lazy: false,
    $autoDirty: false,
    $externalResults: errors,
    $scope: scope,
  });
  return { v$ };
}
