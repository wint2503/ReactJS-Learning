// function User({image,phone,cell,name}){
    
function User({data, remove}){
const removeUser = ()=>{
    remove(data.uuid)
}
    return (
        <div className="card my-2">
            <div className="row">
                <div className="col-2 my-2">
                    <img src={data.image} alt="logo" width='80px' height='80px'></img>
                </div>
                <div className="col-5 my-3">
                    <strong>Ph:{data.phone}</strong><br />
                    <strong>Cell:{data.cell}</strong>
                </div>
                <div className="col-3 my-3">
                    <h6>{data.name}</h6>
                </div>
                <div className="col-1">
                    <button className="btn btn-danger btn-sm my-3" onClick={removeUser}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default User;