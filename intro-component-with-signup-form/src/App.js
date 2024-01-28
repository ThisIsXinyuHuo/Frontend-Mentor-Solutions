import "./App.css";
import Form from "./FormUseFormik";

// Max-width defines the maximum width of an element. The element can get narrower if the viewport gets narrower but it won’t exceed the max-width value.
// On the other hand, Width in % will make the element infinitely stretchable, and Width in px will make it non-responsive.
// So, when you apply both Max-Width and Width to an element, they both start working independently. If the viewport gets wider than the defined Max-width value, the element will stop expanding. But, if the viewport gets narrower, the Width value kicks in.

function App() {
  return (
    <div className="font-poppins min-h-screen flex justify-center sm:items-center bg">
      <div className="w-[85%] max-w-screen-lg pt-12 sm:pt-0 flex flex-col sm:flex-row items-center"> 
        <div className="w-[80%] text-center sm:text-left sm:w-[50%]">
          <p className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Learn to code by <br /> watching others
          </p>
          <p className=" text-white text-lg mb-10 sm:text-sm sm:w-[85%] font-thin">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable
          </p>
        </div>
        <div className="w-[80%] sm:w-[50%]">
          <div className=" bg-accentBlue text-center rounded-xl p-5 mb-7 text-white box ">
            <p className="font-thin">
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
