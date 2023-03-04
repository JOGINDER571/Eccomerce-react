import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
 export const Alert=(notify)=>{
    toast(notify);
    // const notify = () => toast("Wow so easy!");
    console.log(notify);
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
