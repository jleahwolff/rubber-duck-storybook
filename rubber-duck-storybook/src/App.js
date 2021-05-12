import './App.css';
import Button from './components/Button/Button';
import LgButton from './components/LgButton/LgButton';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="w-screen h-screen flex bg-grey-100 flex-col items-center justify-center">
      <div className="items-center justify-center flex flex-col items-center bg-white px-16 py-12 rounded-lg shadow-xl">
        <div className="text-2xl text-center text-grey-300 font-extrabold ">Components for the <br></br>Rubber Duck Finance team</div>
        <div className="text-lg font-display py-2 text-grey-300 font-medium">React + Tailwind + Storybook</div>
        <p className='font-body text-grey-200 pb-5'>Checkout the Storybook UI by running `npm run storybook` in the terminal</p>
        <div className='grid w-auto grid-rows-1 gap-4 place-items-center'>
        <Button text='Primary Button'/>
        <LgButton text='Large Button'/>
        <Input placeholder='Input Field'/>
        </div>
      </div>
    </div>
  );
}

export default App;
