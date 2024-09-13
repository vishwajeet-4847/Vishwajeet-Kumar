import React from "react";

const SubscribeForm = ()=>{  
  return (  <div className="subscribe-form">
                    <h3>Subscribe to our newsletter</h3>
                    <form>
                      <input type="email" placeholder="Enter your email" required />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
  );
};
export default SubscribeForm;