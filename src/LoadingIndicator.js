import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

export function LoadingIndicator() {
            const { promiseInProgress } = usePromiseTracker();
            return(
              promiseInProgress && 
              <div style={{
                  width: "100%",
                  height: "100",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
              <Loader type="ThreeDots" color="#771572" height="100" width="100" />
              </div>
            ); 
}

