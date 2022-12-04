
import React, { useState } from "react";
import {
  AlternateEmail,
  LockOpen,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { styles } from "./styles";
import { signIn } from "../../services/authService";
import { setItem } from '../../utils/localStorageHelper';
import { useContext } from "react";
import { AlertContext } from "../../context/alertContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setAlert } = useContext(AlertContext)
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data) => {
    const { email, password } = data;

    const { status, message, payload } = await signIn(email, password);

    if (status === 200) {
      setItem('token', payload.token);
      setItem('user', payload.user);
      reset();
      setAlert({
        durationInMs: 2000,
        severity: 'success',
        message
      })
      navigate('/home')
    }
    else {
      setAlert({
        durationInMs: 3000,
        severity: 'error',
        message
      })
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      className={styles.formContainer}
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={styles.formContainer}
    >
      <FormControl sx={styles.formControl}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              inputRef={ref}
              type="email"
              label="Email"
              error={!!errors.email}
              helperText={errors?.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmail />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </FormControl>
      <FormControl sx={styles.formControl}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Password is required",
            },
          }}
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              label="Password"
              inputRef={ref}
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={errors?.password?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpen />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </FormControl>
      <Button sx={styles.submitBtn} type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;