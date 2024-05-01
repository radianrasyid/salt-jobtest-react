import SignInForm from "./pages/SignIn/SignInForm";

export default function Home() {
  return (
    <main className="flex min-h-screen max-sm:items-center">
      <div className="basis-8/12 bg-primary grow flex items-center justify-center max-sm:sr-only min-h-full">
        <div className="flex items-start justify-start w-[46.6rem] h-[38.3rem] bg-white bg-opacity-50 flex-col pl-[5.5rem] pt-[8.625rem]">
          <div className="w-[19.4rem] h-[13.9rem]">
            <h1 className="font-semibold text-white text-5xl leading-[57.6px]">
              Lorem ipsum dolor si amet{" "}
              <span className="text-secondary leading-[48px]">consectetur</span>
            </h1>
          </div>
          <div className="w-[21.6rem]">
            <p className="text-secondary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="basis-5/12 bg-white shrink flex items-center justify-center max-sm:flex-1 max-sm:pt-8 px-8 min-h-screen">
        <div>
          <h1 className="font-bold text-3xl leading-[48px] text-secondary">
            Hello
          </h1>
          <p className="text-secondary font-normal text-lg leading-[1.688rem] mb-12">
            Enter your email and password to login.
          </p>
          <h2 className="hidden max-sm:block text-secondary font-semibold text-2xl leading-[1.5rem] mb-6">
            Login
          </h2>
          <SignInForm />
        </div>
      </div>
    </main>
  );
}
