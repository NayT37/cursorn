// see https://reactnavigation.org/docs/navigating-without-navigation-prop/

const {createNavigationContainerRef, CommonActions, StackActions} = require('@react-navigation/native');

export const navigationRef = createNavigationContainerRef();

// This is gonna work async
export function goToScreen(name: string, params: object = {}) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate(name, params));
    }
}

export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.goBack());
    }
}

export function replaceRoute(name: string, params: object = {}) {
    if (navigationRef.isReady()) {
        // Stack actions means we need to be inside a stack and the stack will be replaced
        navigationRef.dispatch(StackActions.replace(name, params));
    }
}

export function resetNavigation() {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: 'AuthStack'}],
            }),
        );
    }
}
