import Index from './components/Index';
import Skills from './components/Skills';
import { Customdock } from './components/Customdock';

function App() {

  return (
    <>
      <main className="lg:min-w-min flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden sm:w-full lg:w-min mx-auto ">
        <div className="fixed inset-0 pointer-events-none z-10 light-mode-fade-bottom dark:fade-bottom bg-white/10 dark:bg-black/10" />
        <Index />
        <Skills />
        <hr className="border-t dark:border-gray-200 border-gray-800"></hr>
        <Customdock />
      </main>
    </>

  )
}

export default App
