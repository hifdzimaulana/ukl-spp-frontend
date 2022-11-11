function LoginPage() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="w-[30rem] bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
        <form>
          <div className="mx-auto mb-2 flex items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/90/000000/money-transfer.png"
              width={40}
              height={40}
            />
            <h1 className="text-black font-bold">EDUsys</h1>
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">
              Please insert your password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
