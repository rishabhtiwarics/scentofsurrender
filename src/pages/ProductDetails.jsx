import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/assets.js";
import { useCart } from "../context/CartContext.jsx";
import ProductSection from "../components/shop/ProductSection.jsx";
import BottleSizeOptions from "../components/shop/BottleSizeOptions.jsx";
import ProductBenefit from "../components/shop/ProductBenefit.jsx";
import { 
  ChevronLeft, ChevronRight, Star, Minus, Plus, 
  ShoppingBag, ShieldCheck, Banknote, MapPinned, Truck 
} from "../components/common/Icons.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart, inCart } = useCart();
  
  // Find product or default to first
  const product = products.find(p => p.id === id) || products[0];
  
  // State
  const [activeImage, setActiveImage] = useState(0);
  const [selectedBottleOption, setSelectedBottle] = useState("100ml");
  const [quantity, setQuantity] = useState(1);
  const [showSticky, setShowSticky] = useState(false);


  // Mock images based on the main product image (using it repeatedly or variations)
  const images = [product.src, product.src, product.src];
  const selectedImage = images[activeImage];
  const visibleThumbnails = images.slice(0, 4);
  const thumbnailStart = 0;

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moveMainImage = (dir) => {
    setActiveImage(prev => {
      const next = prev + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  const selectImage = (index) => {
    setActiveImage(index);
  };

  const addQuantityToCart = () => {
    addToCart({
      ...product,
      quantity,
      size: selectedBottleOption
    });
  };

  const buyNow = () => {
    addQuantityToCart();
    // In a real app, this would redirect to checkout
    // navigate('/checkout');
  };


  // Prices
  const basePrice100 = 1499;
  const basePrice50 = Math.round(basePrice100 / 2);
  const displayedPrice = selectedBottleOption === "50ml" ? basePrice50 : basePrice100;
  const displayedOldPrice = selectedBottleOption === "50ml" ? 999 : 1999;
  const bottleOptions = ["50ml", "100ml"];

  return (
    <main className="product-details-page">
      <section className="container shop-main-section">
        {/* Pagination / Breadcrumbs */}
        <div className="product-pagination">
          <a href="/">Home</a> 
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail">
          <div className="product-gallery">
            <img className="product-gallery-main" src={selectedImage} alt={product.name} />
            {images.length > 1 && (
              <>
                {activeImage > 0 && (
                  <button className="product-gallery-nav previous" type="button" onClick={() => moveMainImage(-1)} aria-label="Previous product image">
                    <ChevronLeft size={23} />
                  </button>
                )}
                {activeImage < images.length - 1 && (
                  <button className="product-gallery-nav next" type="button" onClick={() => moveMainImage(1)} aria-label="Next product image">
                    <ChevronRight size={23} />
                  </button>
                )}
                <div className="product-gallery-thumbs">
                  <div className="thumbnail-list">
                    {visibleThumbnails.map((image, offset) => {
                      const index = thumbnailStart + offset;
                      return (
                        <button type="button" className={activeImage === index ? 'active' : ''} onClick={() => selectImage(index)} key={`${image}-${index}`} aria-label={`View ${product.name} image ${index + 1}`}>
                          <img src={image} alt="" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="product-detail-info">
            <span className="eyebrow">{product.badge || "Signature Collection"}</span>
            <h1>{product.name}</h1>
            <div className="product-detail-meta">
              <span className="detail-rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill={index < 5 ? 'currentColor' : 'none'} />
                ))}
                <strong>5.0</strong>
              </span>
              <span className="detail-stock"><i />In Stock</span>
            </div>
            
            <div className="price big">
              <strong>{selectedBottleOption ? '₹' : 'From ₹'}{displayedPrice.toLocaleString('en-IN')}</strong>
              <del>₹{displayedOldPrice.toLocaleString('en-IN')}</del>
            </div>
            
            <BottleSizeOptions options={bottleOptions} selected={selectedBottleOption} onSelect={setSelectedBottle} />
            
            <div className="product-description-detailed">
              <p>In a world that never stops chasing, Scent of Surrender invites you to pause… and power up.</p>
              <p>Crafted for the modern explorer, {product.name} is a bold yet mysterious fragrance that blends deep woods, warm spice, and sensual musk into an unforgettable signature scent. It’s not just perfume — it’s an attitude.</p>
              <p>This fragrance is for the man who walks alone, but never unnoticed.<br/>For the one who surrenders to the moment… yet commands every room.</p>
              <p><strong>Dark. Magnetic. Timeless.</strong></p>
              
              <h4>Fragrance Profile</h4>
              <p><strong>Fragrance Family:</strong> Woody Oriental / Spicy Amber</p>
              <p><strong>Top Notes:</strong> Bergamot • Black Pepper • Fresh Citrus</p>
              <p><strong>Heart Notes:</strong> Lavender • Cardamom • Smoky Incense</p>
              <p><strong>Base Notes:</strong> Amber • Patchouli • Sandalwood • Musk • Vanilla</p>
            </div>
            
            <div className="product-tags">
              {['Floral', 'Woody', 'Long-lasting'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            
            <div className="product-purchase-row">
              <div className="product-quantity">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus size={17} /></button>
                <strong>{quantity}</strong>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}><Plus size={17} /></button>
              </div>
              <button className="primary-btn" disabled={!selectedBottleOption || inCart(product.id)} onClick={addQuantityToCart}>
                <ShoppingBag size={18} />
                {inCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button type="button" className="light-btn product-buy-now" disabled={!selectedBottleOption} onClick={buyNow}>
                Buy Now
              </button>
            </div>

            <div className="prepaid-offer">Get extra 5% off on prepaid orders</div>
          </div>
        </div>

        <div className="product-benefits-fullwidth">
          <ProductBenefit icon={ShieldCheck} text="Secure Transaction" />
          <ProductBenefit icon={Banknote} text="Pay on Delivery" />
          <ProductBenefit icon={MapPinned} text="Easy Order Tracking" />
          <ProductBenefit icon={Truck} text="Free Delivery" />
        </div>


      </section>
      
      <div className={`product-section__sticky-product ${showSticky ? 'show' : ''}`}>
        <div className="container sticky-product-inner">
          <img src={product.src} alt="" />
          <div className="sticky-product-copy">
            <strong>{product.name}</strong>
            <span>{selectedBottleOption ? '₹' : 'From ₹'}{displayedPrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="sticky-product-quantity">
            <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus size={16} /></button>
            <strong>{quantity}</strong>
            <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((current) => current + 1)}><Plus size={16} /></button>
          </div>
          <button type="button" className="primary-btn sticky-product-add" disabled={!selectedBottleOption || inCart(product.id)} onClick={addQuantityToCart}>
            <ShoppingBag size={17} />
            {inCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </main>
  );
}
