const SubscriptionCard = ({ type }) => {


    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                {type === 'gold' && <span className="badge badge-xs badge-warning">Most Popular</span>}

                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{type === 'gold' ? "GOLD" : 'SILVER'}</h2>
                    <span className="text-xl">{type === 'silver' ? "Rs. 300 / -" : "Rs.700 / -"}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{type === 'silver' ? "Chat with other people" : 'Chat with other people'}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{type === 'silver' ? "100 connection Requests per day" : 'Inifiniye connection Requests per day'}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{type === 'silver' ? "Blue Tick" : 'Blue Tick'}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{type === 'silver' ? "3 months" : '6 month'}</span>
                    </li>
                    <li className="opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="line-through">Real-time collaboration tools</span>
                    </li>
                    <li className="opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="line-through">Seamless cloud integration</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionCard