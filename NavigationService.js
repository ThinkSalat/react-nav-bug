import { NavigationActions, StackActions } from 'react-navigation';

const config = {};

export function setNavigator(nav) {
  if (nav && !config.navigator) {
    config.navigator = nav;
    console.log('Set Navigator')
  }
}

export function push(routeName, params) {
  if (config.navigator && routeName) {
    const action = StackActions.push({ routeName, params })
    config.navigator.dispatch(action)
    console.log('PUSH to', routeName)
  }
}

export function navigate(routeName, params) {
  if (config.navigator && routeName) {
		const action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
    console.log('NAVIGATE to', routeName)
  } else {
		console.info('navigation failed, config.navigator or routname not provided', {config, routeName, params});
	}
}

export function goBack(params = {}) {
  if (config.navigator) {
		const action = NavigationActions.back(params);
    config.navigator.dispatch(action);
    console.log('goBACK NAV')
  }
}

export function resetStack(index, routeName, params) {
  if (config.navigator) {
    // const actions = routes.map( action => () => NavigationActions.navigate({ routeName: action.routeName, params: action.params }))
    const reset = StackActions.reset({
      index,
      actions: [
        NavigationActions.navigate({ routeName, params }),
      ],
    })
    config.navigator.dispatch(reset)
    console.log('RESET STACK Navigator', routeName)
  }
}

export function handleNavigationOptions(navObject) {
  if (navObject) {
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
