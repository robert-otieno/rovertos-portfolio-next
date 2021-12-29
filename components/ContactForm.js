import { useState } from "react";
import Navbar from "./Navbar";

function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    //   Form validation
    const [errors, setErrors] = useState({});
  
    //   Setting button text
    const [buttonText, setButtonText] = useState("Send");
  
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
  
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }
        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };
  
    //   const [form, setForm] = useState(false);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        let isValidForm = handleValidation();
  
        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
        
                // Reset form fields
                setFullname("");
                setEmail("");
                setMessage("");
                setSubject("");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
            // Reset form fields
            setFullname("");
            setEmail("");
            setMessage("");
            setSubject("");
        }
        console.log(fullname, email, subject, message);
    };

    return (
        <>
            <Navbar/>
            <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 min-h-screen overflow-hidden">
                <div className="relative z-[1] mx-auto mb-10 md:mt-20">
                    <div className="badge bg-red-500 inline-block rounded-xl">
                        <p className="font-normal text-base px-4 py-1 text-gray-50">Lets talk</p>
                    </div>
                    <h1 className="text-4xl font-bold mt-4 text-gray-700">
                        Lets talk about your projects.
                    </h1>
                    <p className="text-base text-gray-700 mt-4 font-normal">
                        Fill the form and send in your queries. I will respond as soon as I can. Alternatively, You can reach out to me at my email address.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-[1] rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">
                    <label htmlFor="fullname" className="text-gray-700 font-normal mt-8">Full name<span className="text-orange-500">*</span> </label>
                    <input type="text" value={fullname} onChange={(e) => {setFullname(e.target.value);}} name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-orange-500 font-normal text-gray-700" /> {errors?.fullname && ( <p className="text-red-500 font-normal">Fullname cannot be empty.</p> )}

                    <label htmlFor="email" className="text-gray-700 font-normal mt-4" > E-mail<span className="text-red-500">*</span> </label>
                    <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value); }} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-orange-500 font-normal text-gray-700" /> {errors?.email && ( <p className="text-red-500 font-normal">Email cannot be empty.</p> )}

                    <label htmlFor="subject" className="text-gray-700 font-normal mt-4" > Subject<span className="text-red-500">*</span> </label>
                    <input type="text" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value); }} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-orange-500 font-normal text-gray-700" /> {errors?.subject && ( <p className="text-red-500 font-normal">Subject cannot be empty.</p> )}
                    
                    <label htmlFor="message" className="text-gray-700 font-normal mt-4" > Message<span className="text-red-500">*</span> </label>
                    <textarea name="message" value={message} onChange={(e) => {     setMessage(e.target.value); }} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-orange-500 font-normal text-gray-700" ></textarea>
                    {errors?.message && (<p className="text-red-500 font-normal">Message body cannot be empty.</p>)}

                    <div className="flex flex-row items-center justify-start">
                        <button type="submit" className="px-6 mt-6 py-2 bg-[#130F49] text-gray-50 font-normal rounded-md text-sm flex flex-row items-center">
                            {buttonText}
                            <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>

                    <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-green-500 font-semibold text-sm my-2">
                            Thank You! Your Message has been delivered.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-red-500 font-normal">
                            Oops! Something went wrong, please try again.
                            </p>
                        )}
                    </div>
                </form>
            </header>
            <div className="modal-svgs">

                <svg className="left" width="702" height="777" viewBox="0 0 702 777" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
                </svg>

                <svg className="right" width="340" height="1122" viewBox="0 0 340 1122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z"/>
                </svg>

            </div>
        </>
    )
}

export default ContactForm
