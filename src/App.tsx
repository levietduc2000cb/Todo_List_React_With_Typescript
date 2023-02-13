import PostPage from "page/PostPage";

function App() {
  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  };

  return (
    <div className="container bg-white px-8 dark:bg-black">
      <div className="relative flex justify-center">
        <h1 className="flex items-center text-3xl font-extrabold dark:text-white md:text-5xl">
          Todo
          <span className="mr-2 ml-2 rounded bg-blue-100 px-2.5 py-0.5 text-lg font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 md:text-2xl">
            PRO
          </span>
        </h1>
        <div className="absolute right-0 top-2 md:top-1/2 md:right-5">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={handleChangeTheme}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
          </label>
        </div>
      </div>
      <PostPage />
    </div>
  );
}

export default App;
