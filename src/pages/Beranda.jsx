const Home = {
  section: "transparent dark:bg-gray-900   flex justify-center",
  container: "py-8 px-4 max-w-screen-xl lg:py-16 gap-8 lg:gap-16 text-center w-[700px]",
  heading: "mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-light",
};

const Beranda = () => {
  return (
    <section className={Home.section}>
      <div className={Home.container}>
        <div className='flex flex-col j stify-center'>
          <h1 className={Home.heading}>Temukan. Cari Lomba yang Anda Minati!!</h1>
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
            Temukan lomba-lomba menarik sesuai minat dan bakat Anda. Raih prestasi gemilang dalam passion Anda. Bergabunglah sekarang.
          </p>
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <a
              href='#'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-mainColor hover:bg-hoverMainColor  focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
              Mulai
              <svg className='w-3.5 h-3.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
              </svg>
            </a>
            <a
              href='#'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
              Pelajari
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
