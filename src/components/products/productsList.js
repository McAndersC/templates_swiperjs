import styles from './productsList.module.css';
import { getSlowProducts } from '@/lib/data.service';
const ProductsList = async () => {

    let products = await getSlowProducts()

    return (
        <div className={styles.container}>
            <h1>ProductsList {products.length}</h1>
        </div>
    )
};
export default ProductsList