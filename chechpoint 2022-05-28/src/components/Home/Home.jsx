import React, { Component } from 'react';
import {connect} from 'react-redux'
import mainImage from '../../img-cp2/main-image-cp2.jpg';
import { getAllProducts } from '../../redux/actions';
import ProductCard from '../ProductCard/ProductCard';


// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {

  componentDidMount(){
    this.props.getAllProducts()
  }

  render() {
    return (
      <div>
        <h1>Henry Commerce</h1>
        <img src={mainImage} alt='main-img' />
        <h3>Products</h3>



        <ul>
          {this.props.products?.map(m =>
            <div key={m.id}>
              <ProductCard id= {m.id} name= {m.name} price= {m.price} stock= {m.stock} />
            </div>)}
        </ul>
      </div>
     
      )
  }
}

export function mapStateToProps(state) {
  return {
    products: state.products
  };
}


export function mapDispatchToProps(dispatch) {
  return {
    getAllProducts: () => dispatch(getAllProducts())
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
