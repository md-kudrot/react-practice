import LeftContent from "./Left.jsx"
import RightContent from "./RightContent.jsx"

const Page1content = () =>{
    return(
        <div className=" py-10 flex items-center justify-around gap-10">
            <LeftContent/>
            <RightContent/>
        </div>        
    )
}

export default Page1content;