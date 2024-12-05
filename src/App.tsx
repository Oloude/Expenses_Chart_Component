import Expenses from "./components/Expenses";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="bg-cream min-h-screen p-6  ">
      <section className="max-w-md mx-auto flex flex-col gap-5 ">
        <Header/>
        <Expenses/>
      </section>

    </main>
  )
}