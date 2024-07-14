const container = ({ children }) => {
  return (
    <center>
    <div class="card container" style={{ width: "288rem", marginTop:"15%", height: "400px"}}>
      <div class="card-body">{children}</div>
    </div>
    </center>
  );
};
export default container;
