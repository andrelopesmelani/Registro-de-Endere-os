export interface RouteItem {
  title: string
  icon: string
  to: string
}

export interface Address {
  id: number
  title: string
  zip_code: string
  street: string
  complement: string
  neighborhood: string
  locality: string
  state: string
  createdAt: Date | null | string
  updatedAt: Date | null | string
}
