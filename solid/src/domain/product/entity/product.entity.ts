/* eslint-disable no-useless-constructor */
export type TProductProps = {
  id: string
  name: string
  price: number
  quantity: number
}

export class Product {
  private constructor(private props: TProductProps) {}

  public static create(name: string, price: number) {
    return new Product({
      id: crypto.randomUUID().toString(),
      name,
      price,
      quantity: 0,
    })
  }

  public static with(props: TProductProps) {
    return new Product(props)
  }

  public get id() {
    return this.props.id
  }

  public get name() {
    return this.props.name
  }

  public get price() {
    return this.props.price
  }

  public get quantity() {
    return this.props.quantity
  }

  public increaseQuantity(quantity: number) {
    this.props.quantity += quantity
  }

  public decreaseQuantity(quantity: number) {
    this.props.quantity -= quantity
  }
}
