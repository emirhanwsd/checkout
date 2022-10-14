import { HeartIcon } from "@heroicons/react/24/solid";
import { CreditCardIcon } from "@heroicons/react/24/outline";

const App = () => (
  <div className="h-full flex">
    <div className="hidden lg:flex h-full w-1/2 bg-violet-600 text-white items-center justify-end pt-32 pr-32">
      <div className="h-full w-full max-w-sm flex flex-col">
        <div className="h-8 w-8 bg-white rounded-full inline-flex items-center justify-center">
          <HeartIcon className="h-6 w-6 text-violet-500" />
        </div>

        <h1 className="mt-8 text-xl opacity-90">
          Subscribe to Demo Plan - Yearly
        </h1>

        <div className="mt-2 flex items-end gap-x-1">
          <h2 className="text-4xl font-bold">$190.00</h2>

          <span className="opacity-90">/ year</span>
        </div>

        <div className="mt-8 flex justify-between">
          <div className="flex flex-col">
            <h6 className="opacity-90">Demo Plan - Yearly</h6>

            <h5 className="opacity-60">Billed Yearly</h5>
          </div>

          <span className="font-medium opacity-90">$190.00</span>
        </div>

        <div className="mt-8 flex justify-between">
          <h6 className="opacity-90">VAT (8%)</h6>

          <span className="font-medium opacity-90">$14.25</span>
        </div>

        <div className="mt-8 h-px bg-white opacity-30" />

        <div className="text-lg mt-8 flex justify-between">
          <h6 className="opacity-90">Total due today</h6>

          <span className="font-medium opacity-90">$204.25</span>
        </div>

        <div className="mt-24 flex items-center gap-x-4">
          <h4 className="opacity-90 font-medium">Powered by Brand</h4>

          <div className="w-px h-6 bg-white opacity-30" />

          <div className="flex items-center gap-x-2">
            <a
              href="#"
              className="opacity-60 hover:opacity-90 transition-opacity"
            >
              Terms
            </a>

            <a
              href="#"
              className="opacity-60 hover:opacity-90 transition-opacity"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="h-full flex-1 bg-white flex items-center justify-center lg:justify-start lg:pt-32 lg:pl-32 px-8">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="h-full w-full lg:max-w-md flex justify-center lg:justify-start flex-col"
      >
        <h1 className="text-2xl font-bold">Payment Details</h1>

        <p className="mt-2 font-medium opacity-90">
          Complete your purchase by providing your payment information.
        </p>

        <div className="mt-8 flex justify-end items-end gap-x-8 text-violet-600 text-sm">
          <a
            href="#"
            className="underline hover:opacity-80 transition-opacity font-semibold"
          >
            Add Coupon
          </a>

          <a
            href="#"
            className="underline hover:opacity-80 transition-opacity font-semibold"
          >
            Add VAT Number
          </a>
        </div>

        <div className="mt-6 relative">
          <CreditCardIcon className="h-8 w-8 absolute top-2 left-2 text-gray-300" />

          <input
            name="credit-card"
            placeholder="xxxx xxxx xxxx xxxx"
            className="w-full h-12 rounded-lg focus:outline-none border focus:border-gray-300 transition-colors pl-12 pr-4"
          />
        </div>

        <input
          placeholder="Cardholder name"
          className="mt-4 h-12 rounded-lg focus:outline-none border focus:border-gray-300 transition-colors px-4"
        />

        <div className="mt-4 flex items-end justify-between">
          <div className="flex items-center gap-x-2">
            <input
              name="month"
              placeholder="MM"
              className="w-20 h-12 rounded-lg focus:outline-none border focus:border-gray-300 transition-colors px-4"
            />

            <input
              name="year"
              placeholder="YYYY"
              className="w-24 h-12 rounded-lg focus:outline-none border focus:border-gray-300 transition-colors px-4"
            />
          </div>

          <div className="relative">
            <CreditCardIcon className="h-8 w-8 absolute top-2 right-2 text-gray-300" />

            <input
              name="cvv"
              placeholder="CVV"
              className="w-32 h-12 rounded-lg focus:outline-none border focus:border-gray-300 transition-colors pl-4 pr-12"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 h-12 rounded-lg bg-black text-white font-semibold flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          Subscribe Now
        </button>

        <button
          type="submit"
          className="mt-2 h-12 rounded-lg bg-transparent border border-violet-600 text-violet-600 font-semibold flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors"
        >
          Change Payment Method
        </button>

        <div className="hidden lg:flex mt-8 p-4 border rounded-lg flex-col gap-y-2 font-medium text-sm text-center">
          <p>
            This order process is conducted by our online reseller & Merchant of
            Record, Brand.com, who also handle order realted inquiries and
            returns.
          </p>

          <p className="opacity-80">
            Your data will be shared with Brand for product fulfilment.
            Brand.com Market Ltd, X House, XX-XX Street, London EC1V 8BT
          </p>

          <div className="flex items-center justify-center gap-x-2 opacity-80">
            <a
              href="#"
              className="underline hover:opacity-80 transition-opacity"
            >
              Terms & Conditions
            </a>

            <div className="h-3 w-px bg-black opacity-30" />

            <a
              href="#"
              className="underline hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default App;
