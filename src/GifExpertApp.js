import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp=()=>{     //principal component function

const [categories, setCategories]=useState(['Real Madrid']);   //useState


return(
<>
<h2>GifExpertApp</h2>
<AddCategory setCategories={setCategories}/>     {/*componente input*/}
<hr />

<ol>
{
    categories.map(category=>(
        <GifGrid        //componente lista de Gifs
            key={category}
            category={category} 
        />
    ))

}

</ol>
</>
)
}
