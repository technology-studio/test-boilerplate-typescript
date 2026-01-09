import {
  configManager,
  Level,
} from '@txo-peer-dep/log'
import * as ConsoleLogger from '@txo/log-console'
// import * as ReactotronLogger from '@txo/log-reactotron'

configManager.update({
  loggerConfigMap: {
    [ConsoleLogger.LOGGER_KEY]: {
      writeLog: ConsoleLogger.writeLog,
      nodeEnvironmentList: ['production', 'development', 'test'],
    },
    // [ReactotronLogger.LOGGER_KEY]: {
    //   writeLog: ReactotronLogger.writeLog,
    //   nodeEnvironmentList: ['development'],
    // },
  },
  payloadProcessor: () => (payload: Record<string, unknown>) => JSON.stringify(payload, null, 2),
  defaultLevelForNodeEnvironmentMap: {
    production: Level.ERROR,
    development: Level.INFO,
  },
  levelOverride: {
    level: Level.DEBUG,
    namespacePatternList: [
      // '@txo.data-table.src.Api.TableProxy',
    ],
  },
})
