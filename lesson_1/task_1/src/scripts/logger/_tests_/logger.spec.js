import {createLogger} from '../logger';

it('should return stored logs', () => {
    const logger = createLogger('test');
    expect(logger.getLogs()).toEqual([]);
});

it('should log message', () => {
    const logger = createLogger('testLoggerName');
    logger.log('test message');
    expect(logger.getLogs()).toEqual(['log - testLoggerName - test message']);
});

it('should log error', () => {
    const logger = createLogger('test');
    logger.error('test message');
    expect(logger.getLogs()).toEqual(['error - test - test message']);
});
