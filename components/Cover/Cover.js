import Image from "next/image";
 
export const Cover = (props) => {
    
    const loaderProp =({ src}) => {
        return src;
    }
 
    return (
    <div className="h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center">
        <Image 
            alt="Cover" 
            src={props.background} 
            fill
            cover="true" 
            className="mix-blend-soft-light"
            loader={loaderProp}
            unoptimized={true}
        
        />
        
       <div className="font-heading max-w-5xl z-10">{props.children}</div>
        
    </div>
    )
};