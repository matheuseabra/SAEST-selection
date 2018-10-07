import { editalConstants } from '../_constants';

export function editais(state = {}, action) {
    switch (action.type) {
      case editalConstants.GETALL_REQUEST:
        return {
          loading: true
        };
      case editalConstants.GETALL_SUCCESS:
        return {
          items: action.editais
        };
      case editalConstants.GETALL_FAILURE:
        return { 
          error: action.error
        };
      case editalConstants.DELETE_REQUEST:
        // mapeia os items, checando se id de edital é igual ao a ação, e então adiciona a prop 'deleting: true' ao edital a ser excluído 
        return {
          ...state,
          items: state.items.map(edital =>
            edital.id === action.id
              ? { ...edital, deleting: true }
              : edital
          )
        };
      case editalConstants.DELETE_SUCCESS:
        // remove o usuário excluído do estado
        return {
          items: state.items.filter(edital => edital.id !== action.id)
        };
      case editalConstants.DELETE_FAILURE:

        return {
          ...state,
          items: state.items.map(edital => {
            if (edital.id === action.id) {       
              const { deleting, ...editalCopy } = edital;
              return { ...editalCopy, deleteError: action.error };
            }
            return edital;
          })
        };
      default:
        return state
    }
  }