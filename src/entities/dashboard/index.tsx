/* eslint-disable  @typescript-eslint/no-explicit-any */

// Server Component
// import {
//   CheckBox,
//   Dropdown,
//   MultiSelect,
//   NumberInput,
//   RadioButton,
//   Textarea,
//   TextInput,
// } from 'app/components/base-component'
import PCol from 'app/components/pcol'
import PRow from 'app/components/prow'
import { testData } from 'app/utilities/test'
import { useEffect, useState } from 'react'
// import PRow from 'app/components/prow'

export const App = () => {
  const [mali, setMali] = useState<Array<any>>([])
  const [kala, setKala] = useState<Array<any>>([])
  const [data, setData] = useState<Array<any>>([])

  useEffect(() => {
    const tmp = testData.payload.Items.sort((a, b) => a.RecordId - b.RecordId)
    setData(tmp)
    const payload1 = []
    for (let index = 0; index < tmp.length; index++) {
      if (
        tmp[index].ActionName === 'خرید' ||
        tmp[index].ActionName === 'فروش'
      ) {
        payload1.push(tmp[index])
      }
    }
    setKala(payload1)

    const payload = []
    for (let index = 0; index < tmp.length; index++) {
      if (
        tmp[index].ActionName === 'حواله' ||
        tmp[index].ActionName === 'پرداخت' ||
        tmp[index].ActionName === 'دریافت'
      ) {
        payload.push(tmp[index])
      }
    }
    setMali(payload)
  }, [])
  return (
    <PCol col={12}>
      {data.map((item, index) => (
        <div className="flex">
          <strong>{index}</strong>
          <span className={item.RecordId ? 'px-1 border' : ''}>
            {item.RecordId}
          </span>
          <span className={item.ActionName ? 'px-1 border' : ''}>
            {item.ActionName}
          </span>
          <span className={item.ProductName ? 'px-1 border' : ''}>
            {item.ProductName}
          </span>
          <span className={item.GoldUnitName ? 'px-1 border' : ''}>
            {item.GoldUnitName}
          </span>
          <span className={item.CurrencySymbol ? 'px-1 border' : ''}>
            {item.CurrencySymbol}
          </span>
          <span className={item.SumMoney ? 'px-1 border' : ''}>
            {item.SumMoney}
          </span>
          <span className={item.Weight ? 'px-1 border' : ''}>
            {item.Weight}
          </span>
          <span className={item.Fineness ? 'px-1 border' : ''}>
            {item.Fineness}
          </span>
          <span className={item.Description ? 'px-1 border' : ''}>
            {item.Description}
          </span>
          ------
          <span className={item.RelatedRecord?.ActionName ? 'px-1 border' : ''}>
            {item?.RelatedRecord?.ActionName}
          </span>
          <span
            className={item.RelatedRecord?.ProductName ? 'px-1 border' : ''}
          >
            {item?.RelatedRecord?.ProductName}
          </span>
          <span
            className={item.RelatedRecord?.GoldUnitName ? 'px-1 border' : ''}
          >
            {item?.RelatedRecord?.GoldUnitName}
          </span>
          <span
            className={item.RelatedRecord?.CurrencySymbol ? 'px-1 border' : ''}
          >
            {item?.RelatedRecord?.CurrencySymbol}
          </span>
          <span className={item.RelatedRecord?.SumMoney ? 'px-1 border' : ''}>
            {item?.RelatedRecord?.SumMoney}
          </span>
          <span
            className={item.RelatedRecord?.Description ? 'px-1 border' : ''}
          >
            {item?.RelatedRecord?.Description}
          </span>
        </div>
      ))}
      <PRow>
        <PCol col={6}>
          <h1>mali</h1>
          {mali.map((item, index) => (
            <div className="flex">
              <strong>{index}</strong>
              <span className={item.RecordId ? 'px-1 border' : ''}>
                {item.RecordId}
              </span>
              <span className={item.ActionName ? 'px-1 border' : ''}>
                {item.ActionName}
              </span>
              <span className={item.ProductName ? 'px-1 border' : ''}>
                {item.ProductName}
              </span>
              <span className={item.GoldUnitName ? 'px-1 border' : ''}>
                {item.GoldUnitName}
              </span>
              <span className={item.CurrencySymbol ? 'px-1 border' : ''}>
                {item.CurrencySymbol}
              </span>
              <span className={item.SumMoney ? 'px-1 border' : ''}>
                {item.SumMoney}
              </span>
              <span className={item.Weight ? 'px-1 border' : ''}>
                {item.Weight}
              </span>
              <span className={item.Fineness ? 'px-1 border' : ''}>
                {item.Fineness}
              </span>
              <span className={item.Description ? 'px-1 border' : ''}>
                {item.Description}
              </span>
              --------
              <span
                className={item.RelatedRecord?.ActionName ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.ActionName}
              </span>
              <span
                className={item.RelatedRecord?.ProductName ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.ProductName}
              </span>
              <span
                className={
                  item.RelatedRecord?.GoldUnitName ? 'px-1 border' : ''
                }
              >
                {item?.RelatedRecord?.GoldUnitName}
              </span>
              <span
                className={
                  item.RelatedRecord?.CurrencySymbol ? 'px-1 border' : ''
                }
              >
                {item?.RelatedRecord?.CurrencySymbol}
              </span>
              <span
                className={item.RelatedRecord?.SumMoney ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.SumMoney}
              </span>
              <span
                className={item.RelatedRecord?.Description ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.Description}
              </span>
            </div>
          ))}
        </PCol>

        <PCol col={6}>
          <h1>kala</h1>
          {kala.map((item, index) => (
            <div className="flex">
              <strong>{index}</strong>
              <span className={item.RecordId ? 'px-1 border' : ''}>
                {item.RecordId}
              </span>
              <span className={item.ActionName ? 'px-1 border' : ''}>
                {item.ActionName}
              </span>
              <span className={item.ProductName ? 'px-1 border' : ''}>
                {item.ProductName}
              </span>
              <span className={item.GoldUnitName ? 'px-1 border' : ''}>
                {item.GoldUnitName}
              </span>
              <span className={item.CurrencySymbol ? 'px-1 border' : ''}>
                {item.CurrencySymbol}
              </span>
              <span className={item.SumMoney ? 'px-1 border' : ''}>
                {item.SumMoney}
              </span>
              <span className={item.Weight ? 'px-1 border' : ''}>
                {item.Weight}
              </span>
              <span className={item.Fineness ? 'px-1 border' : ''}>
                {item.Fineness}
              </span>
              <span className={item.Description ? 'px-1 border' : ''}>
                {item.Description}
              </span>
              ------
              <span
                className={item.RelatedRecord?.ActionName ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.ActionName}
              </span>
              <span
                className={item.RelatedRecord?.ProductName ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.ProductName}
              </span>
              <span
                className={
                  item.RelatedRecord?.GoldUnitName ? 'px-1 border' : ''
                }
              >
                {item?.RelatedRecord?.GoldUnitName}
              </span>
              <span
                className={
                  item.RelatedRecord?.CurrencySymbol ? 'px-1 border' : ''
                }
              >
                {item?.RelatedRecord?.CurrencySymbol}
              </span>
              <span
                className={item.RelatedRecord?.SumMoney ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.SumMoney}
              </span>
              <span
                className={item.RelatedRecord?.Description ? 'px-1 border' : ''}
              >
                {item?.RelatedRecord?.Description}
              </span>
            </div>
          ))}
        </PCol>
      </PRow>
      {/* <PRow>
        <NumberInput
          col={6}
          label="Number Input"
          onChange={() => {}}
          value={123}
          id="number-input"
        />

        <TextInput
          col={6}
          label="Text Input"
          onChange={() => {}}
          value={'123'}
          id="Text-input"
        />

        <Dropdown
          showClear
          col={6}
          label="DropDown"
          onChange={() => {}}
          value={'One'}
          id="Text-input"
          optionLabel="label"
          optionValue="value"
          options={[
            { label: 'One', value: 'One' },
            { label: 'Two', value: 'Two' },
            { label: 'Three', value: 'Three' },
          ]}
        />

        <MultiSelect
          showClear
          col={6}
          label="DropDown"
          onChange={() => {}}
          value={['One']}
          id="Text-input"
          optionLabel="label"
          optionValue="value"
          options={[
            { label: 'One', value: 'One' },
            { label: 'Two', value: 'Two' },
            { label: 'Three', value: 'Three' },
          ]}
        />
        <CheckBox checked id="checkBox" label="Check Box" col={6} />
        <RadioButton id="radio-btn" label="Radio Button" checked />
        <Textarea id="Textarea" label="Textarea" col={12} />
      </PRow> */}
    </PCol>
  )
}
export default App
