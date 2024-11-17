
const FeedBack = ({ feedBackData }) => {
    const { reviewId, name, review, userImg } = feedBackData;
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                feedBackData.map(feed => <div key={feed.reviewId} className="card border text-white">
                    <div className="card-body">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full object-cover" src={feed.userImg} alt="" />
                            <h2 className="card-title">{feed.name}</h2>
                            <p className="text-right">{new Date().toLocaleDateString()}</p>
                        </div>
                        <p>{review}</p>
                        <div className="card-actions justify-start items-center">
                            <button className="btn btn-sm btn-outline btn-primary !text-white">Review</button>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default FeedBack;