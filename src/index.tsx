import ProTable, { ProColumns, ActionType, ProTableProps, ColumnsState } from './Table';
import IndexColumn from './component/indexColumn';
import { RequestData } from './useFetchData';
import TableDropdown from './component/dropdown';
import TableStatus from './component/status';
import {
  IntlProvider,
  IntlConsumer,
  createIntl,
  IntlType,
  arEGIntl,
  zhCNIntl,
  enUSIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  ruRUIntl,
  msMYIntl,
  zhTWIntl,
} from './component/intlContext';
import Search from './form';
import defaultRenderText, { ProColumnsValueType } from './defaultRender';

export type {
  ProTableProps,
  IntlType,
  ColumnsState,
  ProColumnsValueType,
  ProColumns,
  ActionType,
  RequestData,
};

export {
  IndexColumn,
  TableDropdown,
  TableStatus,
  Search,
  IntlProvider,
  IntlConsumer,
  zhCNIntl,
  defaultRenderText,
  createIntl,
  arEGIntl,
  enUSIntl,
  viVNIntl,
  itITIntl,
  jaJPIntl,
  esESIntl,
  ruRUIntl,
  msMYIntl,
  zhTWIntl,
};

export default ProTable;
