function CheckOut() {
    return (
        <div className="col-md-6" style={{
            marginTop: "20px",
            marginInline: "auto"
        }}>
            <h1>Check Out</h1>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="inputPhone" />
                </div>
                <div className="col-6">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-6">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-3">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-3">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>Romania</option>
                    </select>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Order</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOut;