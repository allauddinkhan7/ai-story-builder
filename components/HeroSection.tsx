import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className='px-10 md:px-28 lg:px-44 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <h2 className='text-[70px] text-primary font-extrabold'>Craft Beautiful Stories, Even When the World is Asleep</h2>
          <p className="mt-8 italic text-lg"> 
            The AI story engine that matches your midnight flow. Start creating your masterpiece now.
          </p>
          <Link href="/create-story">
          <Button className="bg-linear-to-r from-purple-900 to-purple-600 . text-white text-md w-44 cursor-pointer" >Create Story</Button>
          </Link>
        </div>
        <div>
          <Image src={'/hero_section_pic.png'} alt='hero' width={600} height={300} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection