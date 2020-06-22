import * as React from 'preact';

const ErrorMessage = (props: { message: string }) => {
  return (
    <div id="errorMessage" style={{ color: 'red' }}>
      { props.message }
    </div>
  )
}

export default ErrorMessage;