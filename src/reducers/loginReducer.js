const  LOGIN_PENDING = 'LOGIN_PENDING';
const  LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const  LOGIN_ERROR = 'LOGIN_ERROR';

export default function reducer(state = [
  'isLoginPending': false,
  'loginError': null,
  'isLoginSuccess': false
], action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
      debugger;
        return [
          ...state.   filter(isLoginSuccess => isLoginSuccess===isLoginSuccess),
          Object.assign({}, state['isLoginSuccess']: action.isLoginSuccess)
        ];

      case LOGIN_PENDING:
        return [...state,
           Object.assign({}, state.isLoginPending: action.isLoginPending)
        
        ];
      case LOGIN_ERROR:
      return [...state,
          Object.assign({}, state.loginError: action.loginError)
        
      ];
      default : return state;
}
}



