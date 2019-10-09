import React from 'react';
import DesMoines from './desmoines.jpg';
import { Formik, Form, Field } from 'formik';

export const FrontEnd = () => {
    return (
        <div className='front-end-container'>
            <img src={DesMoines} className='des-moines-image' alt='nothing'/>
            <div className='image-source'>source: https://www.flickr.com/photos/w4nd3rl0st/5371338419</div>

            <div className='inputs-container'>
                <div className='input-directions'>Enter Desired House Information:</div>
                <Formik
                      initialValues={{ finishedSquareFeet: '', numberOfGarageStalls: '' }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 200);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form className='form'>
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