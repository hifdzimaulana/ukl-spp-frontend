export default interface IPagination<T> {
  currentPage: number;
  totalPage: number;
  rowLimit: number;
  count: number;
  rows: Array<T>;
}
