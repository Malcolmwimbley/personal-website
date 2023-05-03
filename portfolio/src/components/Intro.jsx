import React from "react";

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Malcolm Wimbley</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software And Network Engineer</p>
            <p className="text-sm md:text-lg max-w-xl mb-6 font-bold"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem libero, consequat eu urna gravida, mollis 
                suscipit eros. Donec volutpat urna elit, in tempus felis finibus id. Donec interdum elit ut enim 
                sollicitudin ornare et id felis. Morbi egestas libero nec sem tincidunt, vitae semper nulla placerat. 
                Suspendisse ac sapien vel est aliquet imperdiet. <br />Aenean a euismod massa. Morbi neque nulla, 
                ultricies in arcu maximus, euismod hendrerit lacus. Mauris vehicula justo at sapien fermentum dignissim. 
                Quisque egestas gravida porta. Nunc ac lacus quam. Sed interdum et nulla eget bibendum.</p>
        </div>
    )
}

export default Intro;