
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
