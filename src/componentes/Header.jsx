export const Header=(props)=>{
  const{title}=props;
  return(
    <div className="tl-Header">
      <h1 className="tl-Header-title">{title}</h1>
      <input  placeholder="Add your new todo" id="MyInput"/>
      <span className="tl-Header-btn">
        <button className="tl-Header-btn-2">+</button>
      </span>
    </div>
    
  );
}