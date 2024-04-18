import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  //tıklandığında values gönderilen değerleri, actions metodları tutar.
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000); // 1 saniye boyunca tıklanamıyor oalcak.
  });
  actions.resetForm(); // actions içindeki form temizleme metodu.1 sn sonra calıscak
};
function GeneralForm() {
  // useFormik kullanılarak bir değişkene atanır ve değişikenİsmi.values.özellik şeklinde ulaşılır.
  //   kullanmak istediklerimizi belirleyip destructuring yaparak daha kolay erişebiliriz.
  // isSubmitting işlem tamamlanana kadar butona basılmamasını sağlar
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* handleSubmit formikteki onSubmite karışılık gelir. */}
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Mail adresinizi giriniz"
            className={errors.email ? "input-error" : ""}
          />
          {/* emailde hata varsa inputa input-error classını ekle */}
          {errors.email && <p className="error">{errors.email}</p>}
          {/* emailde hata varsa hatayı bas */}
        </div>

        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            id="age"
            placeholder="Yaşınızı giriniz"
            className={errors.age ? "input-error" : ""}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="Şifrenizi giriniz"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="inputDiv">
          <label>Şifre Tekrar</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz"
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <button disabled={isSubmitting} type="submit">
          {/* isSubmitting true olduğu sürece button görünmeyecek */}
          Kaydet
        </button>

        <Link className="formLink" to={"/portal"}>
          Portala Git
        </Link>
      </form>
    </>
  );
}

export default GeneralForm;
