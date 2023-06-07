export const Header=(props)=>{
  const{title}=props;
  return(
    <div className="tl-Header">
      <h1 className="tl-Header-title">{title}</h1>
    </div>
    
  );
}