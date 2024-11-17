
const Modal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form action="" onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered input-primary w-full" name="first" />
                                
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered input-primary w-full" name="second" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered input-primary w-full" name="email" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Phone Number</label>
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="input input-bordered input-primary w-full" 
                                name="number"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Appointment data</label>
                            <input
                                type="date"
                                placeholder="Date"
                                className="input input-bordered input-primary w-full" name="data" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered input-primary w-full" name="address" />
                        </div>
                        <button type="sumit" className="btn btn-primary mt-3 text-white text-base">Submit</button>
                    </form>
                    <div className="modal-action justify-start">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;