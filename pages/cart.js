import AddTocardCard from "../components/addTocart/AddTocartCard";


const AddTocart = () => {


    return (
        <div className="flex flex-col  p-6 space-y-4 sm:p-10 divide-y">
            <h2 className="text-xl font-semibold">Your Book cart</h2>



            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>
            <AddTocardCard></AddTocardCard>



            <div className="text-right ">
                <p className="mt-2">Total amount:
                    <span className="font-semibold">$350</span>
                </p>

            </div>

            <div>
                <div className="flex justify-end my-5 ">

                    <button type="button" className="px-6 py-2 border rounded-md ">Back to Home

                    </button>
                    <button type="button" className="px-6 py-2 border rounded-md">
                        Continue to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddTocart;