import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", contraseña: "", confirmar: "" },
    onSubmit: (data) => {
      console.log("submitted");
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("This field is required")
        .min(5, "Minimum 5 characters")
        .max(15, "Maximum 15 characters"),
      email: Yup.string()
        .email("Email must contain @")
        .required("This field is required"),
      contraseña: Yup.string()
        .required("This field is required")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "It must include an uppercase letter, a lowercase letter, a number, and a special character"
        ),
      confirmar: Yup.string()
        .required("This field is required")
        .oneOf([Yup.ref("contraseña")], "Passwords do not match"),
    }),
    validateOnChange: false,
  });

  console.log(errors);
  console.log(errors.nombre);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />

      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="text"
        label="contraseña"
        name="contraseña"
        onChange={handleChange}
        error={errors.contraseña ? true : false}
        helperText={errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="text"
        label="confirmar"
        onChange={handleChange}
        name="confirmar"
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />
      {values.nombre === "delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Direccion"
          onChange={handleChange}
          name="confirmar"
        />
      )}
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
};

export default CheckoutFormik;
