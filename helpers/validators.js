import {
  helpers,
  minLength,
  maxLength,
  required,
  email,
  sameAs,
  requiredIf,
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

export const password$ = helpers.withMessage(
  'كلمة المرور يجب أن تحتوي على حروف وأرقام ورموز خاصة',
  passwordRegx
);
export const saudiPhone$ = helpers.withMessage(
  'يجب ان يبدأ رقم الهاتف بالرقم 5',
  saudiPhone
);

export const alpha$ = helpers.withMessage(
  'يجب أن لا يحتوي النص على ارقام أو رموز',
  arabicRegx
);
export const num$ = helpers.withMessage('يجب أن تكون القيمة أرقام', numRegx);

export const digit$ = helpers.withMessage('يجب أن تكون القيمة أرقام', numRegx);

export const requiredIf$ = (value) =>
  helpers.withMessage('هذا الحقل مطلوب', requiredIf(value));

export const maxLength$ = (max) =>
  helpers.withMessage(
    ({ $params }) => `يجب أن لا يتجاوز طول النص  ${$params.max} حرفاً`,
    maxLength(max)
  );
export const minLength$ = (min) =>
  helpers.withMessage(
    ({ $params }) => `يجب أن يكون طول النص على الأقل  ${$params.min} أحرف`,
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
    'يجب أن لا تتطابق كلمة المرور الجديدة مع كلمة المرور القديمة',
    notSameAs(password)
  );

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
  'يحب ان لايتجاوز جحم الصورة 2MB',
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
  'يحب ان لايتجاوز جحم الصورة 1MB',
  imageSizeCheck
);

const dimensionsCheck = (_) => {
  //
};

export const imageDimensions$ = helpers.withMessage(
  'أبعاد الصورة يجب أن تكون على الأقل 400 *600 ويجب أن لا تتجاوز 1200*1800',
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
  helpers.withMessage(' كلمة المرور غير متطابقة', mustBeCool(phoneNumber));
