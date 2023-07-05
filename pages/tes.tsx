import Header from "@/components/header";
import Image from "next/image";

export default function Tes() {
  return (
    <div className="flex  min-h-screen bg-slate-200 content-center justify-center">
      <div className="max-w-screen-sm w-full min-h-screen  ">
        <div className="min-w-full min-h-screen  w-full bg-slate-100">
          <Header />
          <div className="flex bg-blue-300 min-h-screen justify-center items-end">
            <div className="  ">
              <div className="w-[337px]  text-white mb-28">
                <h1 className="text-4xl">
                  Discover <br /> Your Wonder
                </h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </h2>
              </div>
            </div>
            {/* <Image
              src="/Background.svg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              // height={32}
              // width={32}
              alt="Follow us on Twitter"
            /> */}
          </div>
          <div className="flex-col bg-white  justify-center items-end px-8 py-8">
            <div>
              <h3 className="text-[#029FE4] font-medium text-4xl  py-4">
                Who we are
              </h3>
            </div>
            <div className="mb-8">
              <p className="font-bold text-xl py-2">Technology Company</p>
              <p className="text-base text-[#777777] py-1">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="flex justify-between content-center">
              <div>
                <span className="font-medium text-2xl text-[#303030]">01</span>
                <span className="font-medium text-2xl text-[#C0C0C0]">/</span>
                <span className="font-medium text-1xl text-[#C0C0C0]">03</span>
              </div>
              <div className="inline-flex">
                <button className="bg-[#F1F1F1] hover:bg-gray-400 text-[#B6B6B6] font-bold py-2 px-4 rounded-l">
                  Prev
                </button>
                <button className="bg-[#1BA0E1] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-r">
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className="flex-col min-h-screen justify-center px-8 my-4">
            <div>
              <h3 className="text-[#029FE4] font-medium text-4xl  py-4">
                Our Core Values
              </h3>
            </div>
            <div className="mb-8">
              <p className="text-base text-[#777777] py-1">
                Ridiculus laoreet libero pretium et, sit vel elementum convallis
                fames. Sit suspendisse etiam eget egestas. Aliquet odio et
                lectus etiam sit.
                <br />
                <br />
                In mauris rutrum ac ut volutpat, ornare nibh diam. Montes,
                vitae, nec amet enim.
              </p>
            </div>
            <div>
              <div className="flex my-4">
                <div className="text-[#747474] text-2xl">-</div>
                <div>
                  <p className="text-2xl font-normal">Dedication</p>
                  <p className="text-[#777777] mt-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat.
                  </p>
                </div>
              </div>
              <div className="flex my-4">
                <div className="text-[#747474] text-2xl">-</div>
                <div>
                  <p className="text-2xl font-normal">Intellectual Honesty</p>
                  <p className="text-[#777777] mt-4">
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias conse.
                  </p>
                </div>
              </div>
              <div className="flex my-4">
                <div className="text-[#747474] text-2xl">-</div>
                <div>
                  <p className="text-2xl font-normal">Curiosity</p>
                  <p className="text-[#777777] mt-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque.
                  </p>
                </div>
              </div>
              <div className="w-11 h-20">
                {/* <Image
                  alt="dvg"
                  src="/ilus.svg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                /> */}
              </div>
            </div>
          </div>
          <div className="flex bg-[#509FDD] justify-center ">
            <div className="bg-white w-5/6 my-6 p-8">
              <div>
                <h3 className="font-bold text-2xl text-[#029FE4]">
                  OUR SPECIALITY
                </h3>
                <p className="text-sm font-light text-[#303030] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
              <div className="h-64 bg-slate-400 mt-4">image</div>
              <div>
                <p className="text-sm font-light text-[#A7A7A7] mt-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod libero vel leo auctor, in venenatis nulla consequat.
                  Sed commodo nunc sit amet congue aliquam.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col bg-blue-800 justify-center ">
            <div className="h-28">icon company</div>
            <div className="bg-white w-5/6 mx-auto px-4 py-8">
              <div>TECHNOLOGY DEPARTMENT</div>
              <div className="w-2/3">
                <p className="text-[#25A0D8] text-lg font-normal">
                  Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung,
                  Jawa Barat
                </p>
              </div>
            </div>
            <div className="mt-8">
              <ul>
                <li>Who We Are</li>
                <li>Our Values</li>
                <li>The Perks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <></>
    </div>
  );
}
