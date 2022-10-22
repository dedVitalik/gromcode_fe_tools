export const createLogger = (loggerName) => {
    const logs = [];
    return {
        getLogs() {
            return logs;
        },
        log: (message) => {
            logs.push(`log - ${loggerName} - ${message}`);
        },
        error: (message) => {
            logs.push(`error - ${loggerName} - ${message}`);
        }
    }

};