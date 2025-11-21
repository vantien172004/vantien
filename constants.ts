import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'sofa',
    title: 'Sofa',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEydqjOfUGZetP0i1PBZGQnNMo_Cp1zWIEEYZLaSGNW6wMLu68aDNNcvmZssSw6WyHaxku-CFNMR4nYp0jZUYRwTV5OV6XKuR0uHEw3m3QFg9vlbujdx87YvXk9g_aTOAw3Jj5Nyt48EJJ6ix8_V67OUqXDXWIdph3AlE9WxE3HOZgNf3R3Bo3jPaZw6UcMb7jokcSR8Hq9YvlglSOmGRu6Ddo0_36eZQYaIVXQ_YMDUQM58AclXaLqXgdp_ZajDijAEXsqKySVBc',
    backgroundUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiUHmQZo9ibXUbgNZyUpXaCWbwlRbC5rcwjt5LsZSRwGr5gKeScWThf1x7UNGJnKf8tyLipjbHjKvigAaq1JLjV5v0qMD8Dh2SPhMzRbcQj--lG3NzjYK1RGmdGLjpE8m8KTTAjVAruxafbjRcqBi5tCDcC3osf9pDljdUiMwCpdQiOS8NSRzmYvjSV75VAdcQP6cuY1MCmrvrASxjKiRTEBhriBhlR0ZEFb4VNGBRSNVjdZi4ej5xPcbcAea5Yi23nZWXskJBFXI'
  },
  {
    id: 'table',
    title: 'Bàn',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEydqjOfUGZetP0i1PBZGQnNMo_Cp1zWIEEYZLaSGNW6wMLu68aDNNcvmZssSw6WyHaxku-CFNMR4nYp0jZUYRwTV5OV6XKuR0uHEw3m3QFg9vlbujdx87YvXk9g_aTOAw3Jj5Nyt48EJJ6ix8_V67OUqXDXWIdph3AlE9WxE3HOZgNf3R3Bo3jPaZw6UcMb7jokcSR8Hq9YvlglSOmGRu6Ddo0_36eZQYaIVXQ_YMDUQM58AclXaLqXgdp_ZajDijAEXsqKySVBc',
    backgroundUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsA1iA3WVusR1iOemwGXlrdPQ_v3SfFQ5oDwaBX9tp_6C-15UCTMD6--xNQ0YBoSM0IKoGdQqlUdGHQLEGFX0akA5TsJ80X_hHisE8uk1pAnpy-GBR6sc6qoAvU97bNr-NQqeQISq3-j3m95BDsji5Ak-8-BhFT0onSf6euV_KLBghl0bhrBVIZ7cqR7ZHeobjW7Dr90Dif4rztHupd5pbQ9dDS-TQA9dv-kBjSFoZFDhwmTVQo-5abU-aJ_gS2Y979JWKH6drVF8'
  },
  {
    id: 'chair',
    title: 'Ghế',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEydqjOfUGZetP0i1PBZGQnNMo_Cp1zWIEEYZLaSGNW6wMLu68aDNNcvmZssSw6WyHaxku-CFNMR4nYp0jZUYRwTV5OV6XKuR0uHEw3m3QFg9vlbujdx87YvXk9g_aTOAw3Jj5Nyt48EJJ6ix8_V67OUqXDXWIdph3AlE9WxE3HOZgNf3R3Bo3jPaZw6UcMb7jokcSR8Hq9YvlglSOmGRu6Ddo0_36eZQYaIVXQ_YMDUQM58AclXaLqXgdp_ZajDijAEXsqKySVBc',
    backgroundUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTCowV_RrWRbfzFmdCpx16xkHbnKvOH-W8klwRe2Rw15O4cZqvS-Nj-R3jfegEVA3cb4Lz24AeGSiLV_gG3IfqM0FMFksC3ePsMtDQbFM5YAp9E0owTCWUSLLfd5QZG5zBhhXLLrt1RbbYcNJ9j4S2ET-94kHJY110EzkSUjnKaNPI4B4gIBJzjCLWUTjSAK9j-1GdAtPxeGG5Yb7c-MxMzBCKe7uNEcoJ8-2n1SVoyi0pBUfQl27srqfdaUpwsPVrusd7P-IdaWE'
  },
  {
    id: 'wardrobe',
    title: 'Tủ',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEydqjOfUGZetP0i1PBZGQnNMo_Cp1zWIEEYZLaSGNW6wMLu68aDNNcvmZssSw6WyHaxku-CFNMR4nYp0jZUYRwTV5OV6XKuR0uHEw3m3QFg9vlbujdx87YvXk9g_aTOAw3Jj5Nyt48EJJ6ix8_V67OUqXDXWIdph3AlE9WxE3HOZgNf3R3Bo3jPaZw6UcMb7jokcSR8Hq9YvlglSOmGRu6Ddo0_36eZQYaIVXQ_YMDUQM58AclXaLqXgdp_ZajDijAEXsqKySVBc',
    backgroundUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw8db12wnflIC7NiLm4XYFBZegC5nOceuHSULHJhc4XagrRZ9tsBkr14odhCPqi3za0Mrcb1px-NVk5sYAn8mAdWSPY0fewIgqZJObjTqfeAyaVzD8vOEbo5PsTQOI4ophe2nLarI8PgOI4hf1cyOh2AQjzKWWk0pM5hLgPTvtuyGVSM_Hl0TFnvMhHEJBx-LsMnbojp0ayzxc38x0XkNXWPC6TPmlfGH9LPyV5E3ToE_pUngomWNmV3mBFA1ZYfBkMGwJeBtZZCw'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Ghế bành thư giãn',
    price: '6.990.000₫',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn8xInZi2fpTNadgNmTCie7i7R8IP3TEPKG72T4NFQNmM-QbEktHj9WBlf8_V233XZ38FKYNak51XEZ4Tp5RBQU4XzXirjco3jZgUglb6K3T79OBXhb1xQM-wtGyIr5nMoWL_jVHmHvUhYLrJhI6i3Gp6NZz7YbTAxTyrZgWoe7Bm8aCfVGBAN1TM2ToXt-bcUNTnQQ7iaAFPkftjjLusLgfXKTOgVnm_CquSKkoljuzd5cHoZPiuSmV3Yzk77HoYqBoeSwNVEgew'
  },
  {
    id: '2',
    title: 'Sofa Vải Hiện Đại',
    price: '14.500.000₫',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLUevsL-ykB15rOQiPfbrb1oiepsZX2y6FYQQl4zEcNdc5YYmeFke6bvsVmonxg4zrgC2EKA6BvIZ63A3rOIkOyvrRDP7rmNZhVvaQFnQM7-yqHUJsw7QtvCUUfdBmYaNRa9Uss0-mC3nNbJBLlIgr3RIN_CbycO6Acb912PsO2rM14uUHlwGIhaoknr-yYUbhA-q2H7a7gxCIWGVr8pxV_HlDlLgc3JHyJizVXHmvl_tl5FzQn1xrvPXaGuYM25c0Y0gewt-yrVU'
  },
  {
    id: '3',
    title: 'Bàn ăn gỗ sồi',
    price: '8.200.000₫',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbKJ60jG3zQreokA7ri8ZUbMDH62_c-NlQCFVWspceJrAuROnA1mw0o0ugIIL2ORu8-2ctXuNyXHAzeZxrgcXoMsMgCtiacUdXftdwQIjFrPLWSAhQ6wa--Q9H1EWrI7TcTX4pw9RyK3hyeKv8OesS9furecIHgjHXmK09ULh3cFOs6zabMP8tzx2mAnUF8o6S-dRIitpOB8NTi-QGQZoiinxEP2nxudLLKyQ36z1m-gFquzznd794_I2C9jVvM_aDVW61W9G2ds0'
  },
  {
    id: '4',
    title: 'Đèn trang trí',
    price: '2.550.000₫',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5a6m4O2ZabQgRqR8jH280G-oDuB7T24lb1K9n-BQ5o840EPUQz50js9ar3Ou3ZNe3jMnlcPHtdaXTSTNuHXnZGEOBEpsgvcrT2A6N8ROI_3IUkcl4R748LB4hpdoU8B2ayj42UhqX3ifpafAeGID9xM1ZIa2P4iIukPMenaXlHswLHcV6oLYA-bmU8lm_eXSljJ9-0Dvalt3CG_htK--FZ58u8H51Xz2WYJt0UfPrFPFgVkN2c1JVaElGR72vtBzIzIYurzEjgCA'
  }
];
