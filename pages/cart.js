import AddTocardCard from "../components/addTocart/AddTocartCard";


const AddTocart = () => {


    return (
        <div className="flex flex-col  p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 divide-y">
            <h2 className="text-xl font-semibold">Your cart</h2>



            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>



            <div className="space-y-1 text-right">
                <p>Total amount:
                    <span className="font-semibold">$350</span>
                </p>

            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </button>
                <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </button>
            </div>
        </div>
    );
};

export default AddTocart;