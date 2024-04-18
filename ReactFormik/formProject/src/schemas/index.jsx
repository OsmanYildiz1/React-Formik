import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  //isim  yup.tür(string,number vs).
  //format tipi(email, password, number vs. Parantez içine hata mesajı yazılır.)
  // requirez girilmesi zorunlu alanlar için kullanılır. Parantez içine hara mesajı girilir.
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur."),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz") //pozitif sayı metodu
    .integer("Lütfen yaşınızıtam sayı olarak giriniz") // tam sayı metodu
    .required("Yaş girmek zorunludur."),

  password: yup
    .string()
    .min(5, "Lütfen en az 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şifre girmek zorunludur."),
  //min 5 karakter olmalı. matches regExp formatını kullanır kuralları belirtir.
  // içerisine kuralı atadığımız değişken ve hatayı {message: '' }içerisine yazdırırız
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur."),
  //oneOf yuptan passwordu referans alıp karsılaştırır. eşleşmiyorsa hata verir.
});

export const advancedSchema = yup.object().shape({
  //isim  yup.tür(string,number vs).
  //format tipi(email, password, number vs. Parantez içine hata mesajı yazılır.)
  // requirez girilmesi zorunlu alanlar için kullanılır. Parantez içine hara mesajı girilir.
  username: yup
    .string()
    .min(3, "Kullanıcı adi minimum 3 karakter uzunluğunda olmalıdır.")
    .required("Kullanıcı adı zorunludur."),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçiniz.")
    .required("Lütfen üniversitenizi seçiniz"),

  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz."),
});
