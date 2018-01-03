import React, { Component } from 'react'
import store from '../store'
import styled from 'styled-components'

class Products extends Component {
  handleClick = productId => {
    store.dispatch({ type: 'ADD_TO_CART', productId })
  }

  render() {
    const { products } = store.getState()
    console.log(store.getState())
    const productList = products.map(t => (
      <ProductWrap key={t.id}>
        <h3>
          {t.name}
        </h3>
        <Button onClick={() => this.handleClick(t.id)} >购买</Button>
      </ProductWrap>)
    )
    return (
      <Wrap>
        <Title> 所有商品 </Title>
        <ProductList>
          {productList}
        </ProductList>
      </Wrap>
    )
  }
}

export default Products

const Wrap = styled.div`
  background:#00bcd4;
`

const Button = styled.button`
  background: #FF5722;
  color: white;
  border-radius: 3px;
  line-height: 2;
  outline: none;
  border: 0;
  padding: 3px 30px;
  font-size: 16px;
    &:hover {
      cursor: pointer;
      box-shadow: rgba(0,0,0,0.12)0px 1px 6px,rgba(0,0,0,0.12)0px 1px 4px;
    }
`

const Title = styled.h2`
  color: white;
  text-align: center;
  padding-top: 30px;
`

const ProductList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px 0;
`

const ProductWrap = styled.div`
  background: white;
  padding: 40px;
  min-height: 150px;
  border-radius: 6px;
    h3 {
      text-align: center;
      color: #212121;
    }
`
