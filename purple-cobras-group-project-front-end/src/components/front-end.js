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
                      initialValues={
                        {
                          total_living_area: '',
                          garageStalls: '',
                          land_acres: '',
                          residence_type: '',
                          roof_material: '',
                          bathrooms: '',
                          fireplaces: '',
                          bedrooms: '',
                          rooms: '',
                          year_built: '',
                          air_conditioning: '1'
                        }
                      }
                      onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        setTimeout(async () => {
                          //the real url to use with our model
                          //`http://127.0.0.1:5000/regression?total_living_area=${values.total_living_area}&garageStalls=${values.garageStalls}&land_acres=${values.land_acres}&residence_type=${values.residence_type}&roof_material=${values.roof_material}&bathrooms=${values.bathrooms}&fireplaces=${values.fireplaces}&bedrooms=${values.bedrooms}&rooms=${values.rooms}&year_built=${values.year_built}&air_conditioning=${values.air_conditioning}`
                          let response = await axios.get(`http://127.0.0.1:5000/regression?Input1=${values.total_living_area}&Input2=${values.foundationType}&Input3=23.1&Input4=55.2&Input5=66.3`);
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
                              <Field type="text" name="total_living_area" className='input'/>
                            </div>
                            <div>
                              <div>Number of Bathrooms</div>
                              <Field type="text" name="bathrooms" className='input'/>
                            </div>
                            <div>
                              <div>Number of Fireplaces</div>
                              <Field type="text" name="fireplaces" className='input'/>
                            </div>
                            <div>
                              <div>Number of Bedrooms</div>
                              <Field type="text" name="bedrooms" className='input'/>
                            </div>
                            <div>
                              <div>Number of Rooms</div>
                              <Field type="text" name="rooms" className='input'/>
                            </div>
                            <div>
                              <div>Year Built</div>
                              <Field type="text" name="year_built" className='input'/>
                            </div>
                            <div>
                              <div>Residence Type</div>
                              <Field component="select" type="text" name="residence_type" className='input'>
                                <option value="0">Concrete</option>
                                <option value="1">Wood</option>
                                <option value="2">Dirt</option>
                                <option value="3">Dirt</option>
                                <option value="4">Dirt</option>
                                <option value="5">Dirt</option>
                                <option value="6">Dirt</option>
                                <option value="7">Dirt</option>
                                <option value="8">Dirt</option>
                                <option value="9">Dirt</option>
                                <option value="10">Dirt</option>
                              </Field>
                            </div>
                            <div>
                              <div>Roof Material</div>
                              <Field component="select" type="text" name="roof_material" className='input'>
                                <option value="0">Concrete</option>
                                <option value="1">Wood</option>
                                <option value="2">Dirt</option>
                                <option value="3">Dirt</option>
                                <option value="4">Dirt</option>
                                <option value="5">Dirt</option>
                                <option value="6">Dirt</option>
                                <option value="7">Dirt</option>
                              </Field>
                            </div>
                            <div>
                              <div>Has Air-Conditioning?</div>
                              <Field component="select" type="text" name="air_conditioning" className='input'>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                              </Field>
                            </div>
                            <div>
                              <div>Number Of Garage Stalls</div>
                              <Field type="text" name="garageStalls" className='input'/>
                            </div>
                            <div>
                              <div>Number of Acres</div>
                              <Field type="text" name="land_acres" className='input'/>
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
              <div className='result-title'>Estimated Price:</div>
              <div className='result-prediction'>${prediction}</div>
            </div>
        </div>
    );
}