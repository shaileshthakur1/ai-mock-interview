import { Sparkles, ArrowRight, Users, Trophy, Brain } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#FCFAFF]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <Container className="relative pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-violet-200/30 to-pink-200/30 blur-3xl"></div>
        
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-500 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            AI-Powered Interview Platform
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
            Master Your
            <span className="relative whitespace-nowrap">
              <span className="relative bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent"> Interview Game</span>
              <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-full h-[0.4em] w-full fill-violet-500/40" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            </span>
          </h1>

          <div className="mt-6 max-w-3xl">
            <p className="text-xl text-neutral-600">
              Transform your interview preparation with AI-powered insights, real-time feedback, and personalized coaching. Stand out in today's competitive job market.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              Start Free Practice <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                <Users className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <div className="text-2xl font-semibold">250k+</div>
                <div className="text-neutral-600">Active Users</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                <Trophy className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <div className="text-2xl font-semibold">95%</div>
                <div className="text-neutral-600">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                <Brain className="h-6 w-6 text-violet-600" />
              </div>
              <div>
                <div className="text-2xl font-semibold">1.2M+</div>
                <div className="text-neutral-600">Practice Sessions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl bg-gradient-to-b from-violet-500 to-violet-600 shadow-2xl">
          <div className="relative aspect-[4/3] md:aspect-[3/1]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Interview preparation"
              className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-transparent">
              <div className="flex h-full flex-col justify-center p-8 text-white md:w-1/2">
                <h2 className="text-3xl font-bold">AI Interview Coach</h2>
                <p className="mt-4 text-violet-100">
                  Get personalized feedback, practice with industry-specific questions, and improve your interview skills with our advanced AI technology.
                </p>
                <Button size="lg" className="mt-8 w-fit bg-white text-violet-600 hover:bg-violet-50">
                  Try it Now <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-y bg-white/50 backdrop-blur-sm">
        <Container className="py-8">
          <p className="text-center text-sm font-medium text-neutral-600">
            Trusted by leading companies worldwide
          </p>
          <Marquee pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
        </Container>
      </div>

\

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-1 md:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Modern office space"
              className="w-full h-96 rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 h-96 w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today's competitive job market.
            </p>

            <Link to="/generate" className="w-full">
              <Button className="w-3/4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get Started <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default HomePage;