import { ThreeCanvasCubes } from "./vlt-canvas";

// for button
import { cva } from "class-variance-authority";
import clsx from "clsx";

const App = () => {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-black px-16">
      <section className="flex flex-col w-2/3 gap-4">
        <h1 className="font-geist font-medium text-5xl text-white">
          I am a hero title
        </h1>
        <p className="font-geist font-medium text-base text-[#757575]">
          This is how I look next to a canvas. I am filled with important
          information or examples that are relevant to the hero.
        </p>
        <Button>Call to Action</Button>
      </section>
      <ThreeCanvasCubes />
    </main>
  );
};

// quick button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default";
  size?: "default";
  radius?: "default";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  radius = "default",
  onClick,
  ...props
}) => {
  const variants = cva("w-fit transition-all font-geist font-medium", {
    variants: {
      variant: {
        default:
          "border-[1px] border-[#333333] hover:bg-[#212121] text-[#fafafa] text-sm",
      },
      size: {
        default: "px-4 py-2 ",
      },
      radius: {
        default: "rounded-sm ",
      },
    },
  });

  return (
    <button
      className={clsx(variants({ variant, size, radius }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default App;
