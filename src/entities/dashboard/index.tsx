// Server Component
import {
  CheckBox,
  Dropdown,
  MultiSelect,
  NumberInput,
  RadioButton,
  Textarea,
  TextInput,
} from 'app/components/base-component'
import PCol from 'app/components/pcol'
import PRow from 'app/components/prow'

export const App = () => {
  return (
    <PCol col={12}>
      <PRow>
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
      </PRow>
    </PCol>
  )
}
export default App
