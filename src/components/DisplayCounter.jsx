import { useSelector } from "react-redux";

const DisplayCounter =()=>{
   const {counterVal}= useSelector((store)=>store.counter)
    return (
        <p class="lead mb-4">
    Counter current value :{counterVal}
          </p>

    )
    
}
export default DisplayCounter; 