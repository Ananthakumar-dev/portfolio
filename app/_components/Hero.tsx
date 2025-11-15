import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import Image from "next/image";
import profile_img from "@/public/images/profile-img.png";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl h-screen text-center mx-auto flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={profile_img}
          alt="hero image"
          className="w-32 rounded-full"
        />
      </div>

      <h3 className="text-xl lg:text-3xl">Hi i'm Ananthakumar</h3>

        <h1 className="text-3xl md:text-6xl lg:text-7xl">
          Software developer in India
        </h1>

        <p>
          I am a Software developer from Madurai, Tamilnadu, India with 4+ years
          of experience.
        </p>

        <div>
          <Button className="cursor-pointer">
            Contact me
            <MoveRight className="relative top-0.5" />
          </Button>

          <Button variant="outline" className="ml-2 cursor-pointer">
            My Resume
            <Download />
          </Button>
        </div>
    </div>
  );
};

export default Hero;
