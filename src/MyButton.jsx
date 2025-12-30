 function MyButton({onClick,label,className}) {
   
    return(
         <button onClick={onClick} className={className}>
            {label}
            </button>
    );
}

export default MyButton;