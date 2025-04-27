import axios from "axios";
import SubscriptionCard from "./SubscriptionCard"
import { BASE_URL } from "../utils/constants";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
    const [isUserPremium, setIsUserPremium] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        verifyPremiumUser();
    }, []);

    const verifyPremiumUser = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/payment/verify`, { withCredentials: true });
            console.log(res?.data?.data);

            if (res?.data?.data?.isPremium) {
                setIsUserPremium(true);                
            } else {
                setIsUserPremium(false);
            }

        } catch (err) {
            console.error(err);
        }
    }


    const createPaymentOrder = async (subsAmount, subscriptionType) => {

        try {
            const res = await axios.post(
                `${BASE_URL}/api/payment/create`,
                {
                    amount: subsAmount,
                    subscriptionType
                },
                { withCredentials: true }
            );
            console.log(res?.data?.data);

            const { amount, keyId, currency, notes, orderId } = res?.data?.data;

            const options = {
                key: keyId,
                amount,
                currency,
                name: "Dev Tinder",
                description: "Connect to other developers",
                order_id: orderId,
                prefill: {
                    name: notes.firstName + " " + notes.lastName,
                    email: notes.emailId,
                    contact: "9999999999",
                },
                theme: {
                    color: "#F37254",
                },
                handler: verifyPremiumUser,

            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            console.error(err);
        }
    }
    return (


        isUserPremium ? ("You are already a premium member") : (

            <div className="flex items-center justify-center mt-10">
                <SubscriptionCard type='silver' createPaymentOrder={createPaymentOrder} />
                <SubscriptionCard type='gold' createPaymentOrder={createPaymentOrder} />
            </div>
        )

    )
}

export default Subscription