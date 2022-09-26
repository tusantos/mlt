interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface EshopRubro {
  category_id: string;
  name: string;
  id: string;
}

interface Country {
  id: string;
}

interface City {
  id: string;
}

interface Neighborhood {
  id?: any;
}

interface State {
  id: string;
}

interface EshopLocation {
  country: Country;
  city: City;
  neighborhood: Neighborhood;
  state: State;
}

interface Eshop {
  seller: number;
  eshop_rubro: EshopRubro;
  eshop_id: number;
  nick_name: string;
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  eshop_experience: number;
  eshop_locations: EshopLocation[];
}

interface Excluded {
  real_value: number;
  real_rate: number;
}

interface Cancellations {
  period: string;
  rate: number;
  value: number;
  excluded: Excluded;
}

interface Excluded2 {
  real_value: number;
  real_rate: number;
}

interface Claims {
  period: string;
  rate: number;
  value: number;
  excluded: Excluded2;
}

interface Excluded3 {
  real_value: number;
  real_rate: number;
}

interface DelayedHandlingTime {
  period: string;
  rate: number;
  value: number;
  excluded: Excluded3;
}

interface Sales {
  period: string;
  completed: number;
}

interface Metrics {
  cancellations: Cancellations;
  claims: Claims;
  delayed_handling_time: DelayedHandlingTime;
  sales: Sales;
}

interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

interface Transactions {
  canceled: number;
  period: string;
  total: number;
  ratings: Ratings;
  completed: number;
}

interface SellerReputation {
  power_seller_status: string;
  level_id: string;
  metrics: Metrics;
  transactions: Transactions;
  real_level: string;
  protection_end_date?: Date;
}

interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  eshop: Eshop;
  seller_reputation: SellerReputation;
}

interface Conditions {
  context_restrictions: string[];
  start_time?: Date;
  end_time?: Date;
  eligible: boolean;
}

interface Metadata {
  campaign_id: string;
  promotion_id: string;
  promotion_type: string;
  discount_meli_amount?: number;
  campaign_discount_percentage?: number;
  campaign_end_date?: Date;
  order_item_price?: number;
  funding_mode: string;
}

export interface Price {
  id: string;
  type: string;
  amount: number;
  regular_amount?: number;
  currency_id: string;
  last_updated: Date;
  conditions: Conditions;
  exchange_rate_context: string;
  metadata: Metadata;
}

interface Presentation {
  display_currency: string;
}

interface Conditions2 {
  context_restrictions: string[];
  start_time?: Date;
  end_time?: Date;
  eligible: boolean;
}

interface ReferencePrice {
  id: string;
  type: string;
  conditions: Conditions2;
  amount: number;
  currency_id: string;
  exchange_rate_context: string;
  tags: any[];
  last_updated: Date;
}

interface Prices {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: ReferencePrice[];
  purchase_discounts: any[];
}

interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}

interface Country2 {
  id: string;
  name: string;
}

interface State2 {
  id: string;
  name: string;
}

interface City2 {
  id: string;
  name: string;
}

interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Country2;
  state: State2;
  city: City2;
  latitude: string;
  longitude: string;
}

interface ValueStruct {
  unit: string;
  number: number;
}

interface Struct {
  number: number;
  unit: string;
}

interface Value {
  struct: Struct;
  source: any;
  id: string;
  name: string;
}

interface Attribute {
  value_id: string;
  value_name: string;
  attribute_group_id: string;
  source: any;
  id: string;
  name: string;
  value_struct: ValueStruct;
  values: Value[];
  attribute_group_name: string;
}

interface DifferentialPricing {
  id: number;
}

interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price?: any;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  promotions?: any;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price?: number;
  category_id: string;
  official_store_id?: number;
  domain_id: string;
  catalog_product_id: string;
  tags: string[];
  catalog_listing: boolean;
  use_thumbnail_id: boolean;
  offer_score?: any;
  offer_share?: any;
  match_score?: any;
  winner_item_id?: any;
  melicoin?: any;
  discounts?: any;
  order_backend: number;
  differential_pricing: DifferentialPricing;
}

interface Sort {
  id: string;
  name: string;
}

interface AvailableSort {
  id: string;
  name: string;
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface Value2 {
  id: string;
  name: string;
  path_from_root: PathFromRoot[];
}

interface Filter {
  id: string;
  name: string;
  type: string;
  values: Value2[];
}

interface Value3 {
  id: string;
  name: string;
  results: number;
}

interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value3[];
}

export interface QueryResultDTO {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}
