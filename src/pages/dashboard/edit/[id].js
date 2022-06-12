import { useEffect, useState } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import axios from 'axios';
import endpoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const [exist, setExist] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endpoints.products.getProduct(id));
      setProduct(response.data);
      setExist(true);
    }
    getProduct().catch(() => {
      setExist(false);
    });
    setLoading(false);
  }, [router?.isReady]);
  return (
    <>
      {loading && <h1>Cargando</h1>}
      {exist && <FormProduct product={product} />}
      {!exist && router?.isReady && <img src="https://www.impactplus.com/hubfs/404-error-page-examples-best.jpg" />}
    </>
  );
}
