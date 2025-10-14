interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`max-w-full  max-[425px]:min-w-[100vw] max-[425px]:px-4 sm:max-w-screen-sm md:max-w-[1150px]   xl:max-w-[1240px] px-10 mx-auto  ${className}`}
    >
      {children}
    </div>
  );
}
