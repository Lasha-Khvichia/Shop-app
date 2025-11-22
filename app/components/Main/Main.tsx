type HomePage = card[]

interface card {
    id: number;
    name: string;
    price: string;
    salePrice?: string;
    seller: string;
    saleDate?: Date;
}

export const Main = () => {
    const dummyData: HomePage = [
    {id: 1, name: 'Rolex Submariner Watch', price: '$12,499', salePrice: '$10,999', seller: 'Luxury Timepieces', saleDate: new Date('2025-12-31')},
    {id: 2, name: 'Samsung 65" QLED 4K TV', price: '$1,299', seller: 'TechMart Electronics'},
    {id: 3, name: 'Intel Core i9 Gaming PC', price: '$2,499', salePrice: '$2,199', seller: 'Custom Builds Pro', saleDate: new Date('2025-11-30')},
    {id: 4, name: 'ASUS ROG Gaming Laptop', price: '$1,899', seller: 'PC World'},
    {id: 5, name: 'Nike Dri-FIT T-shirt', price: '$34.99', salePrice: '$24.99', seller: 'Athletic Wear Co', saleDate: new Date('2025-12-15')},
    {id: 6, name: 'Feastables Chocolate Bar', price: '$4.99', seller: 'Sweet Treats Market'},
    {id: 7, name: 'Apple AirPods Pro', price: '$249', salePrice: '$199', seller: 'Audio Haven', saleDate: new Date('2025-12-01')},
    {id: 8, name: 'Sony PlayStation 5', price: '$499', seller: 'Gaming Central'},
    {id: 9, name: 'Dyson V15 Vacuum Cleaner', price: '$649', salePrice: '$549', seller: 'Home Essentials', saleDate: new Date('2025-11-28')},
    {id: 10, name: 'Canon EOS R6 Camera', price: '$2,499', seller: 'Photography Pro'},
    {id: 11, name: 'Herman Miller Office Chair', price: '$1,395', seller: 'Workspace Solutions'},
    {id: 12, name: 'Ninja Air Fryer', price: '$129', salePrice: '$99', seller: 'Kitchen Masters', saleDate: new Date('2025-12-10')},
    {id: 13, name: 'Bose QuietComfort Headphones', price: '$349', seller: 'Sound Studio'},
    {id: 14, name: 'Kindle Paperwhite', price: '$139', salePrice: '$119', seller: 'Book Haven', saleDate: new Date('2025-12-20')},
    {id: 15, name: 'Levi\'s 501 Original Jeans', price: '$89', seller: 'Denim World'},
    {id: 16, name: 'Instant Pot Duo Plus', price: '$119', salePrice: '$79', seller: 'Kitchen Masters', saleDate: new Date('2025-11-25')},
    {id: 17, name: 'Fitbit Charge 6', price: '$159', seller: 'Fitness Tech'},
    {id: 18, name: 'Adidas Ultraboost Sneakers', price: '$189', salePrice: '$149', seller: 'Sneaker Hub', saleDate: new Date('2025-12-05')},
    {id: 19, name: 'KitchenAid Stand Mixer', price: '$449', seller: 'Culinary Tools'},
    {id: 20, name: 'Ray-Ban Aviator Sunglasses', price: '$199', seller: 'Eyewear Express'},
    {id: 21, name: 'Patagonia Down Jacket', price: '$329', salePrice: '$249', seller: 'Outdoor Gear Co', saleDate: new Date('2025-12-31')},
]

    return (
        <main>
            
        </main>
    )
}