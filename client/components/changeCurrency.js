import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import './changeCurrency.scss'
import { updateCurrency } from '../redux/reducers/currencyChange'

const CurrencySelector = () => {
  const currency = useSelector((store) => store.currencyChange.currency)

  const dispatch = useDispatch()

  const changeCurrency = (e) => {
    const selectedCurrency = e.target.value
    axios('/api/v1/rates').then(({ data }) => {
      const selectedRate = data[selectedCurrency]
      dispatch(updateCurrency(selectedCurrency, selectedRate))
    })
  }

  return (
    <div className="flex section over-hide z-bigger">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <input
              id="usd"
              type="radio"
              name="react-tips"
              value="USD"
              checked={currency === 'USD'}
              className="checkbox-tools"
              onChange={changeCurrency}
            />
            <label className="currency for-checkbox-tools" htmlFor="usd">
              USD &#36;
            </label>
            <input
              id="eur"
              type="radio"
              name="react-tips"
              value="EUR"
              checked={currency === 'EUR'}
              className="checkbox-tools"
              onChange={changeCurrency}
            />
            <label className="currency for-checkbox-tools" htmlFor="eur">
              EUR &#8364;
            </label>
            <input
              id="cad"
              type="radio"
              name="react-tips"
              value="CAD"
              checked={currency === 'CAD'}
              className="checkbox-tools"
              onChange={changeCurrency}
            />
            <label className="currency for-checkbox-tools" htmlFor="cad">
              CAD С&#36;
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

CurrencySelector.propTypes = {}

export default React.memo(CurrencySelector)
