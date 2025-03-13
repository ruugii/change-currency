import ChangeCurrency from "./components/ChangeCurrency/index";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div />
      <ChangeCurrency />
      <footer className=" flex w-full content-center justify-center items-center gap-4">
        <p className=" flex gap-2.5">
          Created by <a href="https://github.com/ruugii" className=" flex content-center justify-center items-center gap-2.5 hover:underline">Roger Barrero</a>
        </p>
        <p className=" flex gap-2.5">
          <a href="https://github.com/ruugii/change-currency" className=" flex content-center justify-center items-center gap-2.5 hover:underline">
            Github repository <img src="/github-logo.svg" alt="github logo" width="20px" />
          </a>
        </p>
      </footer>
    </div>
  );
}
