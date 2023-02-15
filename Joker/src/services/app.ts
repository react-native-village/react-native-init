import {EventEmitter} from 'events';

import {AppState, Appearance} from 'react-native';

type appThemeType = 'light' | 'dark' | null | undefined;

class App extends EventEmitter {
  private appStatus: AppStatus = AppStatus.inactive;
  private appTheme: appThemeType;

  constructor() {
    super();
    Appearance.addChangeListener(this.onAppThemeChanged.bind(this) as any);
    AppState.addEventListener('change', this.onAppStatusChanged.bind(this));
  }

  async onAppStatusChanged() {
    const appStatus = getAppStatus();
    if (this.appStatus !== appStatus) {
      this.emit('theme-status', appStatus);
      this.appStatus = appStatus;
    }
  }

  onAppThemeChanged(theme: appThemeType) {
    if (this.appTheme !== theme && theme) {
      this.emit('theme-changed', theme);
      this.appTheme = theme;
    }
  }
}

enum AppStatus {
  inactive,
  active,
}

function getAppStatus() {
  return AppState.currentState === 'active'
    ? AppStatus.active
    : AppStatus.inactive;
}

export const app = new App();
