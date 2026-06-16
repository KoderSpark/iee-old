import { ReactNode } from "react";

interface ContentBoxProps {
  children: ReactNode;
  className?: string;
}

const ContentBox = ({ children, className = "" }: ContentBoxProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-sm p-4 sm:p-6 md:p-8 animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default ContentBox;
