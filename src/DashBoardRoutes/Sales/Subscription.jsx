
const Subscription = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Increase Your Product Adding Limit </h2>
            <h2 className="text-lg font-bold text-center mb-10">choose Your Plan </h2>

            
            <div className="grid md:grid-cols-3 gap-10 m-10 mx-auto">
            <div className="card w-80 bg-sky-500 text-primary-content">
            <div className="card-body">
                <h2 className="text-2xl font-bold">$10 Plan</h2>
                <p>Increase the limit to 200</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-purple-500 border-none font-bold">Purchase</button>
                </div>
            </div>
        </div>
            <div className="card w-80 bg-rose-500 text-primary-content ">
            <div className="card-body">
                <h2 className="text-2xl font-bold">$20 Plan</h2>
                <p className="text-lg font-bold">Increase the limit to 450</p>
                <div className="card-actions justify-end">
                    <button className="btn skeleton border-none bg-sky-500 font-bold">Purchase</button>
                </div>
            </div>
        </div>
            <div className="card w-80 bg-purple-600 text-primary-content skeleton">
            <div className="card-body">
                <h2 className="text-2xl font-bold">$50 Plan</h2>

                <p>Increase the limit to 1500</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-rose-500 border-none font-bold">Purchase</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Subscription;