


// shoppingCartStore.ts
import { Model } from '../Model';

// 商品接口
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// 购物车状态
interface CartState {
  products: Product[];

  // 计算属性（自动计算）
  totalItems: number;      // 总商品数量
  totalPrice: number;      // 总价格
  averagePrice: number;    // 平均价格
  isEmpty: boolean;        // 是否为空
}

// 创建购物车Store
const cartStore = new Model<CartState>({
  state: {
    products: [],
    totalItems: 0,
    totalPrice: 0,
    averagePrice: 0,
    isEmpty: true,
  },

  // 🆕 计算属性配置
  computed: [
    // 方式1：对象形式 - 只依赖products字段
    {
      keys: ['products'],
      handler: (state, prevState, diff) => {
        const { products } = state;

        console.log('🔄 购物车计算属性更新，变化的字段:', diff);

        // 计算总数量
        const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);

        // 计算总价格
        const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

        // 计算平均价格
        const averagePrice = totalItems > 0 ? totalPrice / totalItems : 0;

        // 判断是否为空
        const isEmpty = products.length === 0;

        console.log('📊 计算结果:', {
          totalItems,
          totalPrice: totalPrice.toFixed(2),
          averagePrice: averagePrice.toFixed(2),
          isEmpty
        });

        return {
          totalItems,
          totalPrice,
          averagePrice,
          isEmpty,
        };
      },
    },
  ],
});

// 辅助函数
const addProduct = (product: Omit<Product, 'quantity'>) => {
  const currentProducts = cartStore.getState().products;
  const existingProduct = currentProducts.find(p => p.id === product.id);

  if (existingProduct) {
    // 增加数量
    cartStore.setState({
      products: currentProducts.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      )
    });
  } else {
    // 添加新商品
    cartStore.setState({
      products: [...currentProducts, { ...product, quantity: 1 }]
    });
  }
};

const removeProduct = (productId: string) => {
  const currentProducts = cartStore.getState().products;
  cartStore.setState({
    products: currentProducts.filter(p => p.id !== productId)
  });
};

const clearCart = () => {
  cartStore.setState({ products: [] });
};

export { cartStore, addProduct, removeProduct, clearCart };