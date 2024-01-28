import * as yup from "yup";

import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // yup schema

  const userSchema = yup.object().shape({
    // name can not be an empty string
    firstName: yup.string().required("First name cannot be empty"),
    lastName: yup.string().required("Last name cannot be empty"),
    // email
    email: yup.string().email().required("Looks like this is not an email"),
    // password
    password: yup.string().min(8).required("Please provide a valid password"),
  });

  // Function which will validate the input data whenever submit button is clicked.

  async function validateForm(e) {
    e.preventDefault();

    // creating a form data object

    let dataObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    // validate

    const isValid = await userSchema.isValid(dataObject);

    if (isValid) {
      alert("Successfully Sign Up");
    } else {
      alert(isValid);
    }
  }

  return (
    <form
      onSubmit={validateForm}
      className=" bg-white rounded-xl p-6 py-10 flex flex-col gap-5 box mb-14 sm:mb-0 "
    >
      <input
        type="text"
        className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlu focus:border-accentBlue focus:outline-none focus:ring-0"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="border  p-4 rounded-lg  border-neutralGrayishBlue font-semibold text-neutralDarkBlue focus:border-accentBlue focus:outline-none focus:ring-0"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlue focus:border-accentBlue focus:outline-none focus:ring-0"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-4 rounded-lg border-neutralGrayishBlue font-semibold text-neutralDarkBlue focus:border-accentBlue focus:outline-none focus:ring-0"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="p-4 bg-primaryGreen rounded-lg text-white font buttonshadow">
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="text-xs text-neutralGrayishBlue font-medium text-center">
        By clicking the button, you are agreeing to our{" "}
        <span className="font-bold text-primaryRed">Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
