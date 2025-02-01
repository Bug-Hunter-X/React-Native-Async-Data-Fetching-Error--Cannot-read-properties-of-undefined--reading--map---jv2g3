# React Native Asynchronous Data Fetching Bug

This repository demonstrates a common yet subtle bug in React Native applications involving asynchronous data fetching within the `useEffect` hook. The problem arises when the component unmounts before the asynchronous operation completes, leading to an error when trying to render the fetched data.

## Bug Description

The `bug.js` file contains a React Native component that fetches data from an API using `fetch`.  If the component unmounts before the `fetch` call completes and the `setData` function is called, attempting to render the data results in a `Cannot read properties of undefined (reading 'map')` error.

## Solution

The `bugSolution.js` file provides a solution using the `useIsMounted` hook which prevents the update of the component's state after it has unmounted. This is a robust approach that addresses the race condition between data fetching and component unmounting.  Alternatively, you can use a cleanup function within the `useEffect` to handle the unmounting.