function Details (props){
    return(
        <div>
            welcome Dynamic page  111
            <p>   {props.post.title} </p>
            <p> {props.post.body}  </p>
        </div>
    )
}


export default Details 

            export async function getStaticPaths(){
    const res = await  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    const data =await res.json();


    const paths  =await data.map(d => {
        return{
        params : {id : `${d.id}`}
        }
    })
    return{
        paths:paths ,
        fallback : false ,
        
    }
}
