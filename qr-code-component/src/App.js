import './App.css';
import qrCodeImg from './images/image-qr-code.png'

//https://hackernoon.com/how-to-centre-an-element-in-css-with-tailwind

function App() {
  return (
    <div className="bg-gray-light flex items-center justify-center h-screen">
      
      <main className='w-[320px] bg-white rounded-xl p-4'>
        <img src = {qrCodeImg} alt = "qr code img" className='rounded-xl mb-4'/>
        <div className='text-center'>
          <h3 className='font-bold text-blue-dark text-[18px] mb-2 px-4'>
            Improve your front-end skills by building projects
          </h3>
          <p className='text-gray-blue text-[15px] px-6 pt-2 pb-5 '>
            Scan the QR code to visit Frontend Mentor and taking your coding skills to the next level
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;