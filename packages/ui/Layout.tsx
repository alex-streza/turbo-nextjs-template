export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <main
      className={`${className} flex min-h-screen w-screen flex-col items-center bg-gray-900`}
    >
      {children}
    </main>
  );
};
