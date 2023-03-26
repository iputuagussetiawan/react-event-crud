import React from 'react'
import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error=useRouteError();
  let title='An Error occured!';
  let message='Something went wrong';
  if(error.status===500){
    message=JSON.parse(error.data).message
  }
  if(error.status===404){
    title='Not Found';
    message='Could Not Find Resource';
  }
  return (
    <>
      <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  
  )
}

export default ErrorPage