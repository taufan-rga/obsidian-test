import { get } from 'lodash';
import moment from 'moment';
import { arrayRange, genderPick, getDays } from '~helpers';
import { AttendanceSliceProps } from '~types/redux/attendance';
import { Clock } from '~types/services';

export function date(data: any): AttendanceSliceProps['daily']['logs'] {
  return data?.map((log: any) => ({
    name: get(log, 'user_detail.name'),
    clockIn: get(log, 'clock_in'),
    clockOut: get(log, 'clock_out'),
  }));
}

export function today(data: { clock_in: Clock; clock_out: Clock }): AttendanceSliceProps['today'] {
  return {
    clockIn: get(data, 'clock_in', null),
    clockOut: get(data, 'clock_out', null),
  };
}

export function month(data: any, month: number): AttendanceSliceProps['monthly'] {
  const targetedTime = moment(month).toDate();

  const rawLogs = get(data, 'attendance_log', []);

  const user: AttendanceSliceProps['monthly']['user'] = {
    name: get(data, 'name'),
    nip: get(data, 'nip'),
    gender: genderPick(get(data, 'gender', '-')),
    photo: get(data, 'picture'),
  };

  const dateLogs = rawLogs.map((log: any) => {
    return { clockIn: get(log, 'clock_in', null), clockOut: get(log, 'clock_out', null), date: get(log, 'date', 0) };
  });

  const logs = arrayRange(1, getDays(targetedTime.getUTCFullYear(), targetedTime.getUTCMonth() + 1), 1).map(item => {
    const date = item < 10 ? `0${item}` : `${item}`;

    const todaysDate = new Date().getDate();

    const isToday = parseInt(date) === todaysDate;

    const rest = {
      clockIn: '-',
      clockOut: '-',
    };

    const theLog = dateLogs.find((log: any) => log?.date === date);

    if (theLog) Object.assign(rest, { ...theLog });

    return {
      ...rest,
      isToday,
      date,
    };
  });

  return {
    user,
    logs,
  };
}
