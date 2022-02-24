import Swal from 'sweetalert2'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";

const schema = yup.object().shape({
    fullname: yup.string().required("Please enter your name"),
    email: yup.string().email("Incorrect email format").required("Email address is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("You must write a message"),
})

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

function ContactForm() {
    return (
        <>
        <header className="p-8 z-10 grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 lg:px-40 overflow-hidden">
            <div className="relative z-10 mx-auto mb-10 md:mt-20">
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
            <div className="bg-slate-700 p-8 shadow-lg h-fit rounded-lg relative z-10">
                <Formik
                    initialValues={{ fullname: "", email: "", subject: "", message: "" }}
                    validationSchema={schema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        const res = await fetch("/api/sendgrid", {
                            body: JSON.stringify(values),
                            headers: {
                            "Content-Type": "application/json",
                            },
                            method: "POST",
                        });

                        console.log(res)

                        const { error } = res.json();
                        if (error) {
                            console.log(error);
                            Toast.fire({
                                icon: 'error',
                                title: 'Oops! Something went wrong'
                            })

                            setSubmitting(false);
                            return;
                        } else {
                            Toast.fire({
                                icon: 'success',
                                title: 'Thank you! Your message has been sent.'
                            })
        
                            console.log(values);
                            setSubmitting(false);
                            resetForm();
                        }
                    }}
                >
                    {({ touched, errors, isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <Field type="text" name="fullname" placeholder="Enter Full Name" className={`form-control ${   touched.fullname && errors.fullname ? "is-invalid" : "" }`} />
                            <ErrorMessage component="div" name="fullname" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" placeholder="Enter email" className={`form-control ${   touched.email && errors.email ? "is-invalid" : "" }`} />
                            <ErrorMessage component="div" name="email" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <Field type="text" name="subject" placeholder="Enter Subject" className={`form-control ${   touched.subject && errors.subject ? "is-invalid" : "" }`} />
                            <ErrorMessage component="div" name="subject" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" >Message</label>
                            <Field as="textarea" rows="4" name="message" placeholder="Write message here" className={`form-control ${ touched.message && errors.message ? "is-invalid" : "" }`} />
                            <ErrorMessage component="div" name="message" className="invalid-feedback" />
                        </div>

                        <div className=" mt-2 text-right">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#F7AB0A] hover:bg-orange-600 focus:outline-none">
                                {isSubmitting ? <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Please wait...
                                </> : "Submit"}
                            </button>
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
            
            <div className="modal-svgs">
                <svg className="left" width="702" height="777" viewBox="0 0 702 777" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M602.5 326.469C492.1 178.857 142.167 49.4459 -9 0.174988V776.945C39.8333 749.964 200.724 667.093 370 684.437C792 727.675 740.5 510.983 602.5 326.469Z" />
                </svg>
                <svg className="right" width="340" height="1122" viewBox="0 0 340 1122" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M109.628 425.5C218.428 338.7 321.961 105.667 360.128 0V1121.5C302.528 1035.9 169.128 917.5 109.628 869C-46.3719 717 -26.3719 534 109.628 425.5Z"/>
                </svg>
            </div>
        </header>
        </>
    )
}

export default ContactForm
