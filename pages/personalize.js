import styles from '../styles/Personalize.module.css'
import { useState } from 'react'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Personalize(props) {

  const defaultModel = {
    name: "",
    number: "",
    signed: "",
    size: "",


  }




  const [model, setModel] = useState(defaultModel)



  const onSubmit = () => {
    console.log(model)

  }

  const trueMaker = () => {
    if (model.signed === false) {
      model.signed = true
    }
  }

  const handleChange = async (e) => {
    const name = e.target.name
    const value = e.target.value?.trim()

    setModel({
      ...model,
      [name]: value
    })

  }
  const sizes = [
    { label: 'S' },
    { label: 'M' },
    { label: 'L' },
    { label: 'XL' }


  ];

  const awnser = [
    { label: 'Yes' },
    { label: 'No' }
  ];


  return (
    <div>
      <div className={styles.title}>
        <h1>
          Personalize your Jersey
        </h1>

      </div>
      <div>
        <form onSubmit={onSubmit}>

          <h1>Personalize</h1>

          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleChange} value={model.name} />

          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input type="number" name="number" onChange={handleChange} value={model.number} />
          </div>

          <div>

            <Autocomplete
              onChange={(event, value) => setModel({
                ...model,
                signed: value.label
              })}

              disablePortal
              id="combo-box-demo"
              options={awnser}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Signed" />}
            />

          </div>

          <div>

            <Autocomplete
              onChange={(event, value) => setModel({
                ...model,
                size: value.label
              })}

              disablePortal
              id="combo-box-demo"
              options={sizes}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Size" />}
            />
          </div>


          <input type='submit' value='Enter' />

        </form>

      </div>

      <div>
        <p>Name: {model.name}</p>
        <p>Number: {model.number}</p>
        <p>signed: {model.signed}</p>
        <p>Size: {model.size}</p>

      </div>





    </div>





  )
}
