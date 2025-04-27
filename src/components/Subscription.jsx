import SubscriptionCard from "./SubscriptionCard"

const Premium = () => {
    return (

        <div className="flex items-center justify-center mt-10">
            <SubscriptionCard type='silver' />
            <SubscriptionCard type='gold' />
        </div>

    )
}

export default Premium