import React, { useState } from "react";

function FormComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, email });
  };

  return (
    <div style={{
      background:"#0f172a",
      minHeight:"100vh",
      color:"white",
      textAlign:"center",
      paddingTop:"60px",
      fontFamily:"Arial"
    }}>

      <h2>User Form</h2>

      <form 
        onSubmit={handleSubmit}
        style={{
          background:"#1e293b",
          padding:"25px",
          width:"300px",
          margin:"auto",
          borderRadius:"10px",
          display:"flex",
          flexDirection:"column",
          gap:"10px"
        }}
      >

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{
            padding:"8px",
            borderRadius:"5px",
            border:"none"
          }}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            padding:"8px",
            borderRadius:"5px",
            border:"none"
          }}
        />

        <button
          type="submit"
          style={{
            padding:"10px",
            background:"#38bdf8",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
        >
          Submit
        </button>

      </form>

      {data && (
        <div style={{marginTop:"20px"}}>
          <h3>Submitted Data</h3>
          <p><b>Name:</b> {data.name}</p>
          <p><b>Email:</b> {data.email}</p>
        </div>
      )}

    </div>
  );
}

export default FormComponent;