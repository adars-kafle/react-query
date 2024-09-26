import { useParams } from "react-router-dom";

const Purchase = () => {
    const params = useParams();

    return <div>Purchase Product ID No: {params.id} </div>;
};

export default Purchase;
