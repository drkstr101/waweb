// import { DocsFooter } from "@home/components/DocsFooter";
// import { DocsHeader } from "@home/components/DocsHeader";
// import { Logo } from "@home/components/Logo";
// import { Navigation } from "@home/components/Navigation";
// import { Prose } from "@home/components/Prose";
import { SectionProvider } from "@home/components/SectionProvider";

export function Layout({ children, sections = [] }) {
  return <SectionProvider sections={sections}>{children}</SectionProvider>;
  // return (
  //   <SectionProvider sections={sections}>
  //     <div className="lg:ml-72 xl:ml-80">
  //       <motion.header
  //         layoutScroll
  //         className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
  //       >
  //         <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-neutral-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
  //           <div className="hidden lg:flex">
  //             <Link href="/" aria-label="Home">
  //               <Logo className="h-6" />
  //             </Link>
  //           </div>
  //           <DocsHeader />
  //           <Navigation className="hidden lg:mt-10 lg:block" />
  //         </div>
  //       </motion.header>
  //       <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
  //         <main className="py-16">
  //           <Prose as="article">{children}</Prose>
  //         </main>
  //         <DocsFooter />
  //       </div>
  //     </div>
  //   </SectionProvider>
  // );
}
