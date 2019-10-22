# -*- coding: utf-8 -*-
"""
Created on Thu Oct 10 11:01:11 2019

@author: Jeff Hendricks
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import AdaBoostClassifier
from sklearn.externals import joblib

allData = pd.read_csv('data/regClassTestData.csv', index_col=0)

## build regression model
X=allData.iloc[:,-5:]
y=allData.RegOut1

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=1)

lr=LinearRegression().fit(X_train, y_train)

joblib.dump(lr, 'regressionModel.pkl')

## build classification model
X=allData.iloc[:,-5:]
y=allData.ClassLabel

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=1)

ab = AdaBoostClassifier().fit(X_train, y_train)

joblib.dump(ab, 'classificationModel.pkl')