import { BaseInput } from './BaseInput'

export function BaseRegister({
  handleSubmit,
  handleConfirmChange,
  handleEmailChange,
  handlePasswordChange,
  handleUsernameChange,
  email,
  password,
  confirmPassword,
  username,
  message,
  error,
}) {
  return (
    <form
      className="w-full flex flex-col"
      onSubmit={handleSubmit}
    >

      <div className="flex flex-col p-10 gap-5 rounded-md">
        <BaseInput
          type="text"
          name="username"
          label="Nome de usuário"
          value={username}
          onChange={handleUsernameChange}
        />

        <BaseInput
          type="text"
          name="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />

        <BaseInput
          type="password"
          name="password"
          label="Senha"
          value={password}
          onChange={handlePasswordChange}
        />

        <BaseInput
          type="password"
          name="password"
          label="Confirme sua Senha"
          value={confirmPassword}
          onChange={handleConfirmChange}
        />
      </div>

      <div className="flex justify-center px-10">
        <button
          className="bg-purple-800 hover:bg-purple-700 active:bg-purple-900 py-2 px-10 w-full rounded-md text-xl"
          type="submit"
        >
          Enviar
        </button>
      </div>

      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

    </form>
  )
}
