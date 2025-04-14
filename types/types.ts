import React from 'react';
import { Control } from 'react-hook-form';
/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface PaymentMethodsProps{
  icon:string
  label:string
  selected:boolean
  onClick:()=>void
  sx?:object
}
export interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  sx?: object;
}
export interface PinInputProps {
  name: string;
  control: Control<any>;
  inputType?: "text" | "password";
  numInputs?: number;
  disabled?: boolean;
  onComplete?: (isComplete: boolean) => void;
}

