export default function Home() {
  return (
    <>
      <div id="home" className="h-full grid place-items-center">
        <div className="flex">
          <div className="text-white flex flex-col justify-center">
            <p>Hi, there! I am</p>
            <h1 id="name" className="text-7xl uppercase font-bold">Buliga Iosif-Ioan</h1>
            <p className="text-2xl">I'm a front-end web developer and <br/>I love creating beautiful and functional websites!</p>
          </div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width='400' height='400'/>
        </div>
      </div>
   </>
  )
}

