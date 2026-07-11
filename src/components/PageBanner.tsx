interface PageBannerProps {
  title?: string;
}

const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <section className="bg-primary text-primary-foreground py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold animate-scale-in leading-tight">
          {title || (
            <>
              <span className="block">International Conference on Computational and Emerging Technologies</span>
              <span className="block">for Sustainable Energy</span>
              <span className="block text-xl sm:text-2xl lg:text-2xl xl:text-[28px] font-semibold mt-2">(ICCETSE 2026)</span>
              <span className="block text-lg sm:text-xl lg:text-xl xl:text-[22px] font-semibold mt-3">November 14th & 15th 2026 (Hybrid Mode)</span>
              <span className="block text-base sm:text-lg lg:text-lg xl:text-[19px] font-normal mt-3 opacity-90">
                Organized by
              </span>
              <span className="block text-base sm:text-lg lg:text-lg xl:text-[19px] font-normal opacity-90">
                Department of Electrical & Electronics Engineering, Annamacharya University,
              </span>
              <span className="block text-base sm:text-lg lg:text-lg xl:text-[19px] font-normal opacity-90">
                Rajampet, Andhra Pradesh, India
              </span>
            </>
          )}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
