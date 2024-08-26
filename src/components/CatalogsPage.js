import Titlu from "./Titlu"
import Catalog from "./Catalog"
import { listaElevi, listaElevi2 } from "../constants"



const CatalogsPage = ()=>{
    return(
        <>
        <Titlu title={"Catalogs"} />
        <Catalog title={"First Catalog"} listaElevi={listaElevi} />
        <Catalog title={"Second Catalog"} listaElevi={listaElevi2} />
      </>
    )
}

export default CatalogsPage;