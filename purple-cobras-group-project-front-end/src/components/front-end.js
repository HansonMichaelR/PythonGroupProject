import React from 'react';
import DesMoines from './desmoines.jpg';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export const FrontEnd = () => {
    return (
        <div className='front-end-container'>
            <img src={DesMoines} className='des-moines-image' alt='nothing'/>
            <div className='image-source'>source: https://www.flickr.com/photos/w4nd3rl0st/5371338419</div>

            <div className='inputs-container'>
                <div className='input-directions'>Enter Desired House Information:</div>
                <Formik
                      initialValues={{ finishedSquareFeet: '', numberOfGarageStalls: ''}}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(async () => {
                          let response = await axios.get(`http://127.0.0.1:5000/regression?Input1=${values.finishedSquareFeet}&Input2=.85&Input3=23.1&Input4=55.2&Input5=66.3`);
                          console.log(response.data.data[0].Prediction)
                          setSubmitting(false);
                        }, 200);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className='form'>
                          <div className='data-input'>
                            <div className='left-column'>
                              <div>
                                <div>Finished Square Feet</div>
                                <Field type="text" name="finishedSquareFeet" className='input'/>
                              </div>
                            </div>
                            <div className='right-column'>
                              <div>
                                <div>Number Of Garage Stalls</div>
                                <Field type="text" name="numberOfGarageStalls" className='input'/>
                              </div>
                            </div>
                          </div>
                          <button type="submit" disabled={isSubmitting} className='submit'>
                            Calculate
                          </button>
                        </Form>
                      )}
                </Formik>
            </div>
        </div>
    );
}