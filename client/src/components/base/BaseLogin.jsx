import { BaseInput } from './BaseInput'

export function BaseLogin({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  message,
  error,
}) {
  return (
    <form
      className="w-full flex flex-col"
      onSubmit={handleSubmit}
    >

      <div className="flex flex-col p-5 sm:p-10 gap-5 rounded-md">
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
      </div>

      <div className="flex justify-center px-10">
        <button
          className="bg-purple-800 hover:bg-purple-700 active:bg-purple-900 py-2 px-10 w-full rounded-md text-xl"
          type="submit"
        >
          Entrar
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
