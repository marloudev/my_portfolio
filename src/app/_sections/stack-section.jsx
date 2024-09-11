import React from "react";
import VueLogo from "../_components/vue-logo";
import LaravelLogo from "../_components/laravel-logo";
import ReactLogo from "../_components/react-logo";
import FlutterLogo from "../_components/flutter-logo";
import NodeJsLogo from "../_components/nodejs-logo";
export default function StackSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <h2 className="text-center text-5xl font-black leading-8 text-white">
          Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <VueLogo />
          <LaravelLogo />
          <ReactLogo />
          <FlutterLogo />
          <NodeJsLogo />
        </div>
      </div>
    </div>
  );
}
