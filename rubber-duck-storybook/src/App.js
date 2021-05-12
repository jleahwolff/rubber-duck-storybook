import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="w-full h-screen mx-auto container flex flex-col items-center justify-center">
      <div className="items-center flex flex-col items-center bg-blue-400 px-16 py-12 rounded-lg shadow-xl">
        <div className="text-2xl text-purple-200 font-extrabold ">React + Tailwind + Storybook</div>
        <Button/>
        <div className="text-lg text-white font-medium">Much awesome frontend development!</div>
      </div>
    </div>
  );
}

export default App;
