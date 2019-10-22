import React, { useState } from 'react';
import DesMoines from './desmoines.jpg';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export const FrontEnd = () => {
    const [prediction, setPrediction] = useState(0);
    return (
        <div className='front-end-container'>
            <img src={DesMoines} className='des-moines-image' alt='nothing'/>
            <div className='image-source'>source: https://www.flickr.com/photos/w4nd3rl0st/5371338419</div>

            <div className='inputs-container'>
                <div className='input-directions'>Enter Your Desired House Information:</div>
                <Formik
                      initialValues={{ finishedSquareFeet: '', numberOfGarageStalls: '', foundationType: '.85'}}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(async () => {
                          let response = await axios.get(`http://127.0.0.1:5000/regression?Input1=${values.finishedSquareFeet}&Input2=${values.foundationType}&Input3=23.1&Input4=55.2&Input5=66.3`);
                          console.log(response.data.data[0].Prediction)
                          let responsePrediction = response.data.data[0].Prediction
                          setPrediction(Math.round(responsePrediction * 100) / 100)
                          setSubmitting(false);
                        }, 200);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className='form'>
                          <div className='data-input'>
                            <div>
                              <div>Finished Square Feet</div>
                              <Field type="text" name="finishedSquareFeet" className='input'/>
                            </div>
                            <div>
                              <div>Foundation Type</div>
                              <Field component="select" type="text" name="foundationType" className='input'>
                                <option value=".85">Concrete</option>
                                <option value=".05">Wood</option>
                                <option value=".65">Dirt</option>
                              </Field>
                            </div>
                            <div>
                              <div>Number Of Garage Stalls</div>
                              <Field type="text" name="numberOfGarageStalls" className='input'/>
                            </div>
                          </div>
                          <button type="submit" disabled={isSubmitting} className='submit'>
                            Calculate
                          </button>
                        </Form>
                      )}
                </Formik>
            </div>
            <div className='result-container'>
              <div>Estimated Price:</div>
              <div>${prediction}</div>
            </div>
        </div>
    );
}