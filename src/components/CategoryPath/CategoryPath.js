import { useEffect, useState } from "react"
import setCategoryPath from "../../helpers/getCategoryPath"
import { Link } from "react-router-dom"
import '../ProductDetailCard/product.css'

export default function CategoryPath({ prodID }) {

    const [categories, setCategory] = useState([])

    useEffect(() => {
        setCategoryPath(prodID, setCategory)
    }, [])

    return (
        <div className="category-path">
            <Link to='' className="volver-listado">Volver al listado</Link>
            <div className="catPath-cont">
                {
                    categories.map((cat) => {
                        return (
                            <div className="cat-cont" key={cat.id}>
                                <p className="prod-category">{cat.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}