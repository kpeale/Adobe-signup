import React , { useState }from "react";
import background from './adobe.jpg';

const Signup =  () => {

   const [email, setEmail] = useState('');

   const handleSubmit = (e) => {
     e.preventDefault();
 }

    return (
        <>
        <section className="signup__container1">
            <div className="signup__container-bx">
                <h1 className="signup__container1-heading">ADOBE XD</h1>
            </div>
                
            </section>

        <section className="login__section">
                

            <section className="signup__container2">
                
            <h1 className="signup__heading--1">Adobe XD</h1>
            <h2 className="signup__heading--2">Sign in</h2> 
            <p className="signup--paragraph">New user? 
                <span className="signup--paragraph--2">Create an account</span>
            </p>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form__content">
                <label htmlFor="email" className="label-email">Email Address</label>
               <input type='text' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
               <div className="form--btn-bx">
                <button type="submit" className="btn--form">continue</button>
               </div>
                    
                </div>
            </form>
            </section>
            

            <section className="signup__links">
                <div className="signup__paragrapgh-bx">
                    <p className="signup__paragraph">or</p>
                </div>
                <div className="signup__btn">
                    <button type="submit" className="btn--google">Continue with google</button>
                    <button type="submit" className="btn--facebook">Continue with facebook</button>
                    <button type="submit" className="btn--apple">Continue with Apple</button>
                </div>
            </section>
        </section>
        </>
    )

}; 

export default Signup;