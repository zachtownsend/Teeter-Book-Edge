type TLoanType =
  | "Flexi-Loan"
  | "Business Loan"
  | "Cash Advance"
  | "RLS"
  | "CBILS";

interface ILoanHistory {
  loan_started: Date;
  loan_ended: Date;
  principle: number;
  interest_rate: number;
  interest: number;
}

export interface ISingleApplication {
  id: number;
  first_name: string;
  last_name: string;
  loan_amount: number;
  loan_type: TLoanType;
  email: string;
  company: string;
  date_created: Date;
  expiry_date: Date;
  avatar: string;
  loan_history: ILoanHistory[];
}
