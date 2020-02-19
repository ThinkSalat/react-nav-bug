import { NavigationActions, StackActions } from 'react-navigation';
import { createRef } from 'react';

export const isMountedRef = createRef()
export const navigationRef = createRef();


export function setNavigator(nav) {
	console.info(navigationRef);
  if (nav && !navigationRef.current) {
    navigationRef.current = nav;
    console.log('Set Navigator')
  }
}

export function push(routeName, params) {
  if (routeName && isMountedRef.current && navigationRef.current) {
    const action = StackActions.push({ routeName, params })
    navigationRef.current.dispatch(action)
    console.log('PUSH to', routeName)
  }
}
 
export function navigate(routeName, params) {
  if (routeName && isMountedRef.current && navigationRef.current) {
		const action = NavigationActions.navigate({ routeName, params });
    navigationRef.current.dispatch(action);
    console.log('NAVIGATE to', routeName)
  }
}

export function goBack(params = {}) {
  if (isMountedRef.current && navigationRef.current) {
		const action = NavigationActions.back(params);
    navigationRef.current.dispatch(action);
    console.log('goBACK NAV')
  }
}

export function resetStack(index, routeName, params) {
  if (isMountedRef.current && navigationRef.current) {
    // const actions = routes.map( action => () => NavigationActions.navigate({ routeName: action.routeName, params: action.params }))
    const reset = StackActions.reset({
      index,
      actions: [
        NavigationActions.navigate({ routeName, params }),
      ],
    })
    navigationRef.current.dispatch(reset)
    console.log('RESET STACK Navigator', routeName)
  }
}

export function handleNavigationOptions(navObject) {
  if (navObject && isMountedRef.current && navigationRef.current) {
    switch (navObject.command) {
      case 'push':
        push(navObject.routeName, navObject)
        break;
      case 'goToRouteName':
        navigate(navObject.routeName, navObject)
        // yield put(NavigationActions.navigate({ routeName: navObject.routeName, params: navObject }))
        break;
      case 'noNavigation':
        break;
      case 'goBackFrom':
        goBack({ key: navObject.key })
        break;
      case 'goBack':
        goBack()
        break;
      default:
        goBack()
        break;
    }
  }
}
