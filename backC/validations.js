import {body} from "express-validator";
export const registerValidation = [
    body("email","Неправильний формат пошти").isEmail(),
    body("password","Неправильний формат паролю").isLength({min:5}),
    body("fullName","Неправильний формат імені").isLength({min:3}),
    body("AvatarUrl","Неправильний формат ссилки").optional().isURL()
]
export const loginValidation = [
    body("email","Неправильний формат пошти").isEmail(),
    body("password","Неправильний формат паролю").isLength({min:5})
]
export const createPostsValidation = [
  body("firstLoan", "Введено невірний формат даних").isFloat({ gt: 0 }).withMessage('Повинно бути числом більше 0'),
  body("annualRate", "Введено невірний формат даних").isFloat({ gt: 0 }).withMessage('Повинно бути числом більше 0'),
  body("forTheTerm", "Введено невірний формат даних").isFloat({ gt: 0 }).withMessage('Повинно бути числом більше 0'),
  body("realRateMin", "Введено невірний формат даних").isFloat({ gt: 0 }).withMessage('Повинно бути числом більше 0'),
  body("realRateMax", "Введено невірний формат даних").isFloat({ gt: 0 }).withMessage('Повинно бути числом більше 0'),
  body("category", "Введено невірний формат даних").isLength({ min: 3 }).isString().withMessage('Повинно бути строкою мінімум з 3 символів'),
  body("imgmain", "Введено невірний формат даних").isString().withMessage('Повинно бути строкою'),
  body("site", "Введено невірний формат даних").isString().withMessage('Повинно бути строкою'),
  // body("imgsecond", "Введено невірний формат даних").isString().withMessage('Повинно бути строкою'),
  // body("imgthird", "Введено невірний формат даних").isString().withMessage('Повинно бути строкою'),
  // body("imagesSlider")
  //     .isArray().withMessage('Масив фотографій повинен бути масивом')
  //     .notEmpty().withMessage('Масив фотографій не повинен бути порожнім')
  //     .custom((value, { req }) => {
  //         if (!value.every(item => typeof item === 'string')) {
  //             throw new Error('Масив фотографій повинен містити тільки стрічки');
  //         }
  //         return true;
  //     }),
];
    // body("imgsecond","Введено невірний формат даних").isString(),
    // body("imgthird","Введено невірний формат даних").isString(),
