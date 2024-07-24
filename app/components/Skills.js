import Image from "next/image";

export default function Skills(){
    return(
        <div id="skills" className="bg-gray-100 relative z-10 pb-20">
            <div className="container mx-auto px-6">

                <div className="bg-zinc-700 rounded-md p-8 shadow-lg text-center">
                <h1 className="text-black pb-4 text-2xl font-bold"><span className="text-yellow-500">TECHNOLOGIES</span></h1>
                    <div className="flex justify-around items-center flex-wrap">
                        <div className="py-[21px]">
                            <Image className="hover:scale-125 duration-200"  src="/images/htmllogo.png" alt="" width={100} height={100}/>
                        </div>
                        <div className="py-[22px]">
                            <Image className="hover:scale-125 duration-200" src="/images/csslogo.png" alt="" width={100} height={100}/>
                        </div>
                        <div className="px-[10px] py-[15px]">
                            <Image className="h-[70px] hover:scale-125 duration-200" src="/images/jslogo.png" alt="" width={80} height={100}/>
                        </div>
                        <div className="px-[12.5px] py-[20px]">
                            <Image className="h-[60px] w-[75px] hover:scale-125 duration-200" src="/images/tailwindlogo.png" alt="" width={80} height={100}/>
                        </div>
                        <div className="px-[12.5px] py-[15px]">
                            <Image className="w-[75px] h-[70px] hover:scale-125 duration-200" src="/images/reactlogo.png" alt="" width={100} height={100}/>
                        </div>
                        <div className="px-[15px] py-[18px]">
                            <Image className="h-[63px] w-[70px] hover:scale-125 duration-200" src="/images/reduxlogo.png" alt="" width={100} height={100}/>
                        </div>
                        <div className="py-[5px]">
                            <Image className="h-[90px] hover:scale-125 duration-200" src="/images/nextlogo.png" alt="" width={100} height={100}/>
                        </div>
                        <div className="px-[10px] py-[5]">
                            <Image className="h-[100px] w-[80px] hover:scale-125 duration-200" src="/images/expresslogo.png" alt="" width={100} height={100}/>
                        </div>
                        <div className="py-[10px]">
                            <Image className="h-[80px] w-[100px] hover:scale-125 duration-200" src="/images/mongodblogo.png" alt="" width={100} height={100}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}