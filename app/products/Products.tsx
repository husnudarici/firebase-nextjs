
import { adminDb } from '@/src/lib/firebase-admin';

import ProductsList from './components/products-list';

import { Product } from './types';

const Products = async () => {
    const snap = await adminDb.collection("products").orderBy("price", "desc").get();

    const items: Product[] = snap.docs.map((d) => {
        const v = d.data() as any;
        return {
        id: d.id,
        name: v.name ?? "",
        price: Number(v.price ?? 0),
        };
    });

    return <ProductsList items={items} />
}

export default Products