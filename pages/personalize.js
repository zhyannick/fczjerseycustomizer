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
    location: ""
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

  const locations = [
    { label: 'Home'},
    { label: 'Away'},

  ]

  return (
    <div className={styles.background}>
    <div className={styles.positioning}>
      <div className={styles.title}>
        <h1 className={styles.PersonalizeYourJersey}>
          Personalize your Jersey
        </h1>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <h1 className={styles.personalilze_title}>
            Personalize:
          </h1>
          <div>
            <p className={styles.label}>Name:</p>
            <input type="text" name="name" onChange={handleChange} value={model.name} className={styles.input} />
          </div>
          <div>
            <p className={styles.label}>Number:</p>
            <input type="number" name="number" onChange={handleChange} value={model.number} className={styles.input2} />
          </div>
          <div className={styles.center_Autocomplete}>
            <Autocomplete
              className={styles.inputFont}
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
          <div className={styles.center_Autocomplete2}>
            <Autocomplete
             className={styles.inputFont}
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
          <div className={styles.center_Autocomplete2}>
          <Autocomplete
             className={styles.inputFont}
              onChange={(event, value) => setModel({
                ...model,
                location: value.label
              })}
              disablePortal
              id="combo-box-demo"
              options={locations}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Home/Away" />}
            />
          </div>
{/*           <input type='submit' value='Enter' className={styles.EnterButton}/> */}
        </form>
      </div>
      <div>
        <h1 className={styles.PersonalizeYourJersey}>Results:</h1>
        <p className={styles.label2}>Name: {model.name}</p>
        <p className={styles.label2}>Number: {model.number}</p>
        <p className={styles.label2}>Signed: {model.signed}</p>
        <p className={styles.label2}>Size: {model.size}</p>
        <p className={styles.label2}>Home/Away: {model.location}</p>
      </div>
    </div>
    </div>
  )
}
