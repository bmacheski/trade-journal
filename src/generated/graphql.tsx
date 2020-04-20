import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  numeric: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "setup" */
  delete_setup?: Maybe<Setup_Mutation_Response>;
  /** delete data from the table: "symbol" */
  delete_symbol?: Maybe<Symbol_Mutation_Response>;
  /** delete data from the table: "trade" */
  delete_trade?: Maybe<Trade_Mutation_Response>;
  /** delete data from the table: "trade_setup" */
  delete_trade_setup?: Maybe<Trade_Setup_Mutation_Response>;
  /** insert data into the table: "setup" */
  insert_setup?: Maybe<Setup_Mutation_Response>;
  /** insert data into the table: "symbol" */
  insert_symbol?: Maybe<Symbol_Mutation_Response>;
  /** insert data into the table: "trade" */
  insert_trade?: Maybe<Trade_Mutation_Response>;
  /** insert data into the table: "trade_setup" */
  insert_trade_setup?: Maybe<Trade_Setup_Mutation_Response>;
  /** update data of the table: "setup" */
  update_setup?: Maybe<Setup_Mutation_Response>;
  /** update data of the table: "symbol" */
  update_symbol?: Maybe<Symbol_Mutation_Response>;
  /** update data of the table: "trade" */
  update_trade?: Maybe<Trade_Mutation_Response>;
  /** update data of the table: "trade_setup" */
  update_trade_setup?: Maybe<Trade_Setup_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_SetupArgs = {
  where: Setup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SymbolArgs = {
  where: Symbol_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TradeArgs = {
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trade_SetupArgs = {
  where: Trade_Setup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_SetupArgs = {
  objects: Array<Setup_Insert_Input>;
  on_conflict?: Maybe<Setup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SymbolArgs = {
  objects: Array<Symbol_Insert_Input>;
  on_conflict?: Maybe<Symbol_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TradeArgs = {
  objects: Array<Trade_Insert_Input>;
  on_conflict?: Maybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trade_SetupArgs = {
  objects: Array<Trade_Setup_Insert_Input>;
  on_conflict?: Maybe<Trade_Setup_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_SetupArgs = {
  _inc?: Maybe<Setup_Inc_Input>;
  _set?: Maybe<Setup_Set_Input>;
  where: Setup_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SymbolArgs = {
  _inc?: Maybe<Symbol_Inc_Input>;
  _set?: Maybe<Symbol_Set_Input>;
  where: Symbol_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_TradeArgs = {
  _inc?: Maybe<Trade_Inc_Input>;
  _set?: Maybe<Trade_Set_Input>;
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trade_SetupArgs = {
  _inc?: Maybe<Trade_Setup_Inc_Input>;
  _set?: Maybe<Trade_Setup_Set_Input>;
  where: Trade_Setup_Bool_Exp;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "setup" */
  setup: Array<Setup>;
  /** fetch aggregated fields from the table: "setup" */
  setup_aggregate: Setup_Aggregate;
  /** fetch data from the table: "setup" using primary key columns */
  setup_by_pk?: Maybe<Setup>;
  /** fetch data from the table: "symbol" */
  symbol: Array<Symbol>;
  /** fetch aggregated fields from the table: "symbol" */
  symbol_aggregate: Symbol_Aggregate;
  /** fetch data from the table: "symbol" using primary key columns */
  symbol_by_pk?: Maybe<Symbol>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** fetch data from the table: "trade_metric" */
  trade_metric: Array<Trade_Metric>;
  /** fetch aggregated fields from the table: "trade_metric" */
  trade_metric_aggregate: Trade_Metric_Aggregate;
  /** fetch data from the table: "trade_setup" */
  trade_setup: Array<Trade_Setup>;
  /** fetch aggregated fields from the table: "trade_setup" */
  trade_setup_aggregate: Trade_Setup_Aggregate;
  /** fetch data from the table: "trade_setup" using primary key columns */
  trade_setup_by_pk?: Maybe<Trade_Setup>;
};


/** query root */
export type Query_RootSetupArgs = {
  distinct_on?: Maybe<Array<Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Order_By>>;
  where?: Maybe<Setup_Bool_Exp>;
};


/** query root */
export type Query_RootSetup_AggregateArgs = {
  distinct_on?: Maybe<Array<Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Order_By>>;
  where?: Maybe<Setup_Bool_Exp>;
};


/** query root */
export type Query_RootSetup_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSymbolArgs = {
  distinct_on?: Maybe<Array<Symbol_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Symbol_Order_By>>;
  where?: Maybe<Symbol_Bool_Exp>;
};


/** query root */
export type Query_RootSymbol_AggregateArgs = {
  distinct_on?: Maybe<Array<Symbol_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Symbol_Order_By>>;
  where?: Maybe<Symbol_Bool_Exp>;
};


/** query root */
export type Query_RootSymbol_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTradeArgs = {
  distinct_on?: Maybe<Array<Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Order_By>>;
  where?: Maybe<Trade_Bool_Exp>;
};


/** query root */
export type Query_RootTrade_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Order_By>>;
  where?: Maybe<Trade_Bool_Exp>;
};


/** query root */
export type Query_RootTrade_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTrade_MetricArgs = {
  distinct_on?: Maybe<Array<Trade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Metric_Order_By>>;
  where?: Maybe<Trade_Metric_Bool_Exp>;
};


/** query root */
export type Query_RootTrade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Metric_Order_By>>;
  where?: Maybe<Trade_Metric_Bool_Exp>;
};


/** query root */
export type Query_RootTrade_SetupArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};


/** query root */
export type Query_RootTrade_Setup_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};


/** query root */
export type Query_RootTrade_Setup_By_PkArgs = {
  setup_id: Scalars['Int'];
  trade_id: Scalars['Int'];
};

/** columns and relationships of "setup" */
export type Setup = {
   __typename?: 'setup';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  trade_setups: Array<Trade_Setup>;
  /** An aggregated array relationship */
  trade_setups_aggregate: Trade_Setup_Aggregate;
};


/** columns and relationships of "setup" */
export type SetupTrade_SetupsArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};


/** columns and relationships of "setup" */
export type SetupTrade_Setups_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};

/** aggregated selection of "setup" */
export type Setup_Aggregate = {
   __typename?: 'setup_aggregate';
  aggregate?: Maybe<Setup_Aggregate_Fields>;
  nodes: Array<Setup>;
};

/** aggregate fields of "setup" */
export type Setup_Aggregate_Fields = {
   __typename?: 'setup_aggregate_fields';
  avg?: Maybe<Setup_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Setup_Max_Fields>;
  min?: Maybe<Setup_Min_Fields>;
  stddev?: Maybe<Setup_Stddev_Fields>;
  stddev_pop?: Maybe<Setup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Setup_Stddev_Samp_Fields>;
  sum?: Maybe<Setup_Sum_Fields>;
  var_pop?: Maybe<Setup_Var_Pop_Fields>;
  var_samp?: Maybe<Setup_Var_Samp_Fields>;
  variance?: Maybe<Setup_Variance_Fields>;
};


/** aggregate fields of "setup" */
export type Setup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Setup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "setup" */
export type Setup_Aggregate_Order_By = {
  avg?: Maybe<Setup_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Setup_Max_Order_By>;
  min?: Maybe<Setup_Min_Order_By>;
  stddev?: Maybe<Setup_Stddev_Order_By>;
  stddev_pop?: Maybe<Setup_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Setup_Stddev_Samp_Order_By>;
  sum?: Maybe<Setup_Sum_Order_By>;
  var_pop?: Maybe<Setup_Var_Pop_Order_By>;
  var_samp?: Maybe<Setup_Var_Samp_Order_By>;
  variance?: Maybe<Setup_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "setup" */
export type Setup_Arr_Rel_Insert_Input = {
  data: Array<Setup_Insert_Input>;
  on_conflict?: Maybe<Setup_On_Conflict>;
};

/** aggregate avg on columns */
export type Setup_Avg_Fields = {
   __typename?: 'setup_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "setup" */
export type Setup_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "setup". All fields are combined with a logical 'AND'. */
export type Setup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Setup_Bool_Exp>>>;
  _not?: Maybe<Setup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Setup_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  trade_setups?: Maybe<Trade_Setup_Bool_Exp>;
};

/** unique or primary key constraints on table "setup" */
export enum Setup_Constraint {
  /** unique or primary key constraint */
  SetupsPkey = 'setups_pkey'
}

/** input type for incrementing integer columne in table "setup" */
export type Setup_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "setup" */
export type Setup_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  trade_setups?: Maybe<Trade_Setup_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Setup_Max_Fields = {
   __typename?: 'setup_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "setup" */
export type Setup_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Setup_Min_Fields = {
   __typename?: 'setup_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "setup" */
export type Setup_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "setup" */
export type Setup_Mutation_Response = {
   __typename?: 'setup_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Setup>;
};

/** input type for inserting object relation for remote table "setup" */
export type Setup_Obj_Rel_Insert_Input = {
  data: Setup_Insert_Input;
  on_conflict?: Maybe<Setup_On_Conflict>;
};

/** on conflict condition type for table "setup" */
export type Setup_On_Conflict = {
  constraint: Setup_Constraint;
  update_columns: Array<Setup_Update_Column>;
  where?: Maybe<Setup_Bool_Exp>;
};

/** ordering options when selecting data from "setup" */
export type Setup_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  trade_setups_aggregate?: Maybe<Trade_Setup_Aggregate_Order_By>;
};

/** select columns of table "setup" */
export enum Setup_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "setup" */
export type Setup_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Setup_Stddev_Fields = {
   __typename?: 'setup_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "setup" */
export type Setup_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Setup_Stddev_Pop_Fields = {
   __typename?: 'setup_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "setup" */
export type Setup_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Setup_Stddev_Samp_Fields = {
   __typename?: 'setup_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "setup" */
export type Setup_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Setup_Sum_Fields = {
   __typename?: 'setup_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "setup" */
export type Setup_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "setup" */
export enum Setup_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Setup_Var_Pop_Fields = {
   __typename?: 'setup_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "setup" */
export type Setup_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Setup_Var_Samp_Fields = {
   __typename?: 'setup_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "setup" */
export type Setup_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Setup_Variance_Fields = {
   __typename?: 'setup_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "setup" */
export type Setup_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "setup" */
  setup: Array<Setup>;
  /** fetch aggregated fields from the table: "setup" */
  setup_aggregate: Setup_Aggregate;
  /** fetch data from the table: "setup" using primary key columns */
  setup_by_pk?: Maybe<Setup>;
  /** fetch data from the table: "symbol" */
  symbol: Array<Symbol>;
  /** fetch aggregated fields from the table: "symbol" */
  symbol_aggregate: Symbol_Aggregate;
  /** fetch data from the table: "symbol" using primary key columns */
  symbol_by_pk?: Maybe<Symbol>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** fetch data from the table: "trade_metric" */
  trade_metric: Array<Trade_Metric>;
  /** fetch aggregated fields from the table: "trade_metric" */
  trade_metric_aggregate: Trade_Metric_Aggregate;
  /** fetch data from the table: "trade_setup" */
  trade_setup: Array<Trade_Setup>;
  /** fetch aggregated fields from the table: "trade_setup" */
  trade_setup_aggregate: Trade_Setup_Aggregate;
  /** fetch data from the table: "trade_setup" using primary key columns */
  trade_setup_by_pk?: Maybe<Trade_Setup>;
};


/** subscription root */
export type Subscription_RootSetupArgs = {
  distinct_on?: Maybe<Array<Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Order_By>>;
  where?: Maybe<Setup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSetup_AggregateArgs = {
  distinct_on?: Maybe<Array<Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Setup_Order_By>>;
  where?: Maybe<Setup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSetup_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSymbolArgs = {
  distinct_on?: Maybe<Array<Symbol_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Symbol_Order_By>>;
  where?: Maybe<Symbol_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSymbol_AggregateArgs = {
  distinct_on?: Maybe<Array<Symbol_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Symbol_Order_By>>;
  where?: Maybe<Symbol_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSymbol_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTradeArgs = {
  distinct_on?: Maybe<Array<Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Order_By>>;
  where?: Maybe<Trade_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrade_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Order_By>>;
  where?: Maybe<Trade_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrade_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTrade_MetricArgs = {
  distinct_on?: Maybe<Array<Trade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Metric_Order_By>>;
  where?: Maybe<Trade_Metric_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Metric_Order_By>>;
  where?: Maybe<Trade_Metric_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrade_SetupArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrade_Setup_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrade_Setup_By_PkArgs = {
  setup_id: Scalars['Int'];
  trade_id: Scalars['Int'];
};

/** columns and relationships of "symbol" */
export type Symbol = {
   __typename?: 'symbol';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "symbol" */
export type Symbol_Aggregate = {
   __typename?: 'symbol_aggregate';
  aggregate?: Maybe<Symbol_Aggregate_Fields>;
  nodes: Array<Symbol>;
};

/** aggregate fields of "symbol" */
export type Symbol_Aggregate_Fields = {
   __typename?: 'symbol_aggregate_fields';
  avg?: Maybe<Symbol_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Symbol_Max_Fields>;
  min?: Maybe<Symbol_Min_Fields>;
  stddev?: Maybe<Symbol_Stddev_Fields>;
  stddev_pop?: Maybe<Symbol_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Symbol_Stddev_Samp_Fields>;
  sum?: Maybe<Symbol_Sum_Fields>;
  var_pop?: Maybe<Symbol_Var_Pop_Fields>;
  var_samp?: Maybe<Symbol_Var_Samp_Fields>;
  variance?: Maybe<Symbol_Variance_Fields>;
};


/** aggregate fields of "symbol" */
export type Symbol_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Symbol_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "symbol" */
export type Symbol_Aggregate_Order_By = {
  avg?: Maybe<Symbol_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Symbol_Max_Order_By>;
  min?: Maybe<Symbol_Min_Order_By>;
  stddev?: Maybe<Symbol_Stddev_Order_By>;
  stddev_pop?: Maybe<Symbol_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Symbol_Stddev_Samp_Order_By>;
  sum?: Maybe<Symbol_Sum_Order_By>;
  var_pop?: Maybe<Symbol_Var_Pop_Order_By>;
  var_samp?: Maybe<Symbol_Var_Samp_Order_By>;
  variance?: Maybe<Symbol_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "symbol" */
export type Symbol_Arr_Rel_Insert_Input = {
  data: Array<Symbol_Insert_Input>;
  on_conflict?: Maybe<Symbol_On_Conflict>;
};

/** aggregate avg on columns */
export type Symbol_Avg_Fields = {
   __typename?: 'symbol_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "symbol" */
export type Symbol_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "symbol". All fields are combined with a logical 'AND'. */
export type Symbol_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Symbol_Bool_Exp>>>;
  _not?: Maybe<Symbol_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Symbol_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "symbol" */
export enum Symbol_Constraint {
  /** unique or primary key constraint */
  SymbolsPkey = 'symbols_pkey'
}

/** input type for incrementing integer columne in table "symbol" */
export type Symbol_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "symbol" */
export type Symbol_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Symbol_Max_Fields = {
   __typename?: 'symbol_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "symbol" */
export type Symbol_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Symbol_Min_Fields = {
   __typename?: 'symbol_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "symbol" */
export type Symbol_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "symbol" */
export type Symbol_Mutation_Response = {
   __typename?: 'symbol_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Symbol>;
};

/** input type for inserting object relation for remote table "symbol" */
export type Symbol_Obj_Rel_Insert_Input = {
  data: Symbol_Insert_Input;
  on_conflict?: Maybe<Symbol_On_Conflict>;
};

/** on conflict condition type for table "symbol" */
export type Symbol_On_Conflict = {
  constraint: Symbol_Constraint;
  update_columns: Array<Symbol_Update_Column>;
  where?: Maybe<Symbol_Bool_Exp>;
};

/** ordering options when selecting data from "symbol" */
export type Symbol_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "symbol" */
export enum Symbol_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "symbol" */
export type Symbol_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Symbol_Stddev_Fields = {
   __typename?: 'symbol_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "symbol" */
export type Symbol_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Symbol_Stddev_Pop_Fields = {
   __typename?: 'symbol_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "symbol" */
export type Symbol_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Symbol_Stddev_Samp_Fields = {
   __typename?: 'symbol_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "symbol" */
export type Symbol_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Symbol_Sum_Fields = {
   __typename?: 'symbol_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "symbol" */
export type Symbol_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "symbol" */
export enum Symbol_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Symbol_Var_Pop_Fields = {
   __typename?: 'symbol_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "symbol" */
export type Symbol_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Symbol_Var_Samp_Fields = {
   __typename?: 'symbol_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "symbol" */
export type Symbol_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Symbol_Variance_Fields = {
   __typename?: 'symbol_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "symbol" */
export type Symbol_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "trade" */
export type Trade = {
   __typename?: 'trade';
  action?: Maybe<Scalars['String']>;
  entry_date?: Maybe<Scalars['date']>;
  entry_price?: Maybe<Scalars['numeric']>;
  exit_date?: Maybe<Scalars['date']>;
  exit_price?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  risk_reward?: Maybe<Scalars['String']>;
  stop_loss?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  symbol?: Maybe<Symbol>;
  take_profit?: Maybe<Scalars['numeric']>;
  target?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  trade_setups: Array<Trade_Setup>;
  /** An aggregated array relationship */
  trade_setups_aggregate: Trade_Setup_Aggregate;
};


/** columns and relationships of "trade" */
export type TradeTrade_SetupsArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};


/** columns and relationships of "trade" */
export type TradeTrade_Setups_AggregateArgs = {
  distinct_on?: Maybe<Array<Trade_Setup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Trade_Setup_Order_By>>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};

/** aggregated selection of "trade" */
export type Trade_Aggregate = {
   __typename?: 'trade_aggregate';
  aggregate?: Maybe<Trade_Aggregate_Fields>;
  nodes: Array<Trade>;
};

/** aggregate fields of "trade" */
export type Trade_Aggregate_Fields = {
   __typename?: 'trade_aggregate_fields';
  avg?: Maybe<Trade_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Trade_Max_Fields>;
  min?: Maybe<Trade_Min_Fields>;
  stddev?: Maybe<Trade_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Sum_Fields>;
  var_pop?: Maybe<Trade_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Var_Samp_Fields>;
  variance?: Maybe<Trade_Variance_Fields>;
};


/** aggregate fields of "trade" */
export type Trade_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Trade_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade" */
export type Trade_Aggregate_Order_By = {
  avg?: Maybe<Trade_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Trade_Max_Order_By>;
  min?: Maybe<Trade_Min_Order_By>;
  stddev?: Maybe<Trade_Stddev_Order_By>;
  stddev_pop?: Maybe<Trade_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Trade_Stddev_Samp_Order_By>;
  sum?: Maybe<Trade_Sum_Order_By>;
  var_pop?: Maybe<Trade_Var_Pop_Order_By>;
  var_samp?: Maybe<Trade_Var_Samp_Order_By>;
  variance?: Maybe<Trade_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trade" */
export type Trade_Arr_Rel_Insert_Input = {
  data: Array<Trade_Insert_Input>;
  on_conflict?: Maybe<Trade_On_Conflict>;
};

/** aggregate avg on columns */
export type Trade_Avg_Fields = {
   __typename?: 'trade_avg_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade" */
export type Trade_Avg_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type Trade_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Trade_Bool_Exp>>>;
  _not?: Maybe<Trade_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Trade_Bool_Exp>>>;
  action?: Maybe<String_Comparison_Exp>;
  entry_date?: Maybe<Date_Comparison_Exp>;
  entry_price?: Maybe<Numeric_Comparison_Exp>;
  exit_date?: Maybe<Date_Comparison_Exp>;
  exit_price?: Maybe<Numeric_Comparison_Exp>;
  fees?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  pair?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
  risk_reward?: Maybe<String_Comparison_Exp>;
  stop_loss?: Maybe<Numeric_Comparison_Exp>;
  symbol?: Maybe<Symbol_Bool_Exp>;
  take_profit?: Maybe<Numeric_Comparison_Exp>;
  target?: Maybe<Numeric_Comparison_Exp>;
  trade_setups?: Maybe<Trade_Setup_Bool_Exp>;
};

/** unique or primary key constraints on table "trade" */
export enum Trade_Constraint {
  /** unique or primary key constraint */
  TradesPkey = 'trades_pkey'
}

/** input type for incrementing integer columne in table "trade" */
export type Trade_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  pair?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "trade" */
export type Trade_Insert_Input = {
  action?: Maybe<Scalars['String']>;
  entry_date?: Maybe<Scalars['date']>;
  entry_price?: Maybe<Scalars['numeric']>;
  exit_date?: Maybe<Scalars['date']>;
  exit_price?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  risk_reward?: Maybe<Scalars['String']>;
  stop_loss?: Maybe<Scalars['numeric']>;
  symbol?: Maybe<Symbol_Obj_Rel_Insert_Input>;
  take_profit?: Maybe<Scalars['numeric']>;
  target?: Maybe<Scalars['numeric']>;
  trade_setups?: Maybe<Trade_Setup_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Trade_Max_Fields = {
   __typename?: 'trade_max_fields';
  action?: Maybe<Scalars['String']>;
  entry_date?: Maybe<Scalars['date']>;
  entry_price?: Maybe<Scalars['numeric']>;
  exit_date?: Maybe<Scalars['date']>;
  exit_price?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  risk_reward?: Maybe<Scalars['String']>;
  stop_loss?: Maybe<Scalars['numeric']>;
  take_profit?: Maybe<Scalars['numeric']>;
  target?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "trade" */
export type Trade_Max_Order_By = {
  action?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  entry_price?: Maybe<Order_By>;
  exit_date?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  risk_reward?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** columns and relationships of "trade_metric" */
export type Trade_Metric = {
   __typename?: 'trade_metric';
  longs?: Maybe<Scalars['bigint']>;
  return?: Maybe<Scalars['numeric']>;
  shorts?: Maybe<Scalars['bigint']>;
  total_trades?: Maybe<Scalars['bigint']>;
  wins?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "trade_metric" */
export type Trade_Metric_Aggregate = {
   __typename?: 'trade_metric_aggregate';
  aggregate?: Maybe<Trade_Metric_Aggregate_Fields>;
  nodes: Array<Trade_Metric>;
};

/** aggregate fields of "trade_metric" */
export type Trade_Metric_Aggregate_Fields = {
   __typename?: 'trade_metric_aggregate_fields';
  avg?: Maybe<Trade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Trade_Metric_Max_Fields>;
  min?: Maybe<Trade_Metric_Min_Fields>;
  stddev?: Maybe<Trade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Metric_Sum_Fields>;
  var_pop?: Maybe<Trade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Trade_Metric_Variance_Fields>;
};


/** aggregate fields of "trade_metric" */
export type Trade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Trade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade_metric" */
export type Trade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Trade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Trade_Metric_Max_Order_By>;
  min?: Maybe<Trade_Metric_Min_Order_By>;
  stddev?: Maybe<Trade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Trade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Trade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Trade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Trade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Trade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Trade_Metric_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Trade_Metric_Avg_Fields = {
   __typename?: 'trade_metric_avg_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade_metric" */
export type Trade_Metric_Avg_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trade_metric". All fields are combined with a logical 'AND'. */
export type Trade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Trade_Metric_Bool_Exp>>>;
  _not?: Maybe<Trade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Trade_Metric_Bool_Exp>>>;
  longs?: Maybe<Bigint_Comparison_Exp>;
  return?: Maybe<Numeric_Comparison_Exp>;
  shorts?: Maybe<Bigint_Comparison_Exp>;
  total_trades?: Maybe<Bigint_Comparison_Exp>;
  wins?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Trade_Metric_Max_Fields = {
   __typename?: 'trade_metric_max_fields';
  longs?: Maybe<Scalars['bigint']>;
  return?: Maybe<Scalars['numeric']>;
  shorts?: Maybe<Scalars['bigint']>;
  total_trades?: Maybe<Scalars['bigint']>;
  wins?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "trade_metric" */
export type Trade_Metric_Max_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Metric_Min_Fields = {
   __typename?: 'trade_metric_min_fields';
  longs?: Maybe<Scalars['bigint']>;
  return?: Maybe<Scalars['numeric']>;
  shorts?: Maybe<Scalars['bigint']>;
  total_trades?: Maybe<Scalars['bigint']>;
  wins?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "trade_metric" */
export type Trade_Metric_Min_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** ordering options when selecting data from "trade_metric" */
export type Trade_Metric_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** select columns of table "trade_metric" */
export enum Trade_Metric_Select_Column {
  /** column name */
  Longs = 'longs',
  /** column name */
  Return = 'return',
  /** column name */
  Shorts = 'shorts',
  /** column name */
  TotalTrades = 'total_trades',
  /** column name */
  Wins = 'wins'
}

/** aggregate stddev on columns */
export type Trade_Metric_Stddev_Fields = {
   __typename?: 'trade_metric_stddev_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade_metric" */
export type Trade_Metric_Stddev_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Metric_Stddev_Pop_Fields = {
   __typename?: 'trade_metric_stddev_pop_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade_metric" */
export type Trade_Metric_Stddev_Pop_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Metric_Stddev_Samp_Fields = {
   __typename?: 'trade_metric_stddev_samp_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade_metric" */
export type Trade_Metric_Stddev_Samp_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Trade_Metric_Sum_Fields = {
   __typename?: 'trade_metric_sum_fields';
  longs?: Maybe<Scalars['bigint']>;
  return?: Maybe<Scalars['numeric']>;
  shorts?: Maybe<Scalars['bigint']>;
  total_trades?: Maybe<Scalars['bigint']>;
  wins?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "trade_metric" */
export type Trade_Metric_Sum_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Trade_Metric_Var_Pop_Fields = {
   __typename?: 'trade_metric_var_pop_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade_metric" */
export type Trade_Metric_Var_Pop_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Metric_Var_Samp_Fields = {
   __typename?: 'trade_metric_var_samp_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade_metric" */
export type Trade_Metric_Var_Samp_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Metric_Variance_Fields = {
   __typename?: 'trade_metric_variance_fields';
  longs?: Maybe<Scalars['Float']>;
  return?: Maybe<Scalars['Float']>;
  shorts?: Maybe<Scalars['Float']>;
  total_trades?: Maybe<Scalars['Float']>;
  wins?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade_metric" */
export type Trade_Metric_Variance_Order_By = {
  longs?: Maybe<Order_By>;
  return?: Maybe<Order_By>;
  shorts?: Maybe<Order_By>;
  total_trades?: Maybe<Order_By>;
  wins?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Min_Fields = {
   __typename?: 'trade_min_fields';
  action?: Maybe<Scalars['String']>;
  entry_date?: Maybe<Scalars['date']>;
  entry_price?: Maybe<Scalars['numeric']>;
  exit_date?: Maybe<Scalars['date']>;
  exit_price?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  risk_reward?: Maybe<Scalars['String']>;
  stop_loss?: Maybe<Scalars['numeric']>;
  take_profit?: Maybe<Scalars['numeric']>;
  target?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "trade" */
export type Trade_Min_Order_By = {
  action?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  entry_price?: Maybe<Order_By>;
  exit_date?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  risk_reward?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** response of any mutation on the table "trade" */
export type Trade_Mutation_Response = {
   __typename?: 'trade_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Trade>;
};

/** input type for inserting object relation for remote table "trade" */
export type Trade_Obj_Rel_Insert_Input = {
  data: Trade_Insert_Input;
  on_conflict?: Maybe<Trade_On_Conflict>;
};

/** on conflict condition type for table "trade" */
export type Trade_On_Conflict = {
  constraint: Trade_Constraint;
  update_columns: Array<Trade_Update_Column>;
  where?: Maybe<Trade_Bool_Exp>;
};

/** ordering options when selecting data from "trade" */
export type Trade_Order_By = {
  action?: Maybe<Order_By>;
  entry_date?: Maybe<Order_By>;
  entry_price?: Maybe<Order_By>;
  exit_date?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  risk_reward?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  symbol?: Maybe<Symbol_Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
  trade_setups_aggregate?: Maybe<Trade_Setup_Aggregate_Order_By>;
};

/** select columns of table "trade" */
export enum Trade_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  EntryPrice = 'entry_price',
  /** column name */
  ExitDate = 'exit_date',
  /** column name */
  ExitPrice = 'exit_price',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Notes = 'notes',
  /** column name */
  Pair = 'pair',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RiskReward = 'risk_reward',
  /** column name */
  StopLoss = 'stop_loss',
  /** column name */
  TakeProfit = 'take_profit',
  /** column name */
  Target = 'target'
}

/** input type for updating data in table "trade" */
export type Trade_Set_Input = {
  action?: Maybe<Scalars['String']>;
  entry_date?: Maybe<Scalars['date']>;
  entry_price?: Maybe<Scalars['numeric']>;
  exit_date?: Maybe<Scalars['date']>;
  exit_price?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  image_url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  pair?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  risk_reward?: Maybe<Scalars['String']>;
  stop_loss?: Maybe<Scalars['numeric']>;
  take_profit?: Maybe<Scalars['numeric']>;
  target?: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "trade_setup" */
export type Trade_Setup = {
   __typename?: 'trade_setup';
  setup_id: Scalars['Int'];
  trade_id: Scalars['Int'];
};

/** aggregated selection of "trade_setup" */
export type Trade_Setup_Aggregate = {
   __typename?: 'trade_setup_aggregate';
  aggregate?: Maybe<Trade_Setup_Aggregate_Fields>;
  nodes: Array<Trade_Setup>;
};

/** aggregate fields of "trade_setup" */
export type Trade_Setup_Aggregate_Fields = {
   __typename?: 'trade_setup_aggregate_fields';
  avg?: Maybe<Trade_Setup_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Trade_Setup_Max_Fields>;
  min?: Maybe<Trade_Setup_Min_Fields>;
  stddev?: Maybe<Trade_Setup_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Setup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Setup_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Setup_Sum_Fields>;
  var_pop?: Maybe<Trade_Setup_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Setup_Var_Samp_Fields>;
  variance?: Maybe<Trade_Setup_Variance_Fields>;
};


/** aggregate fields of "trade_setup" */
export type Trade_Setup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Trade_Setup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade_setup" */
export type Trade_Setup_Aggregate_Order_By = {
  avg?: Maybe<Trade_Setup_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Trade_Setup_Max_Order_By>;
  min?: Maybe<Trade_Setup_Min_Order_By>;
  stddev?: Maybe<Trade_Setup_Stddev_Order_By>;
  stddev_pop?: Maybe<Trade_Setup_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Trade_Setup_Stddev_Samp_Order_By>;
  sum?: Maybe<Trade_Setup_Sum_Order_By>;
  var_pop?: Maybe<Trade_Setup_Var_Pop_Order_By>;
  var_samp?: Maybe<Trade_Setup_Var_Samp_Order_By>;
  variance?: Maybe<Trade_Setup_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trade_setup" */
export type Trade_Setup_Arr_Rel_Insert_Input = {
  data: Array<Trade_Setup_Insert_Input>;
  on_conflict?: Maybe<Trade_Setup_On_Conflict>;
};

/** aggregate avg on columns */
export type Trade_Setup_Avg_Fields = {
   __typename?: 'trade_setup_avg_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade_setup" */
export type Trade_Setup_Avg_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trade_setup". All fields are combined with a logical 'AND'. */
export type Trade_Setup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Trade_Setup_Bool_Exp>>>;
  _not?: Maybe<Trade_Setup_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Trade_Setup_Bool_Exp>>>;
  setup_id?: Maybe<Int_Comparison_Exp>;
  trade_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "trade_setup" */
export enum Trade_Setup_Constraint {
  /** unique or primary key constraint */
  TradeSetupPkey = 'trade_setup_pkey'
}

/** input type for incrementing integer columne in table "trade_setup" */
export type Trade_Setup_Inc_Input = {
  setup_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "trade_setup" */
export type Trade_Setup_Insert_Input = {
  setup_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Trade_Setup_Max_Fields = {
   __typename?: 'trade_setup_max_fields';
  setup_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "trade_setup" */
export type Trade_Setup_Max_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Setup_Min_Fields = {
   __typename?: 'trade_setup_min_fields';
  setup_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "trade_setup" */
export type Trade_Setup_Min_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "trade_setup" */
export type Trade_Setup_Mutation_Response = {
   __typename?: 'trade_setup_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Trade_Setup>;
};

/** input type for inserting object relation for remote table "trade_setup" */
export type Trade_Setup_Obj_Rel_Insert_Input = {
  data: Trade_Setup_Insert_Input;
  on_conflict?: Maybe<Trade_Setup_On_Conflict>;
};

/** on conflict condition type for table "trade_setup" */
export type Trade_Setup_On_Conflict = {
  constraint: Trade_Setup_Constraint;
  update_columns: Array<Trade_Setup_Update_Column>;
  where?: Maybe<Trade_Setup_Bool_Exp>;
};

/** ordering options when selecting data from "trade_setup" */
export type Trade_Setup_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** select columns of table "trade_setup" */
export enum Trade_Setup_Select_Column {
  /** column name */
  SetupId = 'setup_id',
  /** column name */
  TradeId = 'trade_id'
}

/** input type for updating data in table "trade_setup" */
export type Trade_Setup_Set_Input = {
  setup_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Trade_Setup_Stddev_Fields = {
   __typename?: 'trade_setup_stddev_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade_setup" */
export type Trade_Setup_Stddev_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Setup_Stddev_Pop_Fields = {
   __typename?: 'trade_setup_stddev_pop_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade_setup" */
export type Trade_Setup_Stddev_Pop_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Setup_Stddev_Samp_Fields = {
   __typename?: 'trade_setup_stddev_samp_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade_setup" */
export type Trade_Setup_Stddev_Samp_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Trade_Setup_Sum_Fields = {
   __typename?: 'trade_setup_sum_fields';
  setup_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "trade_setup" */
export type Trade_Setup_Sum_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** update columns of table "trade_setup" */
export enum Trade_Setup_Update_Column {
  /** column name */
  SetupId = 'setup_id',
  /** column name */
  TradeId = 'trade_id'
}

/** aggregate var_pop on columns */
export type Trade_Setup_Var_Pop_Fields = {
   __typename?: 'trade_setup_var_pop_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade_setup" */
export type Trade_Setup_Var_Pop_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Setup_Var_Samp_Fields = {
   __typename?: 'trade_setup_var_samp_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade_setup" */
export type Trade_Setup_Var_Samp_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Setup_Variance_Fields = {
   __typename?: 'trade_setup_variance_fields';
  setup_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade_setup" */
export type Trade_Setup_Variance_Order_By = {
  setup_id?: Maybe<Order_By>;
  trade_id?: Maybe<Order_By>;
};

/** aggregate stddev on columns */
export type Trade_Stddev_Fields = {
   __typename?: 'trade_stddev_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade" */
export type Trade_Stddev_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Stddev_Pop_Fields = {
   __typename?: 'trade_stddev_pop_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade" */
export type Trade_Stddev_Pop_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Stddev_Samp_Fields = {
   __typename?: 'trade_stddev_samp_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade" */
export type Trade_Stddev_Samp_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Trade_Sum_Fields = {
   __typename?: 'trade_sum_fields';
  entry_price?: Maybe<Scalars['numeric']>;
  exit_price?: Maybe<Scalars['numeric']>;
  fees?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  pair?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  stop_loss?: Maybe<Scalars['numeric']>;
  take_profit?: Maybe<Scalars['numeric']>;
  target?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "trade" */
export type Trade_Sum_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** update columns of table "trade" */
export enum Trade_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  EntryDate = 'entry_date',
  /** column name */
  EntryPrice = 'entry_price',
  /** column name */
  ExitDate = 'exit_date',
  /** column name */
  ExitPrice = 'exit_price',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Notes = 'notes',
  /** column name */
  Pair = 'pair',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RiskReward = 'risk_reward',
  /** column name */
  StopLoss = 'stop_loss',
  /** column name */
  TakeProfit = 'take_profit',
  /** column name */
  Target = 'target'
}

/** aggregate var_pop on columns */
export type Trade_Var_Pop_Fields = {
   __typename?: 'trade_var_pop_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade" */
export type Trade_Var_Pop_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Var_Samp_Fields = {
   __typename?: 'trade_var_samp_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade" */
export type Trade_Var_Samp_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Variance_Fields = {
   __typename?: 'trade_variance_fields';
  entry_price?: Maybe<Scalars['Float']>;
  exit_price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pair?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  stop_loss?: Maybe<Scalars['Float']>;
  take_profit?: Maybe<Scalars['Float']>;
  target?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade" */
export type Trade_Variance_Order_By = {
  entry_price?: Maybe<Order_By>;
  exit_price?: Maybe<Order_By>;
  fees?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pair?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  stop_loss?: Maybe<Order_By>;
  take_profit?: Maybe<Order_By>;
  target?: Maybe<Order_By>;
};

export type GetSetupQueryVariables = {};


export type GetSetupQuery = (
  { __typename?: 'query_root' }
  & { setup: Array<(
    { __typename?: 'setup' }
    & Pick<Setup, 'id' | 'name'>
  )> }
);

export type GetSymbolQueryVariables = {};


export type GetSymbolQuery = (
  { __typename?: 'query_root' }
  & { symbol: Array<(
    { __typename?: 'symbol' }
    & Pick<Symbol, 'id' | 'name'>
  )> }
);

export type GetTradeQueryVariables = {
  id?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Trade_Order_By>>;
};


export type GetTradeQuery = (
  { __typename?: 'query_root' }
  & { trade: Array<(
    { __typename?: 'trade' }
    & Pick<Trade, 'id' | 'action' | 'entry_date' | 'entry_price' | 'exit_date' | 'exit_price' | 'fees' | 'image_url' | 'notes' | 'quantity' | 'risk_reward' | 'stop_loss' | 'target' | 'take_profit'>
    & { symbol?: Maybe<(
      { __typename?: 'symbol' }
      & Pick<Symbol, 'id' | 'name'>
    )>, trade_setups: Array<(
      { __typename?: 'trade_setup' }
      & Pick<Trade_Setup, 'setup_id' | 'trade_id'>
    )> }
  )>, trade_aggregate: (
    { __typename?: 'trade_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'trade_aggregate_fields' }
      & Pick<Trade_Aggregate_Fields, 'count'>
    )> }
  ), setup: Array<(
    { __typename?: 'setup' }
    & Pick<Setup, 'id' | 'name'>
  )> }
);

export type UpdateTradeMutationVariables = {
  id?: Maybe<Scalars['Int']>;
  changes?: Maybe<Trade_Set_Input>;
};


export type UpdateTradeMutation = (
  { __typename?: 'mutation_root' }
  & { update_trade?: Maybe<(
    { __typename?: 'trade_mutation_response' }
    & Pick<Trade_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'trade' }
      & Pick<Trade, 'id'>
    )> }
  )> }
);

export type CreateTradeMutationVariables = {
  trade: Trade_Insert_Input;
};


export type CreateTradeMutation = (
  { __typename?: 'mutation_root' }
  & { insert_trade?: Maybe<(
    { __typename?: 'trade_mutation_response' }
    & { returning: Array<(
      { __typename?: 'trade' }
      & Pick<Trade, 'id'>
    )> }
  )> }
);

export type DeleteTradeMutationVariables = {
  id?: Maybe<Scalars['Int']>;
};


export type DeleteTradeMutation = (
  { __typename?: 'mutation_root' }
  & { delete_trade?: Maybe<(
    { __typename?: 'trade_mutation_response' }
    & Pick<Trade_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'trade' }
      & Pick<Trade, 'id'>
    )> }
  )> }
);

export type GetMetricQueryVariables = {};


export type GetMetricQuery = (
  { __typename?: 'query_root' }
  & { trade_metric: Array<(
    { __typename?: 'trade_metric' }
    & Pick<Trade_Metric, 'longs' | 'shorts' | 'return' | 'total_trades' | 'wins'>
  )> }
);


export const GetSetupDocument = gql`
    query getSetup {
  setup {
    id
    name
  }
}
    `;

/**
 * __useGetSetupQuery__
 *
 * To run a query within a React component, call `useGetSetupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSetupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSetupQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSetupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSetupQuery, GetSetupQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSetupQuery, GetSetupQueryVariables>(GetSetupDocument, baseOptions);
      }
export function useGetSetupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSetupQuery, GetSetupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSetupQuery, GetSetupQueryVariables>(GetSetupDocument, baseOptions);
        }
export type GetSetupQueryHookResult = ReturnType<typeof useGetSetupQuery>;
export type GetSetupLazyQueryHookResult = ReturnType<typeof useGetSetupLazyQuery>;
export type GetSetupQueryResult = ApolloReactCommon.QueryResult<GetSetupQuery, GetSetupQueryVariables>;
export const GetSymbolDocument = gql`
    query getSymbol {
  symbol {
    id
    name
  }
}
    `;

/**
 * __useGetSymbolQuery__
 *
 * To run a query within a React component, call `useGetSymbolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSymbolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSymbolQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSymbolQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSymbolQuery, GetSymbolQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSymbolQuery, GetSymbolQueryVariables>(GetSymbolDocument, baseOptions);
      }
export function useGetSymbolLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSymbolQuery, GetSymbolQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSymbolQuery, GetSymbolQueryVariables>(GetSymbolDocument, baseOptions);
        }
export type GetSymbolQueryHookResult = ReturnType<typeof useGetSymbolQuery>;
export type GetSymbolLazyQueryHookResult = ReturnType<typeof useGetSymbolLazyQuery>;
export type GetSymbolQueryResult = ApolloReactCommon.QueryResult<GetSymbolQuery, GetSymbolQueryVariables>;
export const GetTradeDocument = gql`
    query getTrade($id: Int, $skip: Int, $order: [trade_order_by!]) {
  trade(limit: 10, offset: $skip, where: {id: {_eq: $id}}, order_by: $order) {
    id
    action
    entry_date
    entry_price
    exit_date
    exit_price
    fees
    image_url
    notes
    quantity
    risk_reward
    stop_loss
    symbol {
      id
      name
    }
    target
    take_profit
    trade_setups {
      setup_id
      trade_id
    }
  }
  trade_aggregate {
    aggregate {
      count
    }
  }
  setup {
    id
    name
  }
}
    `;

/**
 * __useGetTradeQuery__
 *
 * To run a query within a React component, call `useGetTradeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTradeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTradeQuery({
 *   variables: {
 *      id: // value for 'id'
 *      skip: // value for 'skip'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetTradeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTradeQuery, GetTradeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTradeQuery, GetTradeQueryVariables>(GetTradeDocument, baseOptions);
      }
export function useGetTradeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTradeQuery, GetTradeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTradeQuery, GetTradeQueryVariables>(GetTradeDocument, baseOptions);
        }
export type GetTradeQueryHookResult = ReturnType<typeof useGetTradeQuery>;
export type GetTradeLazyQueryHookResult = ReturnType<typeof useGetTradeLazyQuery>;
export type GetTradeQueryResult = ApolloReactCommon.QueryResult<GetTradeQuery, GetTradeQueryVariables>;
export const UpdateTradeDocument = gql`
    mutation updateTrade($id: Int, $changes: trade_set_input) {
  update_trade(where: {id: {_eq: $id}}, _set: $changes) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type UpdateTradeMutationFn = ApolloReactCommon.MutationFunction<UpdateTradeMutation, UpdateTradeMutationVariables>;

/**
 * __useUpdateTradeMutation__
 *
 * To run a mutation, you first call `useUpdateTradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTradeMutation, { data, loading, error }] = useUpdateTradeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      changes: // value for 'changes'
 *   },
 * });
 */
export function useUpdateTradeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTradeMutation, UpdateTradeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTradeMutation, UpdateTradeMutationVariables>(UpdateTradeDocument, baseOptions);
      }
export type UpdateTradeMutationHookResult = ReturnType<typeof useUpdateTradeMutation>;
export type UpdateTradeMutationResult = ApolloReactCommon.MutationResult<UpdateTradeMutation>;
export type UpdateTradeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTradeMutation, UpdateTradeMutationVariables>;
export const CreateTradeDocument = gql`
    mutation createTrade($trade: trade_insert_input!) {
  insert_trade(objects: [$trade]) {
    returning {
      id
    }
  }
}
    `;
export type CreateTradeMutationFn = ApolloReactCommon.MutationFunction<CreateTradeMutation, CreateTradeMutationVariables>;

/**
 * __useCreateTradeMutation__
 *
 * To run a mutation, you first call `useCreateTradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTradeMutation, { data, loading, error }] = useCreateTradeMutation({
 *   variables: {
 *      trade: // value for 'trade'
 *   },
 * });
 */
export function useCreateTradeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTradeMutation, CreateTradeMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTradeMutation, CreateTradeMutationVariables>(CreateTradeDocument, baseOptions);
      }
export type CreateTradeMutationHookResult = ReturnType<typeof useCreateTradeMutation>;
export type CreateTradeMutationResult = ApolloReactCommon.MutationResult<CreateTradeMutation>;
export type CreateTradeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTradeMutation, CreateTradeMutationVariables>;
export const DeleteTradeDocument = gql`
    mutation deleteTrade($id: Int) {
  delete_trade(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type DeleteTradeMutationFn = ApolloReactCommon.MutationFunction<DeleteTradeMutation, DeleteTradeMutationVariables>;

/**
 * __useDeleteTradeMutation__
 *
 * To run a mutation, you first call `useDeleteTradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTradeMutation, { data, loading, error }] = useDeleteTradeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTradeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTradeMutation, DeleteTradeMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTradeMutation, DeleteTradeMutationVariables>(DeleteTradeDocument, baseOptions);
      }
export type DeleteTradeMutationHookResult = ReturnType<typeof useDeleteTradeMutation>;
export type DeleteTradeMutationResult = ApolloReactCommon.MutationResult<DeleteTradeMutation>;
export type DeleteTradeMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTradeMutation, DeleteTradeMutationVariables>;
export const GetMetricDocument = gql`
    query getMetric {
  trade_metric {
    longs
    shorts
    return
    total_trades
    wins
  }
}
    `;

/**
 * __useGetMetricQuery__
 *
 * To run a query within a React component, call `useGetMetricQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetricQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetricQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMetricQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMetricQuery, GetMetricQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMetricQuery, GetMetricQueryVariables>(GetMetricDocument, baseOptions);
      }
export function useGetMetricLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMetricQuery, GetMetricQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMetricQuery, GetMetricQueryVariables>(GetMetricDocument, baseOptions);
        }
export type GetMetricQueryHookResult = ReturnType<typeof useGetMetricQuery>;
export type GetMetricLazyQueryHookResult = ReturnType<typeof useGetMetricLazyQuery>;
export type GetMetricQueryResult = ApolloReactCommon.QueryResult<GetMetricQuery, GetMetricQueryVariables>;