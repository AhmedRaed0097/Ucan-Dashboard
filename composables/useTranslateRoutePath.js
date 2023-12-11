import { useRoute } from 'vue-router';

export default function useTranslateRoutePath() {
  const route = useRoute();

  const translatedRoute = ref(null);
  const translatePath = (path) => {
    const words = path;
    if (words.length) {
      switch (words) {
        case 'index':
          return 'الرئيسية';
        case 'dashboards':
          return 'لوحات التحكم';
        case 'doctors':
          return 'الاطباء';
        case 'customers':
          return 'العملاء';
        case 'permissions-users':
          return 'صلاحيات المستخدمين';
        case 'permissions-employees':
          return 'صلاحيات الموظفين';
        case 'qualifications':
          return 'المؤهلات العلمية';
        case 'specialties':
          return 'التخصصات';
        case 'professional-titles':
          return 'المسميات المهنية';
        case 'classifications':
          return 'التصنيفات';
        case 'categories':
          return 'الفئات';
        case 'general-settings':
          return 'الإعدادات العامة';
        case 'rates':
          return 'التقييمات';
        case 'consulting-sessions':
          return 'الجلسات';
        case 'promotes':
          return 'العروض الترويجية';
        case 'blog-categories':
          return 'اقسام المدونة';
        case 'articles':
          return 'المقالات';
        case 'support-tickets':
          return 'تذاكر الدعم';
        case 'attendance-appointments':
          return 'المواعيد الحضورية';
        case 'transaction':
          return 'المعاملات المالية';
        case 'wallets':
          return 'المحافظ';
        case 'auth-Login':
          return 'تسجيل الدخول';
        default:
          return words;
      }
    } else {
      return 'الرئيسية';
    }
  };

  const setHeadTitle = (routePath) => {
    translatedRoute.value = translatePath(routePath);
    useHead({
      meta: [{ content: translatedRoute.value }],
      titleTemplate: () => {
        return `Ucan - ${translatedRoute.value}`;
      },
    });
  };

  translatedRoute.value = translatePath(route.name);

  watch(route, (newRoute) => {
    // Do something with the new value
    translatedRoute.value = translatePath(newRoute.name);
  });

  return {
    translatedRoute,
    setHeadTitle,
  };
}
