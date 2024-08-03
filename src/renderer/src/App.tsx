// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import { TextField } from '@mui/material'
import './assets/login.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Correo electrónico inválido')
      .required('El correo electrónico es requerido'),
    password: yup
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(60, 'La contraseña no debe exceder los 20 caracteres')
      .required()
  })
  .required()

export default function App(): JSX.Element {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })
  return (
    <>
      <div className="main__content">
        <div className="login">
          <div className="logo">
            {/* <image
              src=""
              alt=""
            /> */}

            <h1>Bienvenid@</h1>
            <p>Por favor, ingresa tu correo electrónico y contraseña para continuar</p>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <TextField
              label="Correo electrónico"
              id="outlined-size-small"
              size="small"
              sx={{
                width: '100%'
              }}
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              FormHelperTextProps={{
                sx: { fontSize: '.8rem', lineHeight: '14px' }
              }}
              InputLabelProps={{
                sx: {
                  '&.MuiInputLabel-shrink': { color: '#259780' }
                }
              }}
              InputProps={{
                sx: {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#259780'
                  }
                }
              }}
            />

            <TextField
              label="Contraseña"
              id="outlined-size-small"
              size="small"
              sx={{ width: '100%' }}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              FormHelperTextProps={{
                sx: { fontSize: '.8rem', lineHeight: '13px' }
              }}
              InputLabelProps={{
                sx: {
                  '&.MuiInputLabel-shrink': { color: '#259780' }
                }
              }}
              InputProps={{
                sx: {
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#259780'
                  }
                }
              }}
            />

            <a href="/dashboard">
              <button className="button" type="submit">
                Iniciar sesión
              </button>
            </a>
          </form>
        </div>
      </div>
    </>
  )
}
