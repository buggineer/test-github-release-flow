/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_VERSION: string
  readonly VITE_ENV_NAME: string
}

declare const __BUILD_INFO__: { commit: string, builtAt: string }
