// ******************************************
// Example 1: Basic Inline Styles       * 
// ******************************************

// function app() {
//     return(
//         <div>
//             <div style={{height:"2rem", width:"6rem",padding:"14rem", backgroundColor:"green"}}>
//                 <p style={{height:"4rem", width :"4rem", borderRadius:"50%", backgroundColor: "red"}}></p>
//             </div>
//         </div>
//     )
// }

// export default app;

// ****************************************************

// ***********************************************************
//  Example 2: Style Objects (Better Practice)           * 
// ***********************************************************

// function kk() {

//     const squre = {
//         height: "2rem",
//         with: "6rem",
//         padding: "14rem",
//         backgroundColor: "green"
//     };

//     const cercle = {
//         height: "8rem",
//         with: "8rem",
//         borderRadius: "100%",
//         backgroundColor: "red"
//     }



//     return (
//         <div>
//             <div style={squre}>
//                 <p style={cercle}></p>
//             </div>
//         </div>
//     )
// }

// export default kk;



// ***********************************************************
//  Example 3: Dynamic Inline Styles           * 
// ***********************************************************

function Button({ isPrimary }) {
  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    // Dynamic color based on prop
    backgroundColor: isPrimary ? '#667eea' : '#6b7280',
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    // <button style={buttonStyle}>
    //   {isPrimary ? 'Primary Button' : 'Secondary Button'}
    // </button>

    <button style={buttonStyle}>
        {isPrimary ? 'Primary button' : 'Secondary Button'}
    </button>
  );
}

function App() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <Button isPrimary={true} />
      <br /><br />
      <Button isPrimary={false} />
    </div>
  );
}

export default App;