import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "LET’S BUILD BRANDS THAT GLEAM, SITES THAT STREAM, CONTENT THAT’S THE DREAM TOGETHER."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
            <AnimatedBody text={"Hi, I'm Abhinav Singh"} />
            <AnimatedBody
              text={
                "A self-taught coder who loves to craft fresh ideas and build solid backends, eager to shape a future in software engineering."
              }
            />
            <AnimatedBody
              text={
                "When I’m not coding, you’ll find me sketching ideas, hanging out with friends, cheering for Oracle Red Bull Racing, or exploring new tunes to keep the creativity flowing."
              }
            />
            <AnimatedBody
              text={
                "I’m always open to new opportunities and collaborations. Let’s connect! Whether it’s brainstorming fresh ideas, tackling challenges together, or creating something unforgettable, I’m ready to dive in."
              }
            />
          </div>

          <div className="mb-24 flex w-full flex-col gap-6 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-8 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Languages and Tools"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "React, Next.js, TypeScript, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Java, Python."
                }
              />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Extra"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap."}
              />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={"text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Adobe After Effect, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="Some of my hobbies :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
