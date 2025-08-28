import dbConnect from '../lib/mongodb';
import Admin from '../models/Admin';
import Product from '../models/Product';

async function initDatabase() {
  try {
    await dbConnect();
    
    // Create admin user
    const adminExists = await Admin.findOne({ email: 'uniqshaan472@gmail.com' });
    
    if (!adminExists) {
      const admin = new Admin({
        email: 'uniqshaan472@gmail.com',
        password: 'admin123456',
        name: 'Admin User',
        role: 'admin'
      });
      
      await admin.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user already exists');
    }
    
    // Create sample products
    const sampleProducts = [
      // Vegetables
      {
        name: 'Fresh Tomatoes',
        category: 'vegetables',
        description: 'Organic red tomatoes, perfect for salads and cooking',
        image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400',
        price: 2.50,
        unit: 'kg',
        featured: true
      },
      {
        name: 'Green Bell Peppers',
        category: 'vegetables',
        description: 'Crisp green bell peppers, rich in vitamins',
        image: 'https://images.unsplash.com/photo-1525607551316-5a9e1c8b3c3c?w=400',
        price: 3.20,
        unit: 'kg',
        featured: false
      },
      {
        name: 'Fresh Carrots',
        category: 'vegetables',
        description: 'Sweet and crunchy carrots, perfect for juicing',
        image: 'https://images.unsplash.com/photo-1447175008436-1701707538da?w=400',
        price: 1.80,
        unit: 'kg',
        featured: true
      },
      {
        name: 'Broccoli',
        category: 'vegetables',
        description: 'Fresh green broccoli, packed with nutrients',
        image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400',
        price: 4.50,
        unit: 'kg',
        featured: false
      },
      
      // Spices
      {
        name: 'Black Pepper',
        category: 'spices',
        description: 'Premium quality black pepper, freshly ground',
        image: 'https://images.unsplash.com/photo-1589820296150-ecf34d9d5e4b?w=400',
        price: 15.00,
        unit: 'kg',
        featured: true
      },
      {
        name: 'Cinnamon Sticks',
        category: 'spices',
        description: 'Aromatic cinnamon sticks from Ceylon',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: 25.00,
        unit: 'kg',
        featured: false
      },
      {
        name: 'Turmeric Powder',
        category: 'spices',
        description: 'Pure turmeric powder with high curcumin content',
        image: 'https://images.unsplash.com/photo-1589820296150-ecf34d9d5e4b?w=400',
        price: 12.50,
        unit: 'kg',
        featured: true
      },
      {
        name: 'Cardamom Pods',
        category: 'spices',
        description: 'Green cardamom pods, perfect for tea and cooking',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
        price: 35.00,
        unit: 'kg',
        featured: false
      },
      
      // Fruits
      {
        name: 'Fresh Apples',
        category: 'fruits',
        description: 'Sweet and crisp red apples, perfect for snacking',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400',
        price: 4.00,
        unit: 'kg',
        featured: true
      },
      {
        name: 'Bananas',
        category: 'fruits',
        description: 'Yellow ripe bananas, rich in potassium',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
        price: 2.80,
        unit: 'kg',
        featured: false
      },
      {
        name: 'Oranges',
        category: 'fruits',
        description: 'Juicy sweet oranges, high in vitamin C',
        image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400',
        price: 3.50,
        unit: 'kg',
        featured: true
      },
      {
        name: 'Grapes',
        category: 'fruits',
        description: 'Sweet purple grapes, perfect for wine making',
        image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=400',
        price: 6.00,
        unit: 'kg',
        featured: false
      }
    ];
    
    for (const productData of sampleProducts) {
      const existingProduct = await Product.findOne({ 
        name: productData.name,
        category: productData.category 
      });
      
      if (!existingProduct) {
        const product = new Product(productData);
        await product.save();
        console.log(`Created product: ${productData.name}`);
      }
    }
    
    console.log('Database initialization completed successfully');
    process.exit(0);
    
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

initDatabase();
