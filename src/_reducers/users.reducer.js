import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // mapeia os items, checando se id de user é igual ao a ação, e então adiciona a prop 'deleting: true' ao usuáriao sendo excluído 
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove o usuário excluído do estado
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove o atribut'o deleting:true' e adiciona 'deleteError:[error]' ao 'user'
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // faz uma cópia do obj user sem deletar o atributo 'deleting'
            const { deleting, ...userCopy } = user;
            // retorna uma cópia do obj user com a tributo 'deleteError:[error]'
            return { ...userCopy, deleteError: action.error };
          }
          return user;
        })
      };
    default:
      return state
  }
}