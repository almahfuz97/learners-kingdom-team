import { useState } from "react";
import AddTocartCard from "./AddTocartCard";

const AddTocart = () => {
    // const [addToCart, SetAddToCrt] = useState([])

    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => SetAddToCrt(data))
    // }, [])



    return (
        <div>

            <AddTocartCard></AddTocartCard>

        </div>
    );
};

export default AddTocart;