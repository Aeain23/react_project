import moment from 'moment';

export const releaseDate = (date, format = null) => {
  return format
    ? moment(date).format(format)
    : moment(date).format('DD-MMMM-YYYY');
};
