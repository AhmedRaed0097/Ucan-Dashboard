import {
  ApertureIcon,
  CopyIcon,
  LayoutDashboardIcon,
  LoginIcon,
  MoodHappyIcon,
  TypographyIcon,
  UserPlusIcon,
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  groupTitle?: string;
  groupValue?: string;
}

const sidebarItem: menu[] = [
  {
    title: "الصفحة الرئيسية",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  {
    title: "الاطباء",
    icon: LayoutDashboardIcon,
    to: "/doctors",
  },
  {
    title: "العملاء",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    groupTitle: "ادارة الصلاحيات",
    groupValue: "permissions",
    icon: LayoutDashboardIcon,
    children: [
      {
        title: "المستخدمين",
        icon: LayoutDashboardIcon,
        to: "/customers",
      },
      {
        title: "المستخدمين",
        icon: LayoutDashboardIcon,
        to: "/customers",
      },
    ],
  },
  {
    groupTitle: "ادارة القوائم",
    groupValue: "listManagement",
    icon: LayoutDashboardIcon,
    children: [
      {
        title: "المؤهلات العلمية",
        icon: LayoutDashboardIcon,
        to: "/qualifications",
      },
      {
        title: "التخصصات",
        icon: LayoutDashboardIcon,
        to: "/specialties",
      },
      {
        title: "المسميات المهنية",
        icon: LayoutDashboardIcon,
        to: "/professional-titles",
      },
      {
        title: "التصنيفات",
        icon: LayoutDashboardIcon,
        to: "/customers",
      },
      {
        title: "الفئات",
        icon: LayoutDashboardIcon,
        to: "/customers",
      },
    ],
  },
  {
    title: "الاعدادات العامة",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "التقييمات",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "الجلسات",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "العروض الترويجية",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "اقسام المدونة",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "المقالات",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "تذاكر الدعم",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "المواعيد الحضورية",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "المعاملات المالية",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },
  {
    title: "المحافظ",
    icon: LayoutDashboardIcon,
    to: "/customers",
  },

  {
    title: "Typography",
    icon: TypographyIcon,
    to: "/ui/typography",
  },
  {
    title: "Shadow",
    icon: CopyIcon,
    to: "/ui/shadow",
  },
  {
    title: "Login",
    icon: LoginIcon,
    to: "/auth/login",
  },
  {
    title: "Register",
    icon: UserPlusIcon,
    to: "/auth/register",
  },
  {
    title: "Icons",
    icon: MoodHappyIcon,
    to: "/icons",
  },
  {
    title: "Sample Page",
    icon: ApertureIcon,
    to: "/sample-page",
  },
];

export default sidebarItem;
