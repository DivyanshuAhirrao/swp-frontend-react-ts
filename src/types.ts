// src/types.ts
export interface SWP {
    _id?: string;
    userId: string;
    investmentAmount: number;
    withdrawAmount: number;
    frequency: 'monthly' | 'quarterly';
    startDate: string;
    endDate: string;
  }
  