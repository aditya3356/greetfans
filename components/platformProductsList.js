import Link from 'next/link';
import {loadStripe} from '@stripe/stripe-js';
import getConfig from 'next/config';
import API from '../helpers/api';

let publicKey = getConfig().publicRuntimeConfig.stripe.publicKey;

export default class PlatformProductsList extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.stripePromise = loadStripe(publicKey, {
      stripeAccount: this.props.platform.stripe.stripeUserId,
    });
  }

  async buyProduct(product, e) {
    e.preventDefault();

    try {
      let purchase = await API.makeRequest('post', '/api/purchase', {
        platformId: this.props.platform.platformId,
        priceId: product.price.id,
      });

      if (purchase.id) {
        const stripe = await this.stripePromise;
        stripe.redirectToCheckout({
          sessionId: purchase.id,
        });
      }
    } catch (err) {
      console.log('error', err);
    }
  }

  render() {
    const list = this.props.list;
    let listItems;

    if (list) {
      listItems = list.map((item) => {
        let price = '';

        if (item.price) {
          price = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: item.price.currency,
          }).format(item.price.unit_amount / 100);
        }

        return (
          <li className="container" key={item.id}>
            {item.name && (
              <>
                {<img src={item.images} />}
                <div className="price-and-button-container">
                  <div>
                    <h4 className="product-name">{item.name}</h4>
                
                    <p className="product-price">{price}</p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="btn"
                    onClick={this.buyProduct.bind(this, item)}
                  >
                    Buy now
                  </a>
                </div>
              </>
            )}
            <style jsx>{`
              .container {
                height: 520px;
                width: 420px;
              }

              img {
                height: 420px;
                width: 420px;
              }

              h4 {
                margin-top: 10px;
              }

              .price-and-button-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: rgba(0,0,0,0.15);
                width: 420px;
              }

              .container .btn {
                padding: 10px 20px;
                border: none;
                cursor: pointer;
                height: 40px;
                background: rgb(0, 102, 240);
                box-shadow: 0px 15px 35px 0px rgba(50, 50, 93, 0.1),
                  0px 5px 15px 0px rgba(0, 0, 0, 0.07);
                border-radius: 22px 22px 22px 22px;
                margin-top: 5px;
                color: rgb(255, 255, 255);
                font-size: 17px;
                font-weight: 500;
              }
              
              .container .btn:hover {
                background-color: black;
              }

              .product-name {
                text-align: left;
                color: rgb(0, 0, 0);
                font-size: 17px;
                font-weight: 500;
                opacity: 0.7;
              }
              
              .product-price {
                text-align: left;
                color: rgb(0, 0, 0);
                font-size: 28px;
                font-weight: 500;
              }
            `
            
            }</style>
          </li>
        );
      });
    }

    return (
      <ul className="products-list">
        {listItems}

        <style jsx>{`
        .products-list {
          list-style: none;
          padding: 0;
          margin: 10px 0 0 0;

          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 30px;
        }

        @media (min-width: 768px) {
          .products-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) { {
          .products-list {
            grid-template-columns: repeat(3, 1fr);
          }
        } 
        `       
      }</style>
      </ul>
    );
  }
}