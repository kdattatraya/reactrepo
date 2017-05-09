import Promise from "es6-promise";

const  LOGIN_PENDING = 'LOGIN_PENDING';
const  LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const  LOGIN_ERROR = 'LOGIN_ERROR';

function setLoginPending(isLoginPending){
  return {
    type:LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess){
  return {
    type:LOGIN_SUCCESS,
    isLoginSuccess:true
  };
}

function setLoginError(Error){
  return {
    type:LOGIN_ERROR,
    loginError:Error
  };
}

export function login(email, password) {
  debugger;
  return dispatch => {
    // dispatch(setLoginPending(true));
    // dispatch(setLoginSuccess(false));
    // dispatch(setLoginError(null));
    
    sendLoginRequest(email,password).then(success => 
      {dispatch(setLoginPending(false));
      dispatch(setLoginSuccess(true));
    })
    .catch(err => {
      dispatch(setLoginPending(false));
      dispatch(setLoginError(err));
    });
  };
}


function sendLoginRequest(email,password) {
  return new Promise((resolve,reject) => {
    if(email == "ad@ex.com" && password == "abc") {
      return resolve(true);
    }else {
      return reject(new Error("Invalid email or password"));
    }
  })
}
