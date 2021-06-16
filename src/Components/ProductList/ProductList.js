import React from "react";
import "./productlist.css";

function ProductList({
  productsDetail: {
    data: {
      products: { edges },
    },
  },
}) {
  return (
    <table>
      <th>Title</th>
      <th>Product Description</th>
      {edges.map((product) => {
        return (
          <tr>
            <td>{product.node.title}</td>
            <td className="description">{product.node.description}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default ProductList;
