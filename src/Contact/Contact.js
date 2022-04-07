import image from '../Images/communicate.png'

function Contact() {

    return (

        <div>
            <h1>Contact</h1>

            <img src={image}
                height={100}
                style={{ marginBottom: "50px", marginTop: "50px" }}
            />
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    Contact info
                </button>
                <div className="collapse"
                    id="collapseExample">
                    <div className="card card-body">
                        <p> Email: book_store@fakestore.com </p>
                        <p>Phone: 0712345678 </p>
                        <p>Adress: First Street 100</p>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Contact;