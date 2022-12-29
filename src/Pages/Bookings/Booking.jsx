import React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesData } from '../../Data/ServicesData';

const Booking = () => {
    const { id } = useParams();
    const [totalPrice, setTotalPrice] = useState();
    const [user] = useAuthState(auth);

    const singleData = ServicesData?.find(s => s?.id === Number(id));

    const handleInputValue = (e) => {
        let value = parseInt(e.target.value);

        if (value < 0) {
            alert('value can not be less than 0');
            value = 1;
        }
        else {
            setTotalPrice(value);
        }
    };

    const confirmToPay = (event) => {

        event.preventDefault();

        const info = {
            item_name: singleData?.name,
            item_image: singleData?.img,
            total_amount: (totalPrice ? singleData?.price * totalPrice : singleData?.price).toFixed(2),
            cus_name: user?.displayName,
            cus_email: user?.email

        }

        console.log(info);

        axios.post(`https://hospisearch-server-production.up.railway.app/init`, info)
            .then(res => {
                if (res?.data) {
                    window.location = res?.data
                }
            })

        // if (urlData?.data) {
        //   window.location.href = urlData?.data
        // }

    };

    return (
        <div className='grid grid-cols-1 py-10 md:grid-cols-2 gap-4 px-4'>
            <div className='flex flex-col md:flex-row justify-between align-middle shadow px-12 my-auto'>
                <img className='h-28' src={singleData?.img} alt=" " />
                <div className='my-auto'>
                    <h4>{singleData?.name}</h4>
                    <p>${singleData?.price}</p>
                </div>
                <div className='my-auto'>
                    <input onChange={handleInputValue}
                        onLoad={(e) => e.target.value = 1}
                        placeholder="Enter Quantity"
                        className='input focus:outline-none input-bordered w-3/5' type="text" name="quantity" id="quantity" />
                </div>
                <div className='my-auto'>
                    <h4 className='text-cyan-500'>${totalPrice ? singleData?.price * totalPrice : singleData?.price}</h4>
                </div>
            </div>
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Checkout</h2>
                        <p>Shipping</p>
                        <div onClick={confirmToPay} className="card-actions justify-end">
                            <button className="btn">Confirm to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
};

export default Booking;