export interface MercadopagoPayment {
  transaction_amount: number;
  token?: string;
  description: string;
  installments: number;
  payment_method_id: string;
  external_reference?: string;
  metadata?: { [key: string]: any; };
  payer: MercadopagoPayer;
}

export interface MercadopagoPayer {
  email: string;
  first_name?: string;
  last_name?: string;
  identification?: MercadopagoPayerIdentification;
}

export interface MercadopagoPayerIdentification {
  type: string;
  number: string;
}

export interface MercadopagoResponse {
  id: number;
  status: string;
  status_detail: string;
  transaction_details?: MercadopagoTransactionDetails;
  barcode?: MercadopagoBarcode;
  point_of_interaction?: MercadopagoPointOfInteraction;
}

export interface MercadopagoTransactionDetails {
  external_resource_url?: string;
}

export interface MercadopagoBarcode {
  content: string;
}

export interface MercadopagoPointOfInteraction {
  transaction_data: MercadopagoTransactionData;
}

export interface MercadopagoTransactionData {
  qr_code: string;
  qr_code_base64: string;
}

export interface MercadopagoWebhook {
  action: string,
  api_version: string,
  data: MercadopagoWebhookData,
  date_created: string,
  id: number,
  live_mode: boolean,
  type: string,
  user_id: string,
}

export interface MercadopagoWebhookData {
  id: number;
}