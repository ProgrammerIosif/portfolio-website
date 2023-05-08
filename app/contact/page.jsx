import Form from "./Form"

export default function Contact() {
  return (
    <div id="contact" className="h-[100vh] text-primary grid place-items-center max-w-[1400px] px-4 xl:px-8 overflow-scroll pt-5 md:max-lg:pb-20 w-full">
      <div className="grid gap-8 2xl:gap-20 pb-24 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl 2xl:text-7xl font-semibold uppercase text-accent">contact</h1>
          <a href='mailto:iosifioan.buliga@gmail.com' className="group flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" version="1.1" viewBox="0 0 29 29" className='w-8 xs:w-12 group-hover:-translate-y-1 transition-all group-hover:animate-pulse'>
              <g fill="#38bdf8"><path d="M2 7.42v14.172l7.086-7.086zM3.408 6l8.971 8.971c1.133 1.133 3.109 1.133 4.242 0L25.592 6H3.408z"></path><path d="M18.035 16.385c-.943.944-2.199 1.465-3.535 1.465s-2.592-.521-3.535-1.465l-.465-.465L3.42 23h22.16l-7.08-7.08-.465.465zM19.914 14.506L27 21.592V7.42z"></path></g>
            </svg>
            <p className="text-xl xs:text-2xl 2xl:text-4xl group-hover:text-accent">iosifioan.buliga@gmail.com</p>
          </a>
          <a href='https://www.linkedin.com/in/iosif-ioan-buliga' target='_blank' className="group flex gap-3 items-center">
            <svg viewBox="0 0 128 128" className='w-8 xs:w-12 group-hover:-translate-y-1 transition-all group-hover:animate-pulse'>
              <g fill="#38bdf8"><path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path></g>
            </svg>
            <p className="text-xl xs:text-2xl 2xl:text-4xl group-hover:text-accent">Iosif-Ioan Buliga</p>
          </a>
        </div>
        <Form />
      </div>
    </div>
  )
}
