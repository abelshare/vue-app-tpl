import * as log from 'loglevel';

// 非生產環境時輸出所有日志
log.setDefaultLevel(process.env.NODE_ENV === 'production' ? 2 : 0);

// 賦值全局變量，方便生產環境輸出
window.log = log;

export default log;
