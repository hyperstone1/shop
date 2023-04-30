import React, { useState } from "react";

const ProductsSort = () => {
    const [sort, setSort] = useState('')
    console.log(sort)
    
    return (
        <div className="d-flex justify-content-between mt-3">
            <p>Сортировать:</p>
        <select onChange={(e) => setSort(e.target.value)} style={{width: "70%", alignItems: "flex-start", height:25}}>
            <option value="">По умолчанию</option>
            <option value="less">По возрастанию цены</option>
            <option value="more">По убыванию цены</option>
        </select>
        </div>
    );

}

export default ProductsSort;