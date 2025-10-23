export default function ViewAllButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center mt-[clamp(1rem,2.55vw,3rem)]">
      <button
        className="border font-bold 
          text-[clamp(0.375rem,3vw,1.125rem)] 
          rounded-[62px] 
          py-[10px] px-[65px] 
          w-full max-w-[320px] 
          sm:w-auto sm:max-w-none  "
      >
        {children}
      </button>
    </div>
  );
}
