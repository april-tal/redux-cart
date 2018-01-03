import React, { Component } from 'react'
import styled from 'styled-components'

class Cart extends Component {
  render () {
    const { products,total } = this.props
    console.log(total);
    const hasProduct = products.length > 0
    const productList = products.map(t => (
      <ProductList key={t.id}>
        <GoodsName>{t.name}</GoodsName>
        <Quantity>{t.quantity}</Quantity>
      </ProductList>
    ))
    return (
      <div>
        <Total>总价：{total}元</Total>
        {
          hasProduct ? productList :
          <Product>请添加商品</Product>
        }
      </div>
    )
  }
}

export default Cart

const Total = styled.div`
  background: #00bcd4;
  width: 20%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  line-height: 5;
  font-size: 20px;
  border-radius: 6px;
`

const Product = styled.div`
  color: #333;
  border: 1px solid green;
  padding: 0 40px;
  line-height: 4;
  text-align: center;
`

const ProductList = styled.div`
  color: #333;
  display: flex;
  justify-content: space-between;
  border: 1px solid green;
  padding: 20px 40px;
  line-height: 4;
  margin-bottom: 2px;
`

const GoodsName = styled.div`
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Quantity = styled.div`
  width: 27px;
  height: 27px;
  text-align: center;
  background: #00bcd4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 100px;
`
