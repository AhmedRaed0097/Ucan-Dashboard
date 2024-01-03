import {
  helpers,
  minLength,
  maxLength,
  required,
  email,
  sameAs,
  requiredIf,
  between,
} from '@vuelidate/validators';

export const required$ = helpers.withMessage('هذا الحقل مطلوب', required);
export const requiredImage$ = helpers.withMessage('قم باختيار صورة', required);

export const email$ = helpers.withMessage(
  'صيغة البريد الإلكتروني غير صحيحة',
  email
);
const saudiPhone = helpers.regex(/^5\d+$/);

const passwordRegx = helpers.regex(
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d])[\S]+$/
);

const arabicRegx = helpers.regex(/^[a-zA-Z\ء-ي ]+$/);

const numRegx = helpers.regex(/^[0-9]\d*$/);

const checked = (value) => value === true;

export const password$ = helpers.withMessage(
  'كلمة المرور يجب أن تحتوي على حروف وأرقام ورموز خاصة',
  passwordRegx
);
export const saudiPhone$ = helpers.withMessage(
  'يجب أن يبدأ رقم الهاتف بالرقم 5',
  saudiPhone
);

export const alpha$ = helpers.withMessage(
  'يجب أن لا يحتوي النص على أرقام أو رموز',
  arabicRegx
);
export const digit$ = helpers.withMessage('يجب أن تكون القيمة أرقام', numRegx);

export const notChecked$ = helpers.withMessage(
  'يجب الموافقة على الشروط و الأحكام',
  checked
);

export const requiredIf$ = (value) =>
  helpers.withMessage('هذا الحقل مطلوب', requiredIf(value));

export const maxLength$ = (max) =>
  helpers.withMessage(({ $params }) => {
    if ($params.max == 1 || $params.max == 2) {
      return $params.max == 1
        ? 'يجب أن لا يتجاوز طول النص حرف واحد.'
        : 'يجب أن لا يتجاوز طول النص حرفين.';
    } else if ($params.max >= 3 && $params.max <= 10) {
      return `يجب أن لا يتجاوز طول النص ${$params.max} أحرف.`;
    } else {
      return `يجب أن لا يتجاوز طول النص ${$params.max} حرفاً.`;
    }
  }, maxLength(max));
export const minLength$ = (min) =>
  helpers.withMessage(({ $params }) => {
    if ($params.min == 1 || $params.min == 2) {
      return $params.min == 1
        ? 'يجب أن يكون طول النص على الأقل حرف واحد.'
        : 'يجب أن يكون طول النص على الأقل حرفين.';
    } else if ($params.min >= 3 && $params.min <= 10) {
      return `يجب أن يكون طول النص على الأقل ${$params.min} أحرف.`;
    } else {
      return `يجب أن يكون طول النص على الأقل ${$params.min} حرفاً.`;
    }
  }, minLength(min));

export const maxPhoneLength$ = (max) =>
  helpers.withMessage(
    ({ $params }) => `يجب أن لا يتجاوز طول الرقم ${$params.max} رقماً.`,
    maxLength(max)
  );
export const minPhoneLength$ = (min) =>
  helpers.withMessage(
    ({ $params }) => `يجب أن يكون طول الرقم على الأقل  ${$params.min} أرقام.`,
    minLength(min)
  );

export const sameAs$ = (password) =>
  helpers.withMessage(' كلمة المرور غير متطابقة', sameAs(password));

const notSameAs = (param) =>
  helpers.withParams(
    { type: 'notSameAs', value: param },
    (value) => !helpers.req(value) || value !== param
  );

export const notSameAs$ = (password) =>
  helpers.withMessage(
    'يجب أن لا تتطابق كلمة المرور الجديدة بـ كلمة المرور القديمة',
    notSameAs(password)
  );

export const sameAsEmail$ = (email) =>
  helpers.withMessage('البريد الإلكتروني غير متطابق', sameAs(email));

const avatarSizeCheck = (value) => {
  if (!value) {
    return true;
  }
  const limitFileSize = 2 * 1024 * 1024;
  if (value.size > limitFileSize) {
    return false;
  }
  return true;
};

export const avatarSize$ = helpers.withMessage(
  'يجب أن لا يتجاوز حجم الصورة 2MB',
  avatarSizeCheck
);

const imageSizeCheck = (value) => {
  if (!value) {
    return true;
  }
  const limitFileSize = 1 * 1024 * 1024;
  if (value.size > limitFileSize) {
    return false;
  }
  return true;
};

export const imageSize$ = helpers.withMessage(
  'يجب أن لا يتجاوز حجم الصورة 1MB',
  imageSizeCheck
);

const dimensionsCheck = (_) => {
  //
};

export const imageDimensions$ = helpers.withMessage(
  'أبعاد الصورة يجب أن تكون على الأقل  400*600 ويجب أن لا تتجاوز 1200*1800',
  dimensionsCheck
);

function phoneNumberCheck(phoneNumber) {
  if (phoneNumber.toString().length < 7 || phoneNumber.toString().length > 15) {
    return false;
  }
  return true;
}
const mustBeCool = (value) => !helpers.req(value) || value.includes('cool');

export const phoneNumberCheck$ = (phoneNumber) =>
  helpers.withMessage('كلمة المرور غير متطابقة', mustBeCool(phoneNumber));


export const between$ = (start,limit) =>
  helpers.withMessage('يجب ان تكون القيمة بين 1 - 100', between(start,limit));
