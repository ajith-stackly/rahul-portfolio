import HomeAbout from "../components/HomeAbout";
import HomeProjects from "../components/HomeProjects";
import GetinTouch from "../components/GetinTouch";
import HomeHero from "../components/HomeHero";

export default function Home() {
  return (
    <main className="bg-[#131313]">
      <HomeHero />

      <div className="mt-[30px]">
        <HomeAbout />
      </div>

      <div className="mt-[30px]">
        <HomeProjects />
      </div>

      <div className="mt-[30px]">

<GetinTouch/>
</div>
    </main>
  );
}