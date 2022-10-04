import { Queryable, RequestOptions } from '@orbit/data';
import { RecordOperation } from '../record-operation';
import { RecordQueryResult } from '../record-query';
import { RecordQueryBuilder } from '../record-query-builder';
import { RecordQueryExpression } from '../record-query-expression';

export type RecordQueryable<
  ResponseDetails,
  QueryBuilder = RecordQueryBuilder,
  QueryOptions extends RequestOptions = RequestOptions
> = Queryable<
  RecordQueryResult,
  ResponseDetails,
  RecordOperation,
  RecordQueryExpression,
  QueryBuilder,
  QueryOptions
>;
