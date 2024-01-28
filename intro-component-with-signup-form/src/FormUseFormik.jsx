import * as yup from "yup";
import { useFormik } from "formik";


const Form = () => {
    const userSchema = yup.object().shape({
        // name can not be an empty string
        firstName: yup.string().required("First name cannot be empty"),
        lastName: yup.string().required("Last name cannot be empty"),
        // email
        email: yup.string().email().required("Looks like this is not an email"),
        // password
        password: yup.string().min(8).required("Please provide a valid password"),
    });

    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
          alert(values);
        },
      });

    

  return (
    <form className=" bg-white rounded-xl p-6 py-10 flex flex-col gap-4 box mb-14 sm:mb-0 " onSubmit={formik.handleSubmit}>
    <input
      type="text"
      className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlu focus:border-accentBlue focus:outline-none focus:ring-0"
      name="firstName"
      id="firstName"
      placeholder="First Name"
      onChange={formik.handleChange}
      value={formik.values.firstName}
    />
    {formik.errors.firstName ? (
      <div className="text-primaryRed text-xs italic  text-right gap-">{formik.errors.firstName}</div>
      
    ) : null}

    <input
      type="text"
      className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlu focus:border-accentBlue focus:outline-none focus:ring-0"
      name="lastName"
      id="lastName"
      placeholder="Last Name"
      onChange={formik.handleChange}
      value={formik.values.lastName}
    />
    {formik.errors.lastName ? (
      <div className="text-primaryRed text-xs italic  text-right gap-">{formik.errors.lastName}</div>
    ) : null}

    <input
      type="email"
      className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlu focus:border-accentBlue focus:outline-none focus:ring-0"
      name="email"
      id="email"
      placeholder="Email Address"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    {formik.errors.email ? (
      <div className="text-primaryRed text-xs italic  text-right gap-0">{formik.errors.email}</div>
    ) : null}

    <input
      type="password"
      className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlu focus:border-accentBlue focus:outline-none focus:ring-0"
      name="password"
      id="password"
      placeholder="Password"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
    {formik.errors.password ? (
      <div className="text-primaryRed text-xs italic  text-right gap-">{formik.errors.password}</div>
    ) : null}

    <button className="p-4 bg-primaryGreen rounded-lg text-white font buttonshadow hover:bg-[#73f4bc] hover:border-[#33c083]"  type="submit">CLAIM YOUR FREE TRAIL</button>

    <p className="text-xs text-neutralGrayishBlue font-medium text-center">
        By clicking the button, you are agreeing to our{" "}
        <span className="font-bold text-primaryRed">Terms and Services</span>
      </p>
  </form>
   
  );
};

export default Form;