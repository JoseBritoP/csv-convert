import Form from "./components/Form";

function App() {
  return (
    <main className="bg-gray-800 p-4 h-screen w-full">
      <section className="flex gap-y-10 flex-col items-center justify-center p-4 border-2 border-slate-500 rounded-md hover:border-slate-400">
        <h1 className="text-xl font-semibold text-gray-200">Challenge: <span className="font-bold">Upload CSV + Search</span></h1>
        <Form/>
      </section>
    </main>
  );
}

export default App;
