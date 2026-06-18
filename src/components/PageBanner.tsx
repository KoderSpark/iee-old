interface PageBannerProps {
  title?: string;
}

const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <section className="bg-primary text-primary-foreground py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold animate-scale-in leading-tight">
          {title || (
            <>
              <span className="block sm:inline">International Conference on Computational,</span>{" "}
              <span className="block sm:inline">Emerging Technologies and Sustainability</span>{" "}
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 sm:mt-1">(ICCETS 2026)</span>
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-3 sm:mt-2">November 14th & 15th 2026 (Hybrid Mode)</span>
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-normal mt-2 sm:mt-1 opacity-90">
                Organized by Department of Electrical & Electronics Engineering, Annamacharya University
              </span>
            </>
          )}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
