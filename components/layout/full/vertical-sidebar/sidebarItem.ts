import {
  ApertureIcon,
  CopyIcon,
  LayoutDashboardIcon,
  LoginIcon,
  MoodHappyIcon,
  UserPlusIcon,
  UserCircleIcon,
  FirstAidKitIcon,
  HomeIcon,
  UsersIcon
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
  inProduction?: boolean;
  type?: string;
  subCaption?: string;
  groupTitle?: string;
  groupValue?: string;
}

const sidebarItem: menu[] = [
  {
    title: "الصفحة الرئيسية",
    icon: HomeIcon,
    to: "/",
    inProduction:true
  },
  {
    title: "الاطباء",
    icon: FirstAidKitIcon,
    to: "/doctors",
    inProduction:true
  },
  {
    title: "العملاء",
    icon: UsersIcon,
    to: "/customers",
    inProduction:true
  },
  {
    title: "الملفات الطبية",
    icon: UsersIcon,
    to: "/medical-files",
    inProduction:false 
  },
  {
    groupTitle: "ادارة الصلاحيات",
    groupValue: "permissions",
    icon: LayoutDashboardIcon,
    children: [
      {
        title: "المستخدمين",
        icon: LayoutDashboardIcon,
        to: "/permissions/users",
      },
      {
        title: "الموظفين",
        icon: LayoutDashboardIcon,
        to: "/permissions/employees",
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
        to: "/classifications",
      },
      {
        title: "الفئات",
        icon: LayoutDashboardIcon,
        to: "/categories",
      },
    ],
  },
  {
    title: "الاعدادات العامة",
    icon: LayoutDashboardIcon,
    to: "/general-settings",
  },
  {
    title: "التقييمات",
    icon: LayoutDashboardIcon,
    to: "/rates",
  },
  {
    title: "الجلسات",
    icon: LayoutDashboardIcon,
    to: "/consulting-sessions",
  },
  {
    title: "العروض الترويجية",
    icon: LayoutDashboardIcon,
    to: "/promotes",
  },
  {
    title: "اقسام المدونة",
    icon: LayoutDashboardIcon,
    to: "/blog-categories",
  },
  {
    title: "المقالات",
    icon: LayoutDashboardIcon,
    to: "/articles",
  },
  {
    title: "تذاكر الدعم",
    icon: LayoutDashboardIcon,
    to: "/support-tickets",
  },
  {
    title: "المواعيد الحضورية",
    icon: LayoutDashboardIcon,
    to: "/attendance-appointments",
  },
  {
    title: "المعاملات المالية",
    icon: LayoutDashboardIcon,
    to: "/transaction",
  },
  {
    title: "المحافظ",
    icon: LayoutDashboardIcon,
    to: "/wallets",
  },
  {
    title: "Icons",
    icon: MoodHappyIcon,
    to: "/icons",
  },
];

export default sidebarItem;
