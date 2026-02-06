import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-200 m-auto p-5">
      {/* <div className="bg-green-900/100 p-5 flex align-middle">
        <Image src={"/logo.svg"} width={60} height={60} alt={""}>

        </Image>
      </div> */}
      <div className="flex justify-center items-center h-200">
        <div className="h-fit">
          <h1>SANA</h1>
        </div>
      </div>
    </div>
  )
}
