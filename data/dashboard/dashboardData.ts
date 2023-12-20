import type { recentTrans, productPerformanceType, productsCards } from '@/types/dashboard/index';

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
    {
        title: '09:30 am',
        subtitle: 'Payment received from John Doe of $385.90',
        textcolor: 'primary',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '10:00 am',
        subtitle: 'New sale recorded',
        textcolor: 'secondary',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Payment was made of $64.95 to Michael',
        textcolor: 'success',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'New sale recorded',
        textcolor: 'warning',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'New arrival recorded',
        textcolor: 'error',
        boldtext: true,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Payment Received',
        textcolor: 'success',
        boldtext: false,
        line: false,
        link: '',
        url: ''
    },
]

/*Basic Table 1*/
const productPerformance: productPerformanceType[] =
[
    {
      "id": 1,
      "name": "سونيل جوشي",
      "post": "مصمم مواقع إلكترونية",
      "pname": "مدير النخبة",
      "status": "منخفضة",
      "statuscolor": "primary",
      "budget": "3.9 دولار"
    },
    {
      "id": 2,
      "name": "أندرو ماك داونلاند",
      "post": "مدير مشروع",
      "pname": "ثيم Real Homes WP",
      "status": "متوسطة",
      "statuscolor": "secondary",
      "budget": "24.5 ألف دولار"
    },
    {
      "id": 3,
      "name": "كريستوفر جيميل",
      "post": "مدير مشروع",
      "pname": "ثيم MedicalPro WP",
      "status": "مرتفعة",
      "statuscolor": "error",
      "budget": "12.8 ألف دولار"
    },
    {
      "id": 4,
      "name": "نيراف جوشي",
      "post": "مهندس واجهة أمامية",
      "pname": "Hosting Press HTML",
      "status": "حرجة",
      "statuscolor": "success",
      "budget": "2.4 ألف دولار"
    }
  ];

/*--Products Cards--*/
import proimg1 from '/images/products/s4.jpg';
import proimg2 from '/images/products/s5.jpg';
import proimg3 from '/images/products/s7.jpg';
import proimg4 from '/images/products/s11.jpg';
const productsCard: productsCards[] = [
    {
        title: 'Boat Headphone',
        link: '/',
        photo: proimg1,
        salesPrice: 375,
        price: 285,
        rating: 4
    },
    {
        title: 'MacBook Air Pro',
        link: '/',
        photo: proimg2,
        salesPrice: 650,
        price: 900,
        rating: 5
    },
    {
        title: 'Red Valvet Dress',
        link: '/',
        photo: proimg3,
        salesPrice: 150,
        price: 200,
        rating: 3
    },
    {
        title: 'Cute Soft Teddybear',
        link: '/',
        photo: proimg4,
        salesPrice: 285,
        price: 345,
        rating: 2
    }
];


export { recentTransaction, productPerformance, productsCard }