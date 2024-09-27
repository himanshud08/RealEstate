import { HOW_IT_WORKS } from "@/constants";
import { CircleCheckBig } from "lucide-react";

// Define the types for the HOW_IT_WORKS object
interface Step {
  title: string;
  text: string;
}

interface HowItWorksData {
  title: string;
  content: string;
  steps: Step[];
}

const HowItWorks = () => {
  const { title, content, steps }: HowItWorksData = HOW_IT_WORKS;

  return (
    <div className="container mx-auto my-10 border-b pd-10">
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl text-black">
        {title}
      </h2>
      <p className="mx-auto my-10 max-w-4xl text-center text-neutral-800">
        {content}
      </p>
      <div className="relative h-[640px] rounded-xl flex justify-center items-center">
        <div className="overflow-hidden p-10 md:p-20">
          {steps.map((step: Step, index: number) => (
            <div key={index} className="mb-8">
              <div className="flex items-center justify-center">
                <CircleCheckBig className="mr-4 text-green-400" />
                <h6 className="font-medium uppercase text-neutral-800">
                  {step.title}
                </h6>
              </div>
              <p className="my-2 max-w-xs text-center text-neutral-600 text-xl">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
