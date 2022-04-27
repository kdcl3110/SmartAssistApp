import moment from 'moment';

export const format_date = (date, format = 'DD / MM / YYYY') => moment(date).format(format);
