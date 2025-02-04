export interface FranchiseApplication {
    firstname: string
    lastname?: string
    email: string
    phone: string
    address1: string
    address2?: string
    state: string
    pincode: string
    createdAt: string
    updatedAt: string
  }
  
  export interface MetricCardProps {
    title: string
    value: string | number
    percentage: number
    color: string
  }